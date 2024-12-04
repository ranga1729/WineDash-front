import { CSSProperties } from "react";
import { Link } from "react-router";

interface Props {
  title: string;
  to: string;
}

const NavItem = (props: Props) => {
  return (
    <>
      <Link to={props.to}>
        <div style={navItem}>{props.title}</div>
      </Link>
    </>
  )
}

export default NavItem;

const navItem: CSSProperties = {
  fontSize: '1.3 rem',
  fontFamily: 'Inter',
  lineHeight: '30px',
  paddingLeft: '10px',
  color: 'white',
  textDecoration: 'none',
}
