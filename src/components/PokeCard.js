import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from 'react-router-dom'


const PokeCard = (pokemon) => {
  const [pokemonInfo, setPokemonInfo] = useState({});
  const history = useHistory()

  useEffect(() => {
    axios
      .get(pokemon.pokemon.url)
      .then((response) => setPokemonInfo(response.data));
  }, []);

  const handleClick = () => history.push('/pokemon/' + pokemonInfo.name)

  if (pokemonInfo.name) {
    return (
    <div className="m-2 ">
        <Card style={{ width: "18rem", padding: "30px" }}>
            <Card.Img variant="top" src={pokemonInfo.sprites.front_default} />
            <Card.Body>
            <Card.Title>
                <b>{pokemonInfo.name}</b>
            </Card.Title>
            <Card.Text>
                <b>Abilities</b>
                {pokemonInfo.abilities.map((ability) => (
                <li key={ability.ability.name}>{ability.ability.name}</li>
                ))}
            </Card.Text>
            <Button onClick={handleClick} variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </div>
    );
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Text>Loading</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default PokeCard;
