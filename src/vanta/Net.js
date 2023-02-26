import React from 'react'
import * as THREE from 'vanta/vendor/three.r134.min'
import NET from 'vanta/dist/vanta.net.min'

class Net extends React.Component {

constructor() {
  super()
  this.vantaRef = React.createRef()
}
componentDidMount() {
  this.vantaEffect = NET({
    el: this.vantaRef.current,
    backgroundAlpha: 0,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    maxDistance: 15.00,
    scaleMobile: 1.00,
    color: 0xffffff,
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
    
    <div className="h-full w-full absolute z-20 opacity-40" ref={this.vantaRef} data-aos='fade-zoom-in' data-aos-delay='1800'></div>
    
  );
}
}
export default Net;