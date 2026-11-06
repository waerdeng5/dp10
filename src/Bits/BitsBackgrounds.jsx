import GradientASCII from './GradientASCII'
import FluxLines from './FluxLines'
import PatternWaves from './PatternWaves'
import MicroSlats from './MicroSlats'


const BitsBackgrounds_GradientASCII = ({ data }) => <div className='GradientASCII'><GradientASCII {...data} /></div>
const BitsBackgrounds_FluxLines = ({ data }) => <div className='FluxLines'><FluxLines {...data} /></div>
const BitsBackgrounds_PatternWaves = ({ data }) => <div className='PatternWaves'><PatternWaves {...data} /></div>
const BitsBackgrounds_MicroSlats = ({ data }) => <div className='MicroSlats'><MicroSlats {...data} /></div>


export const BitsBackgroundsTemplate = {
    BitsBackgrounds_GradientASCII,
    BitsBackgrounds_FluxLines,
    BitsBackgrounds_PatternWaves,
    BitsBackgrounds_MicroSlats,
}
