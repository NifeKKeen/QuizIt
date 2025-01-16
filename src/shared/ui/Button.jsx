import styles from './Button.module.sass';

function Button({type = "primary", className, ...props}) {
  if (type === "primary") {
    className += ` ${styles.btn}`
  }
  return (
    <button className={className} {...props}></button>
  );
}

export default Button;