
import './App.js';
import NavBar from './components/Navbar.js';
import Home from './components/Home.js';
import Create from './components/Create.js';
import NotFound from './Notfound.js';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Blogdetails from './components/Blogdetails.js';
function App() {
  const title = "Welcome to the new Blog";
  return (
    <Router>
 <div className="App">
  <NavBar title={"The Jazzy Blogs"}/>
  <div className="component">
    <Switch>
      <Route exact path="/">
      <Home />
      </Route>
      <Route path="/create">
       <Create /> 
      </Route>
      <Route path="/blogs/:id">
       <Blogdetails /> 
      </Route>
      <Route path="*">
      <NotFound />
      </Route>
    </Switch>
  </div>
    
   
 </div>
 </Router>
  );
}

export default App;
