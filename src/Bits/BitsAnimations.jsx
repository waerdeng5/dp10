
import CrystalizedBall from './CrystalizedBall'
import ElectricLogo from './ElectricLogo'
import DitherVeil from './DitherVeil'
import GlowCursor from './GlowCursor'
import RippleDistortion from './RippleDistortion'



const BitsAnimations_CrystalizedBall = ({ data }) => <div className='CrystalizedBall'><CrystalizedBall {...data} /></div>
const BitsAnimations_ElectricLogo = ({ data }) => <div className='ElectricLogo'><ElectricLogo {...data} /></div>
const BitsAnimations_DitherVeil = ({ data }) => <div className='DitherVeil'><DitherVeil {...data} /></div>
const BitsAnimations_GlowCursor = ({ data }) => <div className='GlowCursor'><GlowCursor {...data} /></div>
const BitsAnimations_RippleDistortion = ({ data }) => <div className='RippleDistortion'><RippleDistortion {...data} /></div>



export const BitsAnimationsTemplate = {
    BitsAnimations_CrystalizedBall,
    BitsAnimations_ElectricLogo,
    BitsAnimations_DitherVeil,
    BitsAnimations_GlowCursor,
    BitsAnimations_RippleDistortion,
}
