import React from 'react'
import './App.css'
import * as THREE from 'vanta/vendor/three.r134.min'
import NET from 'vanta/dist/vanta.net.min'
import profile from "./img/profile.png";

class App extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = NET({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      THREE: THREE
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }
  }
  render() {
    return <div className="App">
      <header className="App-header" ref={this.vantaRef}>

    <div id="main">

    <div id="box">

    <img src={profile} />

    <h1> Em breve... </h1>
    <p>Logo mais estarei trabalhando nesse portfólio ;)</p>

    </div>

    </div>

      </header>
    </div>
  }
}

export default App;