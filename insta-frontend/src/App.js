import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Upload from './Components/UploadPosts';
import Photos from './Containers/Photos';
import './App.css';

function App() {
  return (
    <Router>
        <div  className='App'>
      <h1> Instaclone</h1>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/upload" component={Upload}></Route>
        <Route exact path="/photos" component={Photos}></Route>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
