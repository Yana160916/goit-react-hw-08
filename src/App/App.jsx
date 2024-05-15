import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout/Layout.jsx";
import { PrivateRoute } from "../components/PrivateRoute/PrivateRoute.jsx";
import { RestrictedRoute } from "../components/RestrictedRoute/RestrictedRoute.jsx";
import { refreshUser } from "../redux/auth/operations.js";
import { selectIsRefreshing } from "../redux/auth/selectors.js";

import HomePage from "../pages/HomePage/HomePage.jsx";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage.jsx";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import ContactsPage from "../pages/ContactsPage/ContactsPage.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/contacts" component={<RegistrationPage />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default App;