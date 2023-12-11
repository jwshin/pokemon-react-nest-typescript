import Table from './Table';
import { Link, useLoaderData } from 'react-router-dom';
import { PokemonListResponse } from '@pokemon/shared';

export function Pokemon() {
  const data = useLoaderData() as PokemonListResponse;

  const prev =
    data.prev_page !== null ? (
      <Link to={`/list/${data.prev_page}`}>Prev</Link>
    ) : (
      <Link to="#" className="disabled-link">
        Prev
      </Link>
    );
  const next =
    data.next_page !== null ? (
      <Link to={`/list/${data.next_page}`}>Next</Link>
    ) : (
      <Link to="#" className="disabled-link">
        Next
      </Link>
    );

  return (
    <>
      <h1>Pokemons</h1>
      <span>
        {prev} ... {next}
      </span>
      <Table />
    </>
  );
}

export default Pokemon;
