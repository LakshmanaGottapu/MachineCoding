import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
function App() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" style={{ zIndex: 10 }}>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{display:'flex', justifyContent:'space-evenly'}}>
            <NavItem><Link to='mousemove'>MouseMove</Link></NavItem>
            <NavItem><Link to='mousedrag'>MouseDrag</Link></NavItem>
            <NavItem><Link to='counter'>Counter</Link></NavItem>
            <NavItem><Link to='event'>EventPage</Link></NavItem>
            <NavItem><Link to='gun'>Guns</Link></NavItem>
            <NavItem><Link to='tabform'>Tabform</Link></NavItem>
            <NavItem><Link to='heavy'>heavy task</Link></NavItem>
            <NavItem><Link to='apipagination'>apipagination</Link></NavItem>
            <NavItem><Link to='clientpagination'>clientpagination</Link></NavItem>
            <NavItem><Link to='autocomplete'>autocomplete</Link></NavItem>
            <NavItem><Link to='accordion'>accordion</Link></NavItem>
            <NavItem><Link to='nestedcomments'>nestedcomments</Link></NavItem>
            <NavItem><Link to='imageslider'>imageslider</Link></NavItem>
            <NavItem><Link to='scroll'>scroll</Link></NavItem>
            <NavItem><Link to='filesystem'>file system</Link></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  )
}

export default App
