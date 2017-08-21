import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import PostList from './components/PostList'
import Category from './components/Category'
import PostDetail from './components/PostDetail'
import PostForm from './components/PostForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="is-size-4 is-light">Readable</h2>
        </div>
        <Router>
          <div className="Readable-App">
            <Route component={Category} />
            <Switch>
              <Route path="/newPost" component={PostForm} />
              <Route
                exact
                path="/:filter?"
                render={({ match }) => <PostList category={match.params.filter} />}
              />
              <Route
                path="/posts/:id"
                render={({ match, history }) =>
                  <PostDetail id={match.params.id} history={history} />}
              />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
