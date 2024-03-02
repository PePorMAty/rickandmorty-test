import { Link } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";

const SingleLocation = () => {
  const { currentLocation } = useAppSelector((state) => state.locations.data);

  return (
    <div className="mt-16">
      <div className="flex">
        <img
          className="w-7/12 rounded-md"
          src={currentLocation.image}
          alt={currentLocation.name}
        />
        <div className="flex flex-col ml-8">
          <div className="mb-4">
            Name:
            <span className="font-bold ml-2">{currentLocation.name}</span>
          </div>
          <div className="mb-4">
            Type:
            <span className="font-bold ml-2">{currentLocation.type}</span>
          </div>
          <div className="mb-4">
            Demension:
            <span className="font-bold ml-2">{currentLocation.dimension}</span>
          </div>

          <div className="mb-4">
            Description:
            <span className="font-bold ml-2">
              {currentLocation.description}
            </span>
          </div>
          <Link
            to="/"
            className="mt-20 bg-lime-500 w-max px-2 rounded-sm hover:opacity-80"
          >
            <p className="">Back</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleLocation;
