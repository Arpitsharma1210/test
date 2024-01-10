import { combineReducers, Reducer } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import auth, { AuthState } from './auth';

import { APICALL,

TESTLISTING,
  // Add more Action types here
} from '../actions';
import { MetaData , PagedEntity, getDefaultMetaData } from '../../models';
import { createBasicReducer ,createPagedReducer} from './utils';

export interface ReduxState {
    router: RouterState;
    auth: AuthState;
test:PagedEntity<any>;
    // Add more State here
}

const createRootReducer = (history: History): Reducer => combineReducers<ReduxState>({
  /* Start Third party reducers */
  router: connectRouter(history),
  /* End Third party reducers */
  auth,
test: createPagedReducer<any>(TESTLISTING, []),
  // Add more Reducers here
});
export default createRootReducer;
