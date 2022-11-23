import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";

import { NavBarItems } from "./nav-bar-items/nav-bar-items";
import styles from './nav-bar.module.scss'

export const NavBar = () => (
  <Navbar expand={false} className={styles.navbar}>
    <Container fluid>
      <Navbar.Brand className='lead' href="#">Teamitfy</Navbar.Brand>
      <Nav className="d-flex justify-content-end flex-row d-none d-lg-flex">
        <NavBarItems />
      </Nav>
      <Navbar.Toggle aria-controls="offcanvasNavbar" className="d-lg-none"/>
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel">Teamitfy</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <NavBarItems />
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
);
