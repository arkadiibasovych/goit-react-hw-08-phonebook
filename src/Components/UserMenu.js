import { useDispatch, useSelector } from 'react-redux';
import { getUserEmail } from '../redux/user/user-selectors';
import { logOut } from '../redux/user/user-operations';

const s = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
    color: 'black',
  },
  button: {
    color: 'black',
    padding: '5px 40px',
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: 5,
    boxShadow: '0px 0px 3px 0px black',
    cursor: 'pointer',
  },
};

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);
  return (
    <div style={s.container}>
      <span style={s.name}>{email} </span>
      <button style={s.button} type="button" onClick={() => dispatch(logOut())}>
        Sign out
      </button>
    </div>
  );
};
export default UserMenu;
