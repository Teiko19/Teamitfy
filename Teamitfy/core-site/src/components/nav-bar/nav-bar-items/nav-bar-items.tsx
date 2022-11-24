import { Nav } from "react-bootstrap";

import styles from './nav-bar-items.module.scss';

interface Info {
  act: string,
  type: string,
  id: string
}

export const NavBarItems = ({items}: any) => {
  return <>
    {items.map(({ act , type , id }: Info) => (<Nav.Link key={`key-${id}`} className={styles.item} href={act}> {type} </Nav.Link>))}
  </>
};