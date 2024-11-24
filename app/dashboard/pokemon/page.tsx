import { notFound } from 'next/navigation'

interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

async function getPokemon(id: string): Promise<Pokemon | null> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: 'force-cache',
  });

  if (!res.ok) {
    if (res.status === 404) {
      notFound();
    }
    return null;
  }
  return res.json();
}

async function getPokemons(ids: string[]): Promise<Pokemon[]> {
    const pokemonPromises = ids.map(id => getPokemon(id));
    const pokemonResults = await Promise.all(pokemonPromises);
    return pokemonResults.filter((pokemon): pokemon is Pokemon => pokemon !== null);
}


export default async function Page() {
    const pokemonIds = ["1", "2", "3", "4", "5"];
    const pokemons = await getPokemons(pokemonIds);

  return (
    
    <section>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
        
      {pokemons.map((pokemon) => (
          <div key={pokemon.id} className="border rounded-lg p-4 shadow-md">
              <h2 className="text-lg font-semibold mb-2">{pokemon.name}</h2>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-full" />
          </div>
      ))}
    </div>
    </section>
  );
}

