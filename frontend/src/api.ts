import { PokemonListResponse } from '@pokemon/shared';
import axios from 'axios';

export const list = async (page: string = '0') => {
  const resp = await axios.get<PokemonListResponse>(`/api/list/${page}`);

  if (resp.status == 200) {
    return resp.data;
  } else {
    throw new Error('Unable to connect to the backend');
  }
};
