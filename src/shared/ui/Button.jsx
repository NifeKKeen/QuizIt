import styles from './Button.module.sass';

export function Button({type = "primary", className, ...props}) {
  if (type === "primary") {
    className += ` ${styles.btn}`
  }
  return (
    <button className={className} {...props}></button>
  );
}