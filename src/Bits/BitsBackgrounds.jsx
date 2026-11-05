import GradientASCII from './GradientASCII'
import FluxLines from './FluxLines'


const BitsBackgrounds_GradientASCII = ({ data }) => <div className='GradientASCII'><GradientASCII {...data} /></div>
const BitsBackgrounds_FluxLines = ({ data }) => <div className='FluxLines'><FluxLines {...data} /></div>


export const BitsBackgroundsTemplate = {
    BitsBackgrounds_GradientASCII,
    BitsBackgrounds_FluxLines,
}
