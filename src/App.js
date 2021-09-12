import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import  Header  from './Header'
import Home from './Home'
import CheckOut from './checkOut';

function App() {
  return (  
    <Router>
      <div className="app">
        <Switch>
          
          <Route path ='/login' >
          
            <h1>Login Page</h1>
          </Route>
          <Route path ='/checkout' >
          <Header />
            <CheckOut />
            
          </Route>
          <Route path ='/' >
          <Header />
           <Home />
          </Route>
      </Switch>
      
      </div>
    </Router>
    
  );
}

export default App;
