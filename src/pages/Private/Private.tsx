import { Navigate, Route } from 'react-router-dom';
import { PrivateRoutes } from '../../models';
import { lazy } from 'react';
import { RoutesWithNotFound } from '../../utilities';

const Home = lazy(() => import('./Home/Home'));
const Dashboard = lazy(() => import('./Dashboard/Dashboard'));

export default function Private() {
  return (
    <RoutesWithNotFound>
      <Route path='/' element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />
    </RoutesWithNotFound>
  );
}
