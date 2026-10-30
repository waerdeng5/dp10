import HoloCard from './HoloCard'
import CircularCarousel from './CircularCarousel'
import FlexCarousel from './FlexCarousel'
import InfiniteSpiral from './InfiniteSpiral'
import DepthCarousel from './DepthCarousel'
import MorphSlider from './MorphSlider'
import DriftWall from './DriftWall'
import AccordionGallery from './AccordionGallery'
import SpecularButton from './SpecularButton'
import OptionWheel from './OptionWheel'
import LineSidebar from './LineSidebar'
import CircularGallery from './CircularGallery'




const BitsComponents_HoloCard = ({ data }) => <div className='HoloCard'><HoloCard {...data} /></div>
const BitsComponents_CircularCarousel = ({ data }) => <div className='CircularCarousel'><CircularCarousel {...data} /></div>
const BitsComponents_FlexCarousel = ({ data }) => <div className='FlexCarousel'><FlexCarousel {...data} /></div>
const BitsComponents_InfiniteSpiral = ({ data }) => <div className='InfiniteSpiral'><InfiniteSpiral {...data} /></div>
const BitsComponents_DepthCarousel = ({ data }) => <div className='DepthCarousel'><DepthCarousel {...data} /></div>
const BitsComponents_MorphSlider = ({ data }) => <div className='MorphSlider'><MorphSlider {...data} /></div>
const BitsComponents_DrifWall = ({ data }) => <div className='DriftWall'><DriftWall {...data} /></div>
const BitsComponents_AccordionGallery = ({ data }) => <div className='AccordionGallery'><AccordionGallery {...data} /></div>
const BitsComponents_SpecularButton = ({ data }) => <div className='SpecularButton'><SpecularButton {...data} /></div>
const BitsComponents_OptionWheel = ({ data }) => <div className='OptionWheel'><OptionWheel {...data} /></div>
const BitsComponents_LineSidebar = ({ data }) => <div className='LineSidebar'><LineSidebar {...data} /></div>
const BitsComponents_CircularGallery = ({ data }) => <div className='CircularGallery'><CircularGallery {...data} /></div>



export const BitsComponentsTemplate = {
    BitsComponents_HoloCard,
    BitsComponents_CircularCarousel,
    BitsComponents_FlexCarousel,
    BitsComponents_InfiniteSpiral,
    BitsComponents_DepthCarousel,
    BitsComponents_MorphSlider,
    BitsComponents_DrifWall,
    BitsComponents_AccordionGallery,
    BitsComponents_SpecularButton,
    BitsComponents_OptionWheel,
    BitsComponents_LineSidebar,
    BitsComponents_CircularGallery,
}