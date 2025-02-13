import { useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { StoreContext } from "./context/Store.jsx";
import { Login } from "./pages";
import Layout from "./Layout/Layout.jsx";
import { Navigate, Routes, Route } from "react-router";

const PrivateRoute = ({ children }) => {
  const { authenticate } = useContext(StoreContext);
  return authenticate ? children : <Navigate to="/login" />;
};

const PublicRoute = ({ children }) => {
  const { authenticate } = useContext(StoreContext);
  return !authenticate ? children : <Navigate to="/" />;
};

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
