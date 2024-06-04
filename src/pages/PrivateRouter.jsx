import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRouter = ({ element: Element, ...rest }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Element {...props} /> : <Navigate to="/login" />
      }
    />
  );
};

export default PrivateRouter;
