import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextInput from './components/TextInput';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contact from './components/Contact';
import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, message2, type) => {
    setAlert({
      msg: message,
      msg2: message2,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleTheme = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(60, 62, 65)'
      showAlert("Dark mode has been", "Enabled", "Success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Dark mode has been", "Disabled", "Success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextMod" type='Product' mode={mode} toggleTheme={toggleTheme} />
        <Switch>
          <Route exact path="/">
            <div className='container my-4'>
              <h2 className='text-light'>
                This is my website
              </h2>
            </div>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/product">
            <div className="container">
              <TextInput showAlert={showAlert} mode={mode} alert={alert} />
            </div>
          </Route>
        </Switch>
        <Alert alert={alert} />
      </Router>
    </>
  );
}

export default App;