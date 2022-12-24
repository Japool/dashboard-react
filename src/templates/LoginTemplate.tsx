import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  userSelector,
  loginUser,
  clearState,
} from "../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { credencialesUsuario } from "../interfaces/auth.model";
import { FormularioLogin } from "../pages/Login/FormularioLogin";

export const LoginTemplate = () => {
  let navigate = useNavigate();
  //let location = useLocation();
  const dispatch = useAppDispatch();
  const { isError, errorMessage, isSuccess } = useAppSelector(userSelector);

  //let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(clearState());
      navigate("/");
    }
    if (isError) {
      console.log(errorMessage);
      //toast.error(errorMessage);
      dispatch(clearState());
    }
  }, [isError, isSuccess]);

  const handleLogin = async (credenciales: credencialesUsuario) => {
    dispatch(loginUser(credenciales));
  };
  return (
    <>
      <FormularioLogin
        modelo={{ usuario: "", contrasena: "" }}
        onSubmit={async (valores) => await handleLogin(valores)}
      />
    </>
  );
};
