import React from 'react';
import './App.css';
import logo from './logo.svg'
// import Home from './Home';
// import About from './About';
import {Route,Link,Routes} from 'react-router-dom'
import loadable from 'react-loadable'

//When page,show the message
const LoadingComponent=()=><h3>Page loading...</h3>

//For home,if it is loading show the message
const Home=loadable({

  loader:()=>import (/*webpackChunkName:'HomePage'*/'./Home'),
  loading:LoadingComponent
})

//For About,if it is loading show the message
const About=loadable({

  loader:()=>import (/*webpackChunkName:'AboutPage'*/'./About'),
  loading:LoadingComponent
})

function App() {
  return (
    <div className="App">
      <h1>Webpack+React</h1>
      <div className='divClass'>
    <button><Link to='home'>Home</Link></button>
    <button><Link to='about'>About</Link></button>
      </div>
      <br/>
      <Routes>
      <Route path="/home" element={<Home />} />
   <Route path="/about" element={<About />} />
      </Routes>
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />

      </div>
    </div>
  );
}

export default App;
