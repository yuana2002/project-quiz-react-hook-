
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleWare from 'redux-thunk';


const store = createStore(
    composeWithDevTools(applyMiddleware(thunkMiddleWare))
);


export default store;