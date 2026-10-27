import TechText from './TechText'
import TextLoop from './TextLoop'
import MaskedHeading from './MaskedHeading'
import ParticleText from './ParticleText'
import SplitFlapText from './SplitFlapText'
import WarpText from './WarpText'
import StrokeText from './StrokeText'
import DepthText from './DepthText'
import FoldText from './FoldText'


const BitsText_TechText = ({ data }) => <TechText {...data} />
const BitsText_TextLoop = ({ data }) => <TextLoop {...data} />
const BitsText_MaskedHeading = ({ data }) => <MaskedHeading {...data} />
const BitsText_ParticleText = ({ data }) => <ParticleText {...data} />
const BitsText_SplitFlapText = ({ data }) => <div className='SplitFlapText'><SplitFlapText {...data} /></div>
const BitsText_WarpText = ({ data }) => <WarpText {...data} />
const BitsText_StrokeText = ({ data }) => <StrokeText {...data} />
const BitsText_DepthText = ({ data }) => <div className='DepthText'><DepthText {...data} /></div>
const BitsText_FoldText = ({ data }) => <div className='FoldText'><FoldText {...data} /></div>



export const BitsTextTemplate = {
    BitsText_TechText,
    BitsText_TextLoop,
    BitsText_MaskedHeading,
    BitsText_ParticleText,
    BitsText_SplitFlapText,
    BitsText_WarpText,
    BitsText_StrokeText,
    BitsText_DepthText,
    BitsText_FoldText,
}
