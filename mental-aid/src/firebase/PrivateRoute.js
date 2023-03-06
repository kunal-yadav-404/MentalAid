import { Route, Navigate } from "react-router-dom";
import useAuth from "../context/useAuth";
import { render } from "react-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div
        className="flex items-center justify-center"
        style={{ minHeight: "700px" }}
      >
        <h1 className="text-3xl text-red-400">Loading.....</h1>
      </div>
    );
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email || user?.displayName ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/account",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
