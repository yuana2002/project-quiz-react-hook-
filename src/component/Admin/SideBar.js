import 'react-pro-sidebar/dist/css/styles.css';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGithub, FaRegLaughWink, FaHeart, FaGem } from 'react-icons/fa';
import sidebarBg from '../../asset/sidebar.jpg';
import { DiReact } from "react-icons/di";
import './SideBar.scss'
import { Link } from 'react-router-dom';

const SideBar = (props) => {
    const { image, collapsed, toggled, handleToggleSidebar } = props;
    return (
        <>
            <ProSidebar
                image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div style={{
                        padding: '24px',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        fontSize: 14,
                        letterSpacing: '1px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                    }}
                    >
                        <DiReact size={'3em'} color={"00bfff"} />
                        <span>React</span>
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape='circle'>
                        <MenuItem
                            icon={<FaTachometerAlt />}
                        // suffix={<span className='badge red'>New</span>}
                        >
                            Dashboard
                            <Link to="/admin" />
                        </MenuItem>
                        {/* <MenuItem icon={<FaGem />}>components</MenuItem> */}
                    </Menu>
                    <Menu iconShape='circle'>
                        <SubMenu
                            // suffix={<span className='badge yellow'>3</span>}
                            icon={<FaGem />}
                            title={"Features"}
                        >
                            <MenuItem>
                                Quản lí User
                                <Link to="/admin/manage-user" />
                            </MenuItem>
                            <MenuItem>
                                Quản lí bài Quiz
                                <Link to="/admin/manage-quiz" />
                            </MenuItem>
                            <MenuItem>
                                Quản lí câu hỏi
                                <Link to="/admin/manage-question" />
                            </MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div className='sidebar-btn-wrapper'
                        style={{
                            padding: '20px 24px'
                        }}
                    >
                        <a
                            href='http://google.com'
                            target='_blank'
                            className='sidebar-btn'
                            rel='noopener noreferrer'
                        >
                            <FaGithub />
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                th.quoc
                            </span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </>
    )
}

export default SideBar;