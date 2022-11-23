import { Nav } from "react-bootstrap";

import styles from './nav-bar-items.module.scss';

export const NavBarItems = () => (
  <>
    <Nav.Link className={styles.item} href="#action1">Services</Nav.Link>
    <Nav.Link className={styles.item} href="#action2">Portfolio</Nav.Link>
    <Nav.Link className={styles.item} href="#action3">Contact</Nav.Link>
  </>
)