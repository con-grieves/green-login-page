import logo from './logo-r.svg';
import './App.scss';

function submitClick() {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.myForm.user_email.value)) {
      alert("You're Signed In !");
     } else {
      alert("Invalid Email");
     }  
}

function App() {
  return (
    <div className="loginCard">
        <div className="header">
            <img className='Logo' src={logo} alt=""/>
            <h3 className='exampleLoginText'>Example Login Screen</h3>
            <p className='gettingStartedText'>Getting started with Green</p>         
        </div>
        <form name="myForm" method="get">
          <div className="email">
              <p className='emailText'>Email Address</p>
              <input className='emailInput' name="user_email" type="email"/> 
          </div>    
          <div className="checkBox">
              <input className='tickBox' type="checkbox" name='saveDevice' defaultChecked/> 
              <label className='saveDeviceText' htmlFor="saveDevice">Remember this Device</label> 
         </div>
          <button className='button' type='submit' onClick={submitClick}>Sign In</button>
        </form>
    </div>
   ) 
}



export default App;

