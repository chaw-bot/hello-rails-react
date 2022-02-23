import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  greetings: [
    {
      message: "Hello!"
    }
  ]
}

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'GET_GREETINGS_SUCCESS':
      return { greetings: action.json.greetings }
  }
  return state
}

export default function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  )
  return store
}
