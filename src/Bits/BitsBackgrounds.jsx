import GradientASCII from './GradientASCII'
import FluxLines from './FluxLines'
import PatternWaves from './PatternWaves'
import MicroSlats from './MicroSlats'
import ShapeWaves from './ShapeWaves'
import AeroShards from './AeroShards'
import GhostFibers from './GhostFibers'
import CRTWarp from './CRTWarp'
import MoltenMetal from './MoltenMetal'



const BitsBackgrounds_GradientASCII = ({ data }) => <div className='GradientASCII'><GradientASCII {...data} /></div>
const BitsBackgrounds_FluxLines = ({ data }) => <div className='FluxLines'><FluxLines {...data} /></div>
const BitsBackgrounds_PatternWaves = ({ data }) => <div className='PatternWaves'><PatternWaves {...data} /></div>
const BitsBackgrounds_MicroSlats = ({ data }) => <div className='MicroSlats'><MicroSlats {...data} /></div>
const BitsBackgrounds_ShapeWaves = ({ data }) => <div className='ShapeWaves'><ShapeWaves {...data} /></div>
const BitsBackgrounds_AeroShards = ({ data }) => <div className='AeroShards'><AeroShards {...data} /></div>
const BitsBackgrounds_GhostFibers = ({ data }) => <div className='GhostFibers'><GhostFibers {...data} /></div>
const BitsBackgrounds_CRTWarp = ({ data }) => <div className='CRTWarp'><CRTWarp {...data} /></div>
const BitsBackgrounds_MoltenMetal = ({ data }) => <div className='MoltenMetal'><MoltenMetal {...data} /></div>



export const BitsBackgroundsTemplate = {
    BitsBackgrounds_GradientASCII,
    BitsBackgrounds_FluxLines,
    BitsBackgrounds_PatternWaves,
    BitsBackgrounds_MicroSlats,
    BitsBackgrounds_ShapeWaves,
    BitsBackgrounds_AeroShards,
    BitsBackgrounds_GhostFibers,
    BitsBackgrounds_CRTWarp,
    BitsBackgrounds_MoltenMetal,
}
