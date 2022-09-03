import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Layout/Header'
import Footer from './Layout/Footer'


function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
