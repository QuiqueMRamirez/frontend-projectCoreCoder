import "./App.css";
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

import Login from './Login';
import Register from './Register';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
