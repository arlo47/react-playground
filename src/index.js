import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import './index.css';
import App from './App';
import Home from './Pages/Home';
import Users from './Pages/Users';
import User from './Pages/User';
import About from './Pages/About';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="/" element={<Home/>} />
        <Route path="users" element={<Users/>}>
          <Route path=":userId" element={<User/>}/>
        </Route>
        <Route path="about" element={<About/>} />
        <Route path="*" element={<h1>404. Not Found.</h1>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
