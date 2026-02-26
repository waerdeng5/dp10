import './LoadA02.scss'

const LoadA02 = () => {
    return (
        <div className='LoadA02'>
            <div className="cube div">
                <div className="top div"></div>
                <div className="div">
                    <span className="span" style={{ "--i": 0 }}>
                        <img src={'https://image.ljkjkf.com/intellisiteSystem_TieKe/jtgj/logo.png'} alt="" />
                    </span>
                    <span className="span" style={{ "--i": 1 }}>
                        <p>loading..</p>
                        <p>loading..</p>
                    </span>
                    <span className="span" style={{ "--i": 2 }}>
                        <img src={'https://image.ljkjkf.com/intellisiteSystem_TieKe/jtgj/logo.png'} alt="" />
                    </span>
                    <span className="span" style={{ "--i": 3 }}>
                        <p>loading..</p>
                        <p>loading..</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LoadA02;