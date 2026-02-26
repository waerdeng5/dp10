import './TemplateAnimation.scss'

const TemplateAnimationA01 = () => {
    return (
        <div className='TemplateAnimation TemplateAnimationA01'>
            <div className="wrapper">
                <div className="candles">
                    <div className="light__wave"></div>
                    <div className="candle1">
                        <div className="candle1__body">
                            <div className="candle1__eyes">
                                <span className="candle1__eyes-one"></span>
                                <span className="candle1__eyes-two"></span>
                            </div>
                            <div className="candle1__mouth"></div>
                        </div>
                        <div className="candle1__stick"></div>
                    </div>

                    <div className="candle2">
                        <div className="candle2__body">
                            <div className="candle2__eyes">
                                <div className="candle2__eyes-one"></div>
                                <div className="candle2__eyes-two"></div>
                            </div>
                        </div>
                        <div className="candle2__stick"></div>
                    </div>
                    <div className="candle2__fire"></div>
                    <div className="sparkles-one"></div>
                    <div className="sparkles-two"></div>
                    <div className="candle__smoke-one">
                    </div>
                    <div className="candle__smoke-two">
                    </div>
                </div>
                <div className="floor">
                </div>
            </div>
        </div>
    )
}

const TemplateAnimationA02 = () => {
    return (
        <div className='TemplateAnimation TemplateAnimationA02'>
            动画2
        </div>
    )
}
const TemplateAnimationA03 = () => {
    return (
        <div className='TemplateAnimation TemplateAnimationA03'>
            动画3
        </div>
    )
}



export const ANIMATIONLIST = {
    TemplateAnimationA01,
    TemplateAnimationA02,
    TemplateAnimationA03
}

