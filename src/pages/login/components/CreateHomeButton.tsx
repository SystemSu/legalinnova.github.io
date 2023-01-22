import { UserEmptyState } from '@/models';
import { createUser } from '@/redux/slices/user.slice';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMorty, rickAndMortyUrl } from '../services';

export default function CreateHomeButton() {


  const dispatch = useDispatch();

  const [morty, setMorty] = useState(UserEmptyState);


  const getMorty = async () => {

    const result = await fetchMorty(rickAndMortyUrl);
   
    setMorty(result);

  };

  useEffect(() => {

    getMorty();
  }, []);

  const buscarEstado = () => {
    dispatch(createUser(morty));
  };

  return <button onClick={buscarEstado}>traer</button>;
}
