import { useState ,useRef} from "react"
import Slider from 'rc-slider'

export const PriceModal = (props) => {

    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(1200)
    const timeOutId = useRef()

    const handlePriceRange = (value) => {
        setMaxPrice(value[1])
        setMinPrice(value[0])
        if (timeOutId.current) clearTimeout(timeOutId.current)
        timeOutId.current = setTimeout(props.changePrice, 500, value[0], value[1])
    }

    return (<section className="main-guest-qty-container">
        <div className='slider'>
            <Slider range allowCross={false} defaultValue={[0, 1200]} min={0} max={1200} onChange={handlePriceRange} />
        </div>
        <p>{maxPrice}$ - {minPrice}$</p>
    </section>
    )
}