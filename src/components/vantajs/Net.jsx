/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from 'react'
import * as THREE from 'vanta/vendor/three.r134.min'
import NET from 'vanta/dist/vanta.net.min'

export default function Net(props) {

const [color, setColor] = useState(0xffffff)

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
    setColor(0x110d34)
  }
  else{
    setColor(0xffffff)
  }
  props.vantajs && setVantaEffect(null)
},[props.darkMode])

const [vantaEffect, setVantaEffect] = useState(null)
const myRef = useRef(null)

useEffect(() => {
  if (!vantaEffect && props.vantajs) {
    setVantaEffect(
      NET({
        el: myRef.current,
        backgroundAlpha: 0,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        maxDistance: 15.00,
        scaleMobile: 1.00,
        color: color,
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
      <div className="h-full w-full absolute z-20 opacity-40" ref={myRef} data-aos='fade-zoom-in' data-aos-delay='1800'></div>
    </>
    
    
  );

}
