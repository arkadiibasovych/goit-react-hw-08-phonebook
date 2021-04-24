import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getIsAunteficated } from '../redux/user/user-selectors';

const PublicRoute = ({
  children,
  restricted = false,
  redirectTo,
  ...routeProps
}) => {
  const getIsLogin = useSelector(getIsAunteficated);

  return (
    <Route {...routeProps}>
      {getIsLogin && restricted ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
};
export default PublicRoute;
