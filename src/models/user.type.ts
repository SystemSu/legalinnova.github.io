interface UserAssociatedUrl {
  name: string;
  url: string;
}

export interface ApiUser {
  nombreestado: string;
  estado: boolean;

 
}

export interface User {
  nombreestado: string;
  estado: boolean;

}

export const UserEmptyState: User = {
  nombreestado: "VACIO",
  estado: false
  
};

