import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";

import { NavBarItems , Info } from "./nav-bar-items/nav-bar-items";
import styles from './nav-bar.module.scss'

export const NavBar = () => {
  const items: Info[] =  [
    { act: "#action1" , type: "Sevices" , id: "1" } ,
    { act: "#action2" , type: "Portafolio" , id: "2" } ,
    { act: "#action3" , type: "Contact" , id: "3" }
  ];
  return <Navbar expand={false} className={styles.navbar}>
  <Container fluid>
    <Navbar.Brand className='lead' href="#">Teamitfy</Navbar.Brand>
    <Nav className="d-flex justify-content-end flex-row d-none d-lg-flex">
      <NavBarItems items={items} />
    </Nav>
    <Navbar.Toggle aria-controls="offcanvasNavbar" className="d-lg-none"/>
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end">
    <Offcanvas.Header closeButton>
      <Offcanvas.Title id="offcanvasNavbarLabel">Teamitfy</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      <Nav className="justify-content-end flex-grow-1 pe-3">
        <NavBarItems items={items} />
      </Nav>
    </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
}
