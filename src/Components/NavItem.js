import { Link } from 'react-router-dom';

function NavItem(props) {
  return (
    <li key={props.id}>
      <Link to={props.link}>
        {props.label}
      </Link>
    </li>
  );
}

export default NavItem;