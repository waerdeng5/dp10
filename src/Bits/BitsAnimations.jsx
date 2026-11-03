
import CrystalizedBall from './CrystalizedBall'
import ElectricLogo from './ElectricLogo'
import DitherVeil from './DitherVeil'
import GlowCursor from './GlowCursor'
import RippleDistortion from './RippleDistortion'
import ElasticMesh from './ElasticMesh'
import SwarmCursor from './SwarmCursor'
import HalftoneReveal from './HalftoneReveal'
import CursorGrid from './CursorGrid'



const BitsAnimations_CrystalizedBall = ({ data }) => <div className='CrystalizedBall'><CrystalizedBall {...data} /></div>
const BitsAnimations_ElectricLogo = ({ data }) => <div className='ElectricLogo'><ElectricLogo {...data} /></div>
const BitsAnimations_DitherVeil = ({ data }) => <div className='DitherVeil'><DitherVeil {...data} /></div>
const BitsAnimations_GlowCursor = ({ data }) => <div className='GlowCursor'><GlowCursor {...data} /></div>
const BitsAnimations_RippleDistortion = ({ data }) => <div className='RippleDistortion'><RippleDistortion {...data} /></div>
const BitsAnimations_ElasticMesh = ({ data }) => <div className='ElasticMesh'><ElasticMesh {...data} /></div>
const BitsAnimations_SwarmCursor = ({ data }) => <div className='SwarmCursor'><SwarmCursor {...data} /></div>
const BitsAnimations_HalftoneReveal = ({ data }) => <div className='HalftoneReveal'><HalftoneReveal {...data} /></div>
const BitsAnimations_CursorGrid = ({ data }) => <div className='CursorGrid'><CursorGrid {...data} /></div>



export const BitsAnimationsTemplate = {
    BitsAnimations_CrystalizedBall,
    BitsAnimations_ElectricLogo,
    BitsAnimations_DitherVeil,
    BitsAnimations_GlowCursor,
    BitsAnimations_RippleDistortion,
    BitsAnimations_ElasticMesh,
    BitsAnimations_SwarmCursor,
    BitsAnimations_HalftoneReveal,
    BitsAnimations_CursorGrid,
}
