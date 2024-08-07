import logo from './logo.svg';
import './App.scss';
import { connect } from "react-redux"
import { useSelector, useDispatch } from 'react-redux';


import Home from './component/Home';

const App = () => {

  return (

    <Home />
  );
}

// const mapStateToProps = state => {
//   return {
//     count: state.counter.count,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default App;