import { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useStore } from 'src/store';

const RequiredAuth = () => {
  const { user } = useStore();
  let location = useLocation();

  useEffect(() => {
    console.log(user);
  });

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default RequiredAuth;
