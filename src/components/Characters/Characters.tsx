import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getCharacter } from "../../store/slices/charactersSlice";

const Characters = () => {
  const { characters } = useAppSelector((state) => state.characters);
  const dispatch = useAppDispatch();

  return (
    <div className="mt-16 mb-8">
      <div className="grid grid-cols-5 gap-8">
        {characters.map((elem) => (
          <Link
            to={`/character/${elem.id}`}
            className="cursor-pointer mb-4 hover:opacity-80"
            key={elem.id}
            onClick={() => dispatch(getCharacter(elem.id))}
          >
            <img
              className="rounded-xl mb-2 h-80"
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
