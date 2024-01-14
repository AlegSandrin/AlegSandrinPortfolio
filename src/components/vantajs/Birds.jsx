/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from 'react'
import * as THREE from 'vanta/vendor/three.r134.min'
import BIRDS from 'vanta/dist/vanta.birds.min'

export default function Birds(props) {

const [color, setColor] = useState(0xffffff)
const [color2, setColor2] = useState(0xa09fd2)

useEffect(() => {
  if(!props.vantajs){
    vantaEffect?.destroy()
  }
  else{
    setVantaEffect(null)
  }
},[props.vantajs])

useEffect(() => {
  if(!props.darkMode){
    setColor(0x0)
    setColor2(0x3d39af)
  }
  else{
    setColor(0xffffff)
    setColor2(0xa09fd2)
  }
  props.vantajs && setVantaEffect(null)
},[props.darkMode])

const [vantaEffect, setVantaEffect] = useState(null)
const myRef = useRef(null)

useEffect(() => {
  if (!vantaEffect && props.vantajs){
    setVantaEffect(
      BIRDS({
        el: myRef.current,
        backgroundAlpha: 0,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color1: color,
        color2: color2,
        colorMode: "lerp",
        birdSize: 0.80,
        separation: 98.00,
        quantity: 3.00,
        THREE: THREE,
      })
    )
  }
  return () => {
    if (vantaEffect) vantaEffect?.destroy()
  }
}, [vantaEffect, props.vantajs])

  return (
    <>
      <div className="absolute h-[95%] xl:max-h-[1080px] w-full z-0 opacity-60" ref={myRef} data-aos='fade-zoom-in' data-aos-delay='1800'></div>
    </>
  );

}
