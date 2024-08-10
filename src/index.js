import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import Admin from './component/Admin/Admin';
import User from './component/User/User';
import HomePage from './component/Home/HomePage';
import ManageUser from './component/Admin/content/ManageUser';
import DashBoard from './component/Admin/content/DashBoard';
import ManageQuestion from './component/Admin/content/ManageQuestion';
import ManageQuiz from './component/Admin/content/ManageQuiz';


ReactDOM.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="user" element={<User />} />
        </Route>

        <Route path="/admin" element={<Admin />}>
          <Route index element={<DashBoard />} />
          <Route path="manage-user" element={<ManageUser />} />
          <Route path="manage-question" element={<ManageQuestion />} />
          <Route path="manage-quiz" element={<ManageQuiz />} />
        </Route>

      </Routes>
    </BrowserRouter>
    {/* </React.StrictMode>, */}
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
