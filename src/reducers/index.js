import { combineReducers } from 'redux';
import { movieReducer } from './movieReducer';
import { signUpReducer, loginUserReducer, showErrorReducer } from './userReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  login: loginUserReducer,
  signUp: signUpReducer,
  showError: showErrorReducer
});

export default rootReducer;