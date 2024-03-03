import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getCharacter,
  filterCharacters,
} from "../../store/slices/charactersSlice";
import SelectCharacters from "./SelectCharacters";
import { useEffect, useState } from "react";

const Characters = () => {
  const { filteredCharacters } = useAppSelector((state) => state.characters);

  const [status, setStatus] = useState(localStorage.getItem("status") ?? "");
  const [species, setSpecies] = useState(localStorage.getItem("species") ?? "");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(filterCharacters({ status, species }));
    localStorage.getItem("status");
    localStorage.getItem("species");
  }, [dispatch, status, species]);

  return (
    <div className="mt-16">
      <SelectCharacters setStatus={setStatus} setSpecies={setSpecies} />
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
