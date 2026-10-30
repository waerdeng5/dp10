import TechText from './TechText'
import TextLoop from './TextLoop'
import MaskedHeading from './MaskedHeading'
import ParticleText from './ParticleText'
import SplitFlapText from './SplitFlapText'
import WarpText from './WarpText'
import StrokeText from './StrokeText'
import DepthText from './DepthText'
import FoldText from './FoldText'
import EchoText from './EchoText'
import CircularText from './CircularText'
import TextType from './TextType'
import Shuffle from './Shuffle'
import ShinyText from './ShinyText'
import CurvedLoop from './CurvedLoop'
import GradientText from './GradientText'
import TextCursor from './TextCursor'
import DecryptedText from './DecryptedText'
import TrueFocus from './TrueFocus'
import ASCIIText from './ASCIIText'
import ScrollVelocity from './ScrollVelocity'
import VariableProximity from './VariableProximity'
import CountUp from './CountUp'




const BitsText_TechText = ({ data }) => <TechText {...data} />
const BitsText_TextLoop = ({ data }) => <TextLoop {...data} />
const BitsText_MaskedHeading = ({ data }) => <MaskedHeading {...data} />
const BitsText_ParticleText = ({ data }) => <ParticleText {...data} />
const BitsText_SplitFlapText = ({ data }) => <div className='SplitFlapText'><SplitFlapText {...data} /></div>
const BitsText_WarpText = ({ data }) => <WarpText {...data} />
const BitsText_StrokeText = ({ data }) => <StrokeText {...data} />
const BitsText_DepthText = ({ data }) => <div className='DepthText'><DepthText {...data} /></div>
const BitsText_FoldText = ({ data }) => <div className='FoldText'><FoldText {...data} /></div>
const BitsText_EchoText = ({ data }) => <div className='EchoText'><EchoText {...data} /></div>
const BitsText_CircularText = ({ data }) => <div className='CircularText'><CircularText {...data} /></div>
const BitsText_TextType = ({ data }) => <div className='TextType'><TextType {...data} /></div>
const BitsText_Shuffle = ({ data }) => <div className='Shuffle'><Shuffle {...data} /></div>
const BitsText_ShinyText = ({ data }) => <div className='ShinyText'><ShinyText {...data} /></div>
const BitsText_CurvedLoop = ({ data }) => <CurvedLoop {...data} />
const BitsText_GradientText = ({ data }) => <div className='GradientText'><GradientText {...data} /></div>
const BitsText_TextCursor = ({ data }) => <TextCursor {...data} />
const BitsText_DecryptedText = ({ data }) => <div className='DecryptedText'><DecryptedText {...data} /></div>
const BitsText_TrueFocus = ({ data }) => <div className='TrueFocus'><TrueFocus {...data} /></div>
const BitsText_ASCIIText = ({ data }) => <ASCIIText {...data} />
const BitsText_ScrollVelocity = ({ data }) => <div className='ScrollVelocity'><ScrollVelocity {...data} /></div>
const BitsText_VariableProximity = ({ data }) => <div className='VariableProximity'><VariableProximity {...data} /></div>
const BitsText_CountUp = ({ data }) => <div className='CountUp'><CountUp {...data} /></div>



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
    BitsText_EchoText,
    BitsText_CircularText,
    BitsText_TextType,
    BitsText_Shuffle,
    BitsText_ShinyText,
    BitsText_CurvedLoop,
    BitsText_GradientText,
    BitsText_TextCursor,
    BitsText_DecryptedText,
    BitsText_TrueFocus,
    BitsText_ASCIIText,
    BitsText_ScrollVelocity,
    BitsText_VariableProximity,
    BitsText_CountUp,
}
