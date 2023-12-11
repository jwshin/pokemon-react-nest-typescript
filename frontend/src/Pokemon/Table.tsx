import axios from 'axios';
import Row from './Row';
import { PokemonListResponse } from '@pokemon/shared';
import { Link, useLoaderData } from 'react-router-dom';

const instance = axios.create({});

export function Table() {
  const data = useLoaderData() as PokemonListResponse;

  if (data) {
    const summaries = data.results.map((summary) => {
      return <Row key={summary.id} {...summary} />;
    });

    return (
      <>
        <table>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Front Sprite</th>
              <th scope="col">Back Sprite</th>
            </tr>
          </thead>
          <tbody>{summaries}</tbody>
        </table>
      </>
    );
  }

  return <>Loading</>;
}

export default Table;
