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
    loggedin: false,
    requesting: true
  })

  const logout = () => {
    setsesh({
      user: {},
    loggedin: false,
    requesting: true
    })
    
  }

  console.log(sesh)
  return (
    <Router>
        <div  className='App'>
      <h1> Instaclone</h1>
      {sesh.loggedin === true && <button onClick={logout}>Logout</button>}
      <Navbar sesh={sesh}/>
      <Switch>
        <Route exact path="/"><Home sesh={sesh}/></Route>
        <Route exact path="/upload" component={Upload}></Route>
        <Route exact path="/photos" component={Photos}></Route>
        <Route exact path="/login"><Login setsesh={setsesh}/></Route>
        <Route exact path="/signup"><Signup setsesh={setsesh} /></Route>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
