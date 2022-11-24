import { Nav } from "react-bootstrap";

import styles from './nav-bar-items.module.scss';

export interface Info {
  act: string,
  type: string,
  id: string
};

interface NaveBarItemsProps {
  items: Info[],
};

export const NavBarItems = ({items}: NaveBarItemsProps) => (
  <>
    {items.map(({ act , type , id }: Info) => (<Nav.Link key={`key-${id}`} className={styles.item} href={act}> {type} </Nav.Link>))}
  </>
);