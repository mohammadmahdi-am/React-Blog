
import './App.css';

import Blog from './layouts/blog/Blog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Admin from './layouts/Admin/Admin';
import ContactUs from './layouts/ContactUs/ContactUs';
import SinglePost from './layouts/SinglePost/SinglePost';
function App() {
  return (
    <div className="App">
      <Router>

      <Switch>
        <Route path="/" exact>
          <Blog/>
        </Route>
        <Route path="/blog">
          <Blog/>
        </Route>
            
        <Route path="/admin">
          <Admin/>
        </Route>
        <Route path="/contactus">
          <ContactUs/>
        </Route>
        <Route path="/singlepost/:id" component={SinglePost}/>
        
            

      </Switch>
      
      
      
      </Router>
      
    </div>
  );
}

export default App;
