import { Button as RbButton, ButtonProps } from 'react-bootstrap';

export const Button = ({className, ...props }: ButtonProps): JSX.Element => (
    <RbButton className={`btn ${className}`}{...props} />
)