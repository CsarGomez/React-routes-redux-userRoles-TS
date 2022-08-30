import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '../models';
import { resetUser, UserKey } from '../redux/states/user';
import { clearLocalStorage } from '../utilities/localStorage.utility';

export default function () {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const LogOut = () => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(PublicRoutes.LOGIN, { replace: true });
  };
  return <button onClick={LogOut}>Log out</button>;
}
