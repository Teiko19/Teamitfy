import { Container as RbContrainter, ContainerProps } from "react-bootstrap";

import styles from './container.module.scss';

export const Container = ({className = '', ...props} :ContainerProps) => (
    <RbContrainter className={`${className} ${styles.container}`} {...props} />
);
