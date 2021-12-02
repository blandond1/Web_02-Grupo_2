import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Login from './components/login/Login';
//import NavBar from './components/Navbar/Navbar';
//import Navbar4 from './components/Navbar/Navbar4';

import AppRouter from './components/Router/Router';


function App() {
  return (
    <div className="App">
      {/*<NavBar />*/}
      <AppRouter />
      {/*<Login />*/}
      
    </div>
  );
}

export default App;
