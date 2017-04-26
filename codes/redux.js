import { createStore } from 'redux';

const CHANGE_TO_TRUE = 'CHANGE_TO_TRUE';
const CHANGE_TO_FALSE = 'CHANGE_TO_FALSE';

function reducer (state = false, action) {
  switch (action.type) {
    case CHANGE_TO_TRUE:
      return true

    case CHANGE_TO_FALSE:
      return false

    default:
      return false
  }
}

const changeToTrue = () => ({
  type: CHANGE_TO_TRUE
});

const changeToFalse = () => ({
  type: CHANGE_TO_FALSE
});

export default createStore(reducer);
