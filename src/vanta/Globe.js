import React from 'react'
import * as THREE from 'vanta/vendor/three.r134.min'
import GLOBE from 'vanta/dist/vanta.globe.min'

class Globe extends React.Component {

constructor() {
  super()
  this.vantaRef = React.createRef()
}
componentDidMount() {
  this.vantaEffect = GLOBE({
    el: this.vantaRef.current,
    backgroundAlpha: 0,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xffffff,
    THREE: THREE
  })
}
componentWillUnmount() {
  if (this.vantaEffect) {
    this.vantaEffect.destroy()
  }
}

render(){
  
  return (
    
    <div className="absolute h-full w-full z-0 opacity-60" ref={this.vantaRef} data-aos='fade-zoom-in' data-aos-delay='1800'></div>
    
  );
}
}
export default Globe;