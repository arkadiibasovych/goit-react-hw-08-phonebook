import { NavLink } from 'react-router-dom';
import { getIsAunteficated } from '../redux/user/user-selectors';
import { useSelector } from 'react-redux';

const s = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: 'tomato',
  },
};

const Navigation = () => {
  const isLogined = useSelector(getIsAunteficated);
  return (
    <nav>
      <NavLink to="/" exact style={s.link} activeStyle={s.activeLink}>
        Home
      </NavLink>
      {isLogined && (
        <NavLink to="/contacts" exact style={s.link} activeStyle={s.activeLink}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
