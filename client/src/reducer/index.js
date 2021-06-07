import {combineReducers} from 'redux';

import user from './reducer'
import balances from './balances'
import groups from './groups'

const reducer = combineReducers({user, balances, groups});
export default reducer;