import './LoadA14.scss'

const LoadA14 = () => {
    return (
        <div className="LoadA14">
            <div className="cube-shadow">
                <div className="face face-bottom"></div>
            </div>
            <div className="cube-shadow">
                <div className="face face-bottom"></div>
            </div>
            <div className="blur">
                <div className="cube-inner">
                    <div className="face face-front bg-color-in"></div>
                    <div className="face face-back bg-color-in"></div>
                    <div className="face face-right bg-color-in"></div>
                    <div className="face face-left bg-color-in"></div>
                    <div className="face face-top bg-color-in"></div>
                    <div className="face face-bottom bg-color-in"></div>
                </div>
            </div>
            <div className="cube-outer">
                <div className="face face-front bg-color-out">Processing</div>
                <div className="face face-back bg-color-out">Please wait</div>
                <div className="face face-right bg-color-out">...</div>
                <div className="face face-left bg-color-out">...</div>
                <div className="face face-top bg-color-out"></div>
                <div className="face face-bottom bg-color-out"></div>
            </div>
            <div className="light"></div>
            <div className="shadow"></div>
        </div>
    );
};

export default LoadA14;