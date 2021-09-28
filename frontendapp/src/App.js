import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Login from './Login';
import Register from './Register';
import Home from './Home';
import ExpIncome from './ExpenseIncome';
import Banks from './Banks';
import Transactions from './Transactions';
import NavMenu from './Components/NavMenu/NavMenu';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      
      <Router>
        <div>
        <NavMenu isLoggedIn={false}/>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route path="/home" component={Home} />
              <Route path="/addexpincome" component={ExpIncome} />
              <Route path="/banks" component={Banks} />
              <Route path="/transactions" component={Transactions} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
