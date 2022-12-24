import { Navigate } from "react-router-dom";
import { userSelector } from "../features/auth/authSlice";
import { useAppSelector } from "../app/hooks";

export const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const { usuario } = useAppSelector(userSelector);

  return usuario ? <Navigate to="/" /> : children;
};
