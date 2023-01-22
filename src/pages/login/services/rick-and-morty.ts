import { ApiUser } from '@/models';
import { RickAndMortyAdapter,UserAdapter } from '../adapter';

export const rickAndMortyUrl = 'http://localhost:3000/estado/2';

export const fetchMorty = async (url: string) => {
  return fetch(url, )
    .then(res => res.json())
    .then(res => RickAndMortyAdapter(res));
};


export const fetchUser = async (url: string) => {
  return fetch(url, )
    .then(res => res.json())
    .then(res => UserAdapter(res));
};
