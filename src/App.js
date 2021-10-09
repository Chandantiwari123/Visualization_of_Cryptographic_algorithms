import { Navbar, NavbarBrand } from 'reactstrap';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import MainComponent from './components/mainComponent';
function App() {
  return (
    <div>
        <Navbar dark style={{background:"#181818"}}>
          <div className="container-fluid">
            <NavbarBrand href="/">Visualization of Cryptographic algorithm</NavbarBrand>
          </div>
        </Navbar>
        <BrowserRouter>
          <MainComponent/>
        </BrowserRouter>
      </div>
  );
}

export default App;
