import React from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST'
const GET_GREETINGS_SUCCESS = 'GET_GREETINGS_SUCCESS'

const getGreetings = () => {
  return (dispatch) => {
    dispatch({ type: GET_GREETINGS_REQUEST })
    return fetch('v1/greetings.json')
      .then(response => response.json())
      .then(json => dispatch(getGreetingsSuccess(json)))
      .catch(error => console.log(error))
  }
}

const getGreetingsSuccess = (json) => {
  return {
    type: GET_GREETINGS_SUCCESS,
    json
  }
}

class Greeting extends React.Component {
  render () {
    const { greetings } = this.props
    const greetingsList = [greetings].map((greeting) => {
      return <h2>{greeting.message}</h2>
    })

    return (
      <React.Fragment className="container">
        <button className="getBtn" onClick={() => this.props.getGreetings()}>Click Me!</button>
        <h2 className="msg"> to say 'Hello' to Otto</h2>
        <div className="greeting">{ greetingsList }</div>
      </React.Fragment>
    )
  }
}

const structuredSelector = createStructuredSelector({
  greetings: state => state.greetings
})

const mapDispatchToProps = { getGreetings }

export default connect(structuredSelector, mapDispatchToProps)(Greeting)