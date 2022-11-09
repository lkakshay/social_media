import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const ReqAuth = ({ children }) => {
  const authStatus = useSelector((state) => state.auth.authStatus);
  const location = useLocation();

  if (!authStatus) {
    return <Navigate state={{ location }} to={"/loginsignup"} replace />;
  } else {
    return children;
  }
};
