"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import axios, { AxiosResponse } from "axios";
import { TriangleAlert } from "lucide-react";
import { useEffect, useState } from "react";

type PokeApiData = {
  count: number;
  next?: string;
  previous?: string;
  results: { name: string; url: string }[];
};

export default function Exercise3() {
  const [pokemons, setPokemons] = useState<string[]>([]);
  const [nextPage, setNextPage] = useState<string | undefined>(
    "https://pokeapi.co/api/v2/pokemon"
  );

  const getPokemons = () => {
    if (!nextPage) {
      return;
    }

    axios
      .get(nextPage)
      .then((response: AxiosResponse<PokeApiData>) => {
        setPokemons(response.data.results.map((pokemon) => pokemon.name));
        setNextPage(response.data.next);
      })
      .catch(() => console.log("deu ruim"));
  };

  useEffect(() => {
    getPokemons();
    // Sem dependencias, o useEffect funciona como um "OnComponentDidMount", ou seja, roda apenas uma vez na inicialização do componente
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Edite a partir daqui!
  const ordernedPokemons = pokemons;
  // Edite somente até aqui!

  return (
    <div className="flex flex-col gap-4 mx-2 items-start">
      <p className="font-bold text-lg">Ordene estes Pokemons</p>
      <Alert>
        <TriangleAlert className="h-4 w-4" />
        <AlertTitle>Regra</AlertTitle>
        <AlertDescription>
          A ordenação deve funcionar mesmo após clicar no botão de &quot;Gerar
          nova lista&quot;
        </AlertDescription>
      </Alert>

      <Button onClick={getPokemons}>Gerar nova lista</Button>
      <ul>
        {ordernedPokemons.map((pokemon) => (
          <li key={`pokemon-${pokemon}`}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
}
