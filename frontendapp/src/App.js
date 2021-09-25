import "./App.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

import Login from './Login';
import Register from './Register';
import Home from './Home';
import ExpIncome from './ExpenseIncome';
import Banks from './Banks';
import Transactions from './Transactions';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <div>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
