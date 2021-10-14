import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Components/Home';
import Upload from './Components/UploadPosts';
import Photos from './Containers/Photos';

function App() {
  return (
    <Router>
        <div className="App">
      <h1> Instaclone</h1>
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
