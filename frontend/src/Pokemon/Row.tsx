type PokemonProps = {
  id: number;
  name: string;
  front_sprite_url?: string;
  back_sprite_url?: string;
};

function Row({ id, name, front_sprite_url, back_sprite_url }: PokemonProps) {
  const frontSprite = front_sprite_url ? (
    <img src={front_sprite_url} alt={name + '-front'} />
  ) : (
    <></>
  );
  const backSprite = back_sprite_url ? (
    <img src={back_sprite_url} alt={name + '-back'} />
  ) : (
    <></>
  );
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{frontSprite}</td>
      <td>{backSprite}</td>
    </tr>
  );
}

export default Row;
