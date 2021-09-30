import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import ExpIncome from "./Pages/ExpenseIncome/ExpenseIncome";
import Banks from "./Pages/Banks/Banks";
import Transactions from "./Pages/Transactions/Transactions";
import NavMenu from "./Components/NavMenu/NavMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavMenu isLoggedIn={false} />
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
