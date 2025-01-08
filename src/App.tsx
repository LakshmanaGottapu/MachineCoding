import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
function App() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavItem><Link to='mousemove'>MouseMove</Link></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet/>
    </>
  )
}

export default App
