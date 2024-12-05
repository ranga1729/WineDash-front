import { Link } from "react-router";
import styles from './navItem.module.css'

interface Props {
  title: string;
  to: string;
  onClick?: (title:string) => void
}

const NavItem = (props: Props) => {

  const handleClick = () => {
    if (props.onClick) {
      props.onClick(props.title);
    }
  };

  return <div onClick={handleClick}>
    <Link to={props.to} className={styles.link}>
      <div className={styles.linkText}>{props.title}</div>
    </Link>
  </div>
}

export default NavItem;