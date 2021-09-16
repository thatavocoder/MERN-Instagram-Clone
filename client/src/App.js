import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Profile from './containers/Profile';
import CreatePost from './containers/CreatePost';

import './containers/containers.css'
import './components/components.css'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Profile" component={Profile} />
          <Route path="/CreatePost" component={CreatePost} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;