import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getCharacter } from "../../store/slices/charactersSlice";
import { getLocation } from "../../store/slices/locationSlice";
import { getVideo } from "../../store/slices/videosSlice";

const SearchPage = () => {
  const { filteredCharacters } = useAppSelector((state) => state.characters);
  const { filteredLocations } = useAppSelector((state) => state.locations);
  const { filteredVideo } = useAppSelector((state) => state.videos);

  const dispatch = useAppDispatch();

  return (
    <div className="mt-16 mb-8">
      <p className="mb-8 font-bold text-xl"> Search:</p>

      {!filteredCharacters.length &&
        !filteredLocations.length &&
        !filteredVideo.length && <div>Not found</div>}

      <div className="grid grid-cols-5 gap-8">
        {filteredCharacters.map((elem) => (
          <Link
            to={`/character/${elem.id}`}
            className="cursor-pointer mb-4 hover:opacity-80"
            key={elem.id}
            onClick={() => dispatch(getCharacter(elem.id))}
          >
            <img
              className="rounded-xl mb-2 w-50 w-full h-4/6"
              src={elem.image}
              alt="preview"
            />
            <h3 className="">{elem.name}</h3>
          </Link>
        ))}
        {filteredLocations.map((elem) => (
          <Link
            to={`/location/${elem.id}`}
            className="cursor-pointer mb-4 hover:opacity-80"
            key={elem.id}
            onClick={() => dispatch(getLocation(elem.id))}
          >
            <img
              className="rounded-xl mb-2 w-50 w-full h-4/6"
              src={elem.image}
              alt="preview"
            />
            <h3 className="">{elem.name}</h3>
          </Link>
        ))}
        {filteredVideo.map((elem) => (
          <Link
            to={`/video/${elem.id}`}
            className="cursor-pointer mb-4 hover:opacity-80"
            key={elem.id}
            onClick={() => dispatch(getVideo(elem.id))}
          >
            <img
              className="rounded-xl mb-2 w-50 w-full h-4/6"
              src={elem.image}
              alt="preview"
            />
            <h3 className="">{elem.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
