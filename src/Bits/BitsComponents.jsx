import HoloCard from './HoloCard'
import CircularCarousel from './CircularCarousel'


const BitsComponents_HoloCard = ({ data }) => <div className='HoloCard'><HoloCard {...data} /></div>
const BitsComponents_CircularCarousel = ({ data }) => <div className='CircularCarousel'><CircularCarousel {...data} /></div>


export const BitsComponentsTemplate = {
    BitsComponents_HoloCard,
    BitsComponents_CircularCarousel,
}