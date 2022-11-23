import styles from './title.module.scss';

interface titleProps {
    titleText: String,
    className?: String,
}

export const Title = ({ titleText, className }: titleProps) => (
    <h3 className={`text-center ${styles.title} ${className}`}>{titleText}</h3>
);
