import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc";
import axios from 'axios';
import { toast } from 'react-toastify';


const ModalCreateUser = (props) => {
    const { show, setShow } = props;
    const handleClose = () => {
        setShow(false);
        setEmail("");
        setPassword("");
        setUserName("");
        setRole("User");
        setImage("");
        setPreviewImage("");
    };

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUserName] = useState("")
    const [role, setRole] = useState("User")
    const [image, setImage] = useState("")
    const [previewImage, setPreviewImage] = useState("")

    const handleUploadFile = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]))
            setImage(event.target.files[0])
        } else {
            // setPreviewImage("")
        }
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };


    const handleSubmitCreateUser = async () => {
        //validate
        const isValidateEmail = validateEmail(email);
        if (!isValidateEmail) {
            toast.error("Invalidate email")
            return;
        }

        if (!password) {
            toast.error("Invalidate password")
            return;
        }

        const data = new FormData();
        data.append('email', email);
        data.append('password', password);
        data.append('username', username);
        data.append('role', role);
        data.append('image', image);
        data.append('previewImage', previewImage);
        let res = await axios.post('http://localhost:8081/api/v1/participant', data)
        console.log('>>', res.data)
        if (res.data && res.data.EC === 0) {
            toast.success("Add user success");
            handleClose();
        }
        if (res.data && res.data.EC !== 0) {
            toast.success(res.data.EM);
        }
    }

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Add user
            </Button> */}
            <Modal show={show}
                onHide={handleClose}
                size='xl'
                backdrop='static'
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className='form-label'>Email</label>
                            <input type="email"
                                className="form-control"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className='form-label'>Password</label>
                            <input type="password"
                                className="form-control"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className='form-label'>User name</label>
                            <input type="text"
                                className="form-control"
                                value={username}
                                onChange={(event) => setUserName(event.target.value)}
                            />
                        </div>
                        <div className=" col-md-4 ">
                            <label className='form-label'>Role</label>
                            <select
                                className="form-select"
                                value={role}
                                onChange={(event) => setRole(event.target.value)}
                            >
                                <option value="user">User</option>
                                <option>Admin</option>
                            </select>
                        </div>
                        <div className='col-md-12'>
                            <label className='form-label label-update' htmlFor='labelUpload' >
                                <FcPlus />  Update image
                            </label>
                            <input
                                type='file'
                                id='labelUpload' hidden
                                onChange={(event) => handleUploadFile(event)}
                            />
                        </div>
                        <div className='col-mf-12 img-preview'>
                            {previewImage ?
                                <img src={previewImage} />
                                :
                                <span>Preview image</span>
                            }
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCreateUser;