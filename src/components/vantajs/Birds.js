import React from 'react'
import * as THREE from 'vanta/vendor/three.r134.min'
import BIRDS from 'vanta/dist/vanta.birds.min'

class Birds extends React.Component {

constructor() {
  super()
  this.vantaRef = React.createRef()
}
componentDidMount() {
  this.vantaEffect = BIRDS({
    el: this.vantaRef.current,
    backgroundAlpha: 0,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color1: 0xffffff,
    color2: 0xffffff,
    colorMode: "lerp",
    birdSize: 0.80,
    separation: 98.00,
    quantity: 3.00,
    THREE: THREE,
  })
}
componentWillUnmount() {
  if (this.vantaEffect) {
    this.vantaEffect.destroy()
  }
}

render(){
  
  return (
    
    <div className="h-full w-full absolute z-0 opacity-40" ref={this.vantaRef} data-aos='fade-zoom-in' data-aos-delay='1800'></div>
    
  );
}
}
export default Birds;