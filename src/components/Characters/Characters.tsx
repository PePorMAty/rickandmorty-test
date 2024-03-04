import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getCharacter,
  selectCharacters,
} from "../../store/slices/charactersSlice";
import Select from "../Select";

const Characters = () => {
  const { filteredCharacters } = useAppSelector((state) => state.characters);
  const { characters } = useAppSelector((state) => state.characters.data);

  const [status, setStatus] = useState(localStorage.getItem("status") ?? "");
  const [species, setSpecies] = useState(localStorage.getItem("species") ?? "");

  const filteredStatus = characters.reduce<string[]>((acc, item) => {
    return acc.includes(item.status) ? acc : [...acc, item.status];
  }, []);
  const filteredSpecies = characters.reduce<string[]>((acc, item) => {
    return acc.includes(item.species) ? acc : [...acc, item.species];
  }, []);

  const dispatch = useAppDispatch();

  const handleSelectStatus = (value: string) => {
    setStatus(value);
    localStorage.setItem("status", value);
  };
  const handleSelectSpecies = (value: string) => {
    setSpecies(value);
    localStorage.setItem("species", value);
  };

  useEffect(() => {
    dispatch(selectCharacters({ status, species }));
    localStorage.getItem("status");
    localStorage.getItem("species");
  }, [dispatch, status, species]);

  return (
    <div className="mt-16">
      <Select
        handleChange={handleSelectStatus}
        title="status"
        array={filteredStatus}
      />
      <Select
        handleChange={handleSelectSpecies}
        title="species"
        array={filteredSpecies}
      />
      <div className="grid grid-cols-5 gap-8">
        {filteredCharacters.map((elem) => (
          <Link
            to={`/character/${elem.id}`}
            className="cursor-pointer hover:opacity-80"
            key={elem.id}
            onClick={() => dispatch(getCharacter(elem.id))}
          >
            <img
              className="rounded-xl mb-2 w-full h-60"
              src={elem.image}
              alt="preview"
            />
            <h3 className="">{elem.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Characters;
