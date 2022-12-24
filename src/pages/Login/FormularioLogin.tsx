import { Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { credencialesUsuario } from "../../interfaces/auth.model";

export const FormularioLogin = (props: formularioAuthProps) => {
  return (
    <Formik
      initialValues={props.modelo}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        usuario: Yup.string().required("Este campo es requerido"),
        //.email('Debe colocar un email válido'),
        contrasena: Yup.string().required("Este campo es requerido"),
      })}
    >
      {(formikProps) => (
        <Form>
          <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p className="text-center font-semibold mx-4 mb-0">Acceder</p>
          </div>
          <Field type="text" name="usuario" />
          <Field type="password" name="contrasena" />

          <div className="text-center lg:text-left">
            <button disabled={formikProps.isSubmitting} type="submit">
              Iniciar sesión
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

interface formularioAuthProps {
  modelo: credencialesUsuario;
  onSubmit(
    valoreS: credencialesUsuario,
    acciones: FormikHelpers<credencialesUsuario>
  ): void;
}
