import { NavLink } from 'react-router-dom';

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

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register" exact style={s.link} activeStyle={s.activeLink}>
        Registartion
      </NavLink>
      <NavLink to="/login" exact style={s.link} activeStyle={s.activeLink}>
        Login
      </NavLink>
    </div>
  );
}
