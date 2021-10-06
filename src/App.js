import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Additive from './components/additiveCipher';
function App() {
  return (
    <div>
        <Navbar dark color="primary">
          <div className="container-fluid">
            <NavbarBrand href="/">Visualization of Cryptographic algorithm</NavbarBrand>
          </div>
        </Navbar>
        <Additive/>
      </div>
  );
}

export default App;
