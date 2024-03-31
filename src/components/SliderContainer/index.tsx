"use client"
import { useState } from 'react'
import Slider from '../Slider'

const SliderContainer = () => {
    const [value , setValue] = useState<number>(40)
  return (
<Slider value={value} onChange={newValue =>setValue(newValue) } isDisabled={false}/>
    )
}

export default SliderContainer