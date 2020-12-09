import logo from './logo-r.svg';
import './App.scss';

function App() {
  return (
    <div className="loginCard">
        <div className="header">
            <img className='Logo' src={logo} alt=""/>
            <h3 className='exampleLoginText'>Example Login Screen</h3>
            <p className='gettingStartedText'>Getting started with Green</p>         
        </div>
        <div className="email">
            <p className='emailText'>Email Address</p>
            <input className='emailInput' type="email"/> 
        </div>    
        <div className="checkBox">
            <input className='tickBox' type="checkbox" name='saveDevice' defaultChecked/> 
            <label className='saveDeviceText' htmlFor="saveDevice">Remember this Device</label> 
        </div>
        <button className='button' type='submit'>Sign In</button>
    </div>
  );
}

export default App;
