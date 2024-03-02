import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getLocation } from "../../store/slices/locationSlice";

const Locations = () => {
  const { locations } = useAppSelector((state) => state.locations.data);
  const dispatch = useAppDispatch();

  return (
    <div className="mt-16 mb-8">
      <div className="grid grid-cols-5 gap-8">
        {locations.map((elem) => (
          <Link
            to={`/location/${elem.id}`}
            className="cursor-pointer mb-4 hover:opacity-80"
            key={elem.id}
            onClick={() => dispatch(getLocation(elem.id))}
          >
            <img
              className="rounded-xl mb-2 h-40 w-full"
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

export default Locations;
