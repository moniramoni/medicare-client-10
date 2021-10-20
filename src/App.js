import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Homepage/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Notfound from './pages/NotFound/Notfound'
import ServiceDetails from './pages/Homepage/ServiceDetails/ServiceDetails';
import SignIn from './pages/Shared/Login/SignIn/SignIn';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './pages/Shared/Login/PrivateRoute/PrivateRoute';
import SignUp from './pages/Shared/Login/SignUp/SignUp';
import Blogs from './pages/Blogs/Blogs';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/blogs">
              <Blogs></Blogs>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/signIn">
              <SignIn></SignIn>
            </Route>
            <Route path="/signUp">
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path="/serviceDetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
