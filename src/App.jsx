import React, { Component } from 'react'
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

export default class App extends Component {
  state = {
    value: 'world'
  }

  render() {
    const { value } = this.state

    return (
      <Router>
        <Switch>
          <Route path={'/'} exact component={ () => <div>hello { value }</div> } />
        </Switch>
      </Router>
    )
  }
}
