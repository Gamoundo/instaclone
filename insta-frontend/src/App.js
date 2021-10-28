import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Upload from './Components/UploadPosts';
import Photos from './Containers/Photos';
import './App.css';
import { useState } from 'react';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {

  const [sesh, setsesh] = useState({
    user: {},
    logged: false,
    requesting: true
  })
  return (
    <Router>
        <div  className='App'>
      <h1> Instaclone</h1>
      <Navbar sesh={sesh}/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/upload" component={Upload}></Route>
        <Route exact path="/photos" component={Photos}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signup" component={Signup}></Route>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
