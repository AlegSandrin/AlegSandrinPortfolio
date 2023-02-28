import React, { useEffect, useState, useRef } from 'react'
import * as THREE from 'vanta/vendor/three.r134.min'
import GLOBE from 'vanta/dist/vanta.globe.min'

export default function Globe(props) {

const [color, setColor] = useState(0xffffff)
const [color2, setColor2] = useState(0xa09fd2)

useEffect(() => {
  if(!props.darkMode){
    setColor(0x0)
    setColor2(0x3d39af)
  }
  else{
    setColor(0xffffff)
    setColor2(0xa09fd2)
  }
  setVantaEffect(null)
},[props])

const [vantaEffect, setVantaEffect] = useState(null)
const myRef = useRef(null)

useEffect(() => {
  if (!vantaEffect){
    setVantaEffect(
      GLOBE({
        el: myRef.current,
        backgroundAlpha: 0,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: color,
        color2: color2,
        THREE: THREE
      })
    )
  }
  return () => {
    if (vantaEffect) vantaEffect.destroy()
  }
}, [vantaEffect])

  return (
    
    <div className="absolute h-full w-full z-0 opacity-60" ref={myRef} data-aos='fade-zoom-in' data-aos-delay='1800'></div>
    
  );

}
