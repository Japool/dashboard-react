import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import authReducer from "../features/auth/authSlice";
/*import unidadReducer from "../features/unidad/unidadSlice";
import geocercaReducer from "../features/geocerca/geocercaSlice";
import grupoReducer from "../features/grupo/grupoSlice";
import genericoReducer from "../features/generico/genericoSlice";
import alertaReducer from "../features/alerta/alertaSlice";
import notificacionReducer from "../features/notificacion/notificacionSlice";
*/
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    /*unidad: unidadReducer,
    geocerca: geocercaReducer,
    grupo: grupoReducer,
    generico: genericoReducer,
    alerta: alertaReducer,
    notificacion: notificacionReducer,*/
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
