import { ApiUser, User } from '../../../models';

export const RickAndMortyAdapter = (user: ApiUser): User => {
  return {
    nombreestado: user.nombreestado,
    estado: user.estado

  };
};


export const UserAdapter = (user: ApiUser): User => {
  return {
    nombreestado: user.nombreestado,
    estado: user.estado

  };
};
