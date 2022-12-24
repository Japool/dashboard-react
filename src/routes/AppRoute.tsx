//import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter, useRoutes } from "react-router-dom";

import { userSelector, verificarLogin } from "../features/auth/authSlice";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
//import { LoginPage } from "../pages/login/LoginPage";
import { AdminTemplate, LoginTemplate } from "../templates";
import { setColor, setMode, themeSelector } from "../features/theme/themeSlice";

export const AppRoute = () => {
  const { checking } = useAppSelector(userSelector);
  const { currentMode, currentColor } = useAppSelector(themeSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(verificarLogin());
  }, [dispatch]);

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      dispatch(setColor(currentThemeColor));
      dispatch(setMode(currentThemeMode));
    }
  }, [dispatch]);

  if (checking) {
    return <h5>Espere...</h5>;
  }
  return (
    <div className={`ltr ${currentMode} ${currentColor}`} dir="ltr">
      <main>
        <BrowserRouter>
          <Routes>
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LoginTemplate />
                </PublicRoute>
              }
            />

            <Route
              path="/*"
              element={
                <PrivateRoute>
                  {/*<DashboardRoutes />*/}

                  <AdminTemplate />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
};
