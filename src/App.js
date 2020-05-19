import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Movies from './components/movies';
import Rentals from './components/rentals';
import Customers from './components/customers';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import Logout from './components/logout';
import ProtectedRoute from './components/common/protectedRoute';
import RegisterForm from './components/registerForm';
import auth from './services/authService';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import paginate from './utils/paginate';



class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  };
  render() {
    return (
      <React.Fragment>
        <ToastContainer></ToastContainer>
        <NavBar user={this.state.user}></NavBar>
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm}></Route>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/logout" component={Logout}></Route>
            <ProtectedRoute
              path="/movies/:id"
              component={MovieForm}>
            </ProtectedRoute>
            <Route
              path="/movies"
              render={props => <Movies {...props} user={this.state.user}></Movies>}>
            </Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies"></Redirect>
            <Redirect to="/not-found"></Redirect>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
