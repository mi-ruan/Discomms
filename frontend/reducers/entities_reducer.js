import {combinedReducers} from 'redux';
import usersReducer from './users_reducer';

const entitiesReducer = combinedReducers({
  users: usersReducer
});

export default entitiesReducer;
