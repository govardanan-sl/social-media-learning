import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Create from './component/Create';
import PostDetails from './component/PostDetails';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
  return (
   <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/create">
              <Create></Create>
            </Route>
            <Route path="/posts/:id">
              <PostDetails></PostDetails>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
