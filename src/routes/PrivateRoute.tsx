import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { userSelector } from "../features/auth/authSlice";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { usuario } = useAppSelector(userSelector);

  return usuario ? children : <Navigate to="/login" />;
};
