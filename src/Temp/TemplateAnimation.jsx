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
            <div className="stage">
                <div className="scene">
                    <div className="halo">
                        <i></i>
                        <span className="halo-star"></span>
                        <span className="halo-star"></span>
                        <span className="halo-star"></span>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                    <div className="lantern">
                        <div className="lantern-handle"></div>
                        <div className="lantern-inner">
                            <div className="lantern-chain"></div>
                            <div className="lantern-head"></div>
                            <div className="lantern-body">
                                <div className="lantern-spark"></div>
                                <div className="lantern-spark"></div>
                                <div className="lantern-spark"></div>
                                <div className="lantern-flame"></div>
                            </div>
                            <div className="lantern-base"></div>
                        </div>
                    </div>
                    <div className="planets">
                        <div className="planet"></div>
                        <div className="planet"></div>
                        <div className="planet"></div>
                        <div className="planet"></div>
                        <div className="planet"></div>
                        <div className="planet"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const TemplateAnimationA03 = () => {
    return (
        <div className='TemplateAnimation TemplateAnimationA03'>
            <div className="main">
                <div className="l">
                    <div className="camisa l--camisa"></div>
                    <div className="cuello l--cuello"></div>
                    <div className="cabeza l--cabeza">
                        <div className="cabello"></div>
                        <div className="cejas">
                            <div className="ceja"></div>
                            <div className="ceja"></div>
                        </div>
                        <div className="ojos l--ojos">
                            <div className="ojo l--ojo"></div>
                            <div className="ojo l--ojo"></div>
                        </div>
                        <div className="l--nariz"></div>
                        <div className="barba l--barba">
                            <div className="boca l--boca">
                                <div className="dientes l--dientes"></div>
                                <div className="dientes l--dientes"></div>
                                <div className="l--lengua"></div>
                            </div>
                        </div>
                        <div className="oreja l--oreja"></div>
                        <div className="l--copete"></div>
                    </div>
                </div>
                <div className="x-ray">
                    <div className="r">
                        <div className="camisa r--camisa"></div>
                        <div className="cuello r--cuello"></div>
                        <div className="r--columna">
                            <div className="r--huesos"></div>
                            <div className="r--huesos"></div>
                            <div className="r--huesos"></div>
                            <div className="r--huesos"></div>
                            <div className="r--huesos"></div>
                            <div className="r--huesos"></div>
                        </div>
                        <div className="cabeza r--cabeza">
                            <div className="ojos l--ojos">
                                <div className="ojo r--ojo"></div>
                                <div className="ojo r--ojo"></div>
                            </div>
                            <div className="r--nariz"></div>
                            <div className="barba r--barba">
                                <div className="boca r--boca">
                                    <div className="dientes r--dientes"></div>
                                    <div className="dientes r--dientes"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export const ANIMATIONLIST = {
    TemplateAnimationA01,
    TemplateAnimationA02,
    TemplateAnimationA03
}

