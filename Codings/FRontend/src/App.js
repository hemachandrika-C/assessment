import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Containers/Home';
import Login from './Containers/Login';
import ResetPassword from './Containers/ResetPassword';
import ResetPasswordConfirm from './Containers/ResetPasswordConfirm';
import Activate from './Containers/Activate';
import Signup from './Containers/SignUp';
import Layout from './hocs/Layout';


function App() {
  return (
    <div className="App">
      <Router>
        {/* <Layout> */}
            <Switch>
              <Login />
                  <Route exact path='/' component={Home} />
                  <Route  path='/login' component={Login} />
                  <Route  path='/signup' component={Signup} />
                  <Route  path='/reset-password' component={ResetPassword} />
                  <Route  path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
                  <Route  path='/activate/:uid/:token' component={Activate} />
            </Switch>
          {/* </Layout> */}
      </Router>
    </div>
  );
}

export default App;
