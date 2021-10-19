import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Homepage/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Notfound from './pages/NotFound/Notfound'
import ServiceDetails from './pages/Homepage/ServiceDetails/ServiceDetails';
import SignIn from './pages/Shared/Login/SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/signin">
            <SignIn></SignIn>
          </Route>
          <Route path="/serviceDetails/:serviceId">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
