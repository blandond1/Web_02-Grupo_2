import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Login from './components/login/Login';
import NavBar from './components/Navbar/Navbar';
import Navbar2 from './components/Navbar/Navbar2';

import AppRouter from './components/Router/Router';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Navbar2 />
      <AppRouter />
      {/*<Login />*/}
      
    </div>
  );
}

export default App;
