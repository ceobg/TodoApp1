import React, { Component } from 'react';
import goldd from './goldd.png';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import { reduxAddTodo, reduxDeleteTodo, reduxUpdateTodo, reduxCompleteTodo } from './actions'

import Feature from './components/Feature';
import Account from './components/Account';
import About from './components/About';
import Error from './components/Error';
import UserWire from './components/UserWire';
import SearchUser from './components/SearchUser';
import Home from './components/Home';
import Contact from './components/Contact';

import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import Stars from './components/video/Stars.mov';
import './App.css';
import uuid from 'uuid';

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

class App extends Component {
  /*state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'plan work party',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'dinner with my girls',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'schedule team meeting',
        completed: false
      }
    ]
  }*/
  constructor( props) {
    super();
    console.log('constructor: props='+ JSON.stringify(props))
  }
  // Toggle complete
  markComplete = (id) => {
    let todo = this.props.todos.find(todo => todo.id === id)
    this.props.reduxCompleteTodo (todo)
    /*
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });*/
    // console.log(id)
  }

  // Delete Todo

  delTodo = (id) => {
    let todo = this.props.todos.find(todo => todo.id === id)
    this.props.reduxDeleteTodo (todo)
    //this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    console.log(id)
  }

  // Add Todo

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.props.reduxAddTodo (newTodo)
    //this.setState({ todos: [...this.state.todos, newTodo] });

    // console.log(title)
  }


  render() {
    console.log('render: props='+ JSON.stringify(this.props))

    // console.log(this.state.todos)
    return (

      <div className="d-flex p-2">
        <div className="App">
          <div className="container">

            <Router>

              <Header />
              <Navigation />

              <div className="container">

                <Route exact path="/" render={props => (
                  <React.Fragment>

                    <header className="App-header">
                      <br />

                      <div className="container d-flex align-items-center flex-column">
                        <Switch>
                          <Route path="/" exact={true} />

                          <Feature />

                        </Switch>
                      </div>
                      <br />
                      <div className="col-lg-22" id="col-app">
                        <div className="card bg-dark h-100">
                          <h4 className="card-header" id="col-card" style={{ fontSize: '34px', }}> Your To.do List</h4>
                          <div className="card-body">

                            <AddTodo addTodo={this.addTodo} />
                            <br /><br />
                            <Todos todos={this.props.todos} markComplete={this.markComplete} delTodo={this.delTodo} />

                            <h1> You are gold baby, GOLD!!</h1>
                          </div>
                        </div>
                      </div>

                      <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" width="640" height="480" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" frameBorder="0" allowfullscreen></iframe>
                      </div>

                    </header>
                    <em> <a
                      className="App-link"
                      href="/contact"
                      target="_blank"
                      rel="noopener noreferrer">

                      Thank you for stopping by gorgeous!
        </a>  </em>

                    <hr />

                    <br />

                    <hr />          <img src={goldd} className="App-goldd" alt="goldd" />

                    <div className="footer-copyright text-center py-3">© 2020
    <a href="https://userstory.html/"> gloryapp.butterfly</a>
                    </div>

                    <video
                      id="background-video" loop autoPlay
                      style={{
                        position: "fixed",
                        left: "0%",
                        top: "0%",
                        width: "100vw",
                        height: "100vh",
                        objectFit: "cover",
                        zIndex: "-9",
                      }}
                    >
                      <source src={Stars} type="video/mp4" />
                    </video>

                  </React.Fragment>)} />


              </div>

              <Route path="/about" component={About} />
              <Route path="/home" component={Home} />
              <Route path="/contact" component={Contact} />
              <Route path="/account" component={Account} />
              <Route path="/userwire" component={UserWire} />
              <Route path="/error" component={Error} />
              <Route path="/searchuser" component={SearchUser} />

              <hr />


            </Router>

          </div>
        </div>
      </div>

    );
  }

}

const mapStateToProps = (state) => ({
  todos: state.todos
});
const mapDispatchToProps = {
  reduxAddTodo, 
  reduxDeleteTodo, reduxUpdateTodo, reduxCompleteTodo
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

