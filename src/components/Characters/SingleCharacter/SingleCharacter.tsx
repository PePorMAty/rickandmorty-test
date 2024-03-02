import { Link } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";

const SingleCharacter = () => {
  const { currentCharacter } = useAppSelector((state) => state.characters.data);

  return (
    <div className="mt-16">
      <div className="flex">
        <img
          className="w-80 rounded-md"
          src={currentCharacter.image}
          alt={currentCharacter.name}
        />
        <div className="flex flex-col ml-8">
          <div className="mb-4">
            Name:
            <span className="font-bold ml-2">{currentCharacter.name}</span>
          </div>
          <div className="mb-4">
            Species:
            <span className="font-bold ml-2">{currentCharacter.species}</span>
          </div>
          <div className="mb-4">
            Status:
            <span className="font-bold ml-2">{currentCharacter.status}</span>
          </div>
          <div className="mb-4">
            Age:
            <span className="font-bold ml-2">{currentCharacter.age}</span>
          </div>
          <div className="mb-4">
            Place of origin:
            <span className="font-bold ml-2">
              {currentCharacter.placeOfOrigin}
            </span>
          </div>
          <div className="mb-4">
            Description:
            <span className="font-bold ml-2">
              {currentCharacter.description}
            </span>
          </div>
          <Link
            to="/"
            className="mt-10 bg-lime-500 w-max px-2 rounded-sm hover:opacity-80"
          >
            <p className="">Back</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCharacter;
