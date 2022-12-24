export interface claim {
  nombre: string;
  valor: string;
}

export interface credencialesUsuario {
  usuario: string;
  contrasena: string;
}

export interface respuestaAutenticacion {
  token: string;
  expiracion: Date;
  code: number;
  message: string;
}

export interface usuarioDTO {
  id: string;
  email: string;
}
