
//import videoHomePage from '../../asset/video-home2.mp4';

const HomePage = (props) => {
    return (

        <div className="homepage-container">
            <video autoPlay muted loop>
                <source
                // src={videoHomePage}
                // type="video/mp4"
                />
            </video>
            <div className='homepage-content'>
                <div className='title-1'>
                    Tại thư mục chứa file cài đặt, chạy câu lệnh sau
                </div>
                <div className='title-2'>
                    Mở sẵn Docker Desktop và chắc chắn rằng đã chạy docker
                    Kiểm tra bằng cách gõ: docker -v
                </div>
                <div className='title-3'><button>Get start</button></div>
            </div>
        </div>
    );
}



export default HomePage;