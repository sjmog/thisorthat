import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import ShowItem from './ShowItem'
import IndexCategories from './IndexCategories'

const App = props => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <IndexCategories />
          </Route>
          <Route path="/items/:id">
            <ShowItem formToken={props.formToken} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

App.defaultProps = {
  formToken: ''
}

App.propTypes = {
  formToken: PropTypes.string
}

export default App