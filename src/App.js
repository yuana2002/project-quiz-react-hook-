import logo from './logo.svg';
import './App.scss';
import { connect } from "react-redux"
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, Link } from 'react-router-dom';

import Header from './component/Header/Header';

const App = () => {
  return (
    <div className='app-container'>
      <div className='header-container'>

        <Header />

      </div>
      <div className='main-container'>
        <div className='sidebar-container'>

        </div>
        <div className='app-content'>
          <Outlet />
        </div>
      </div>

    </div>
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