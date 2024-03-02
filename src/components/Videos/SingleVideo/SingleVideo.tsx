import { Link } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";

const SingleVideo = () => {
  const { currentVideo } = useAppSelector((state) => state.videos.data);

  return (
    <div>
      <div className="flex justify-between">
        <img
          className="w-7/12 h-full rounded-md"
          src={currentVideo.image}
          alt="video"
        />
        <div className="flex flex-col mx-auto">
          <div className="flex font-bold">
            <p className="px-4">{currentVideo.season} Season</p>
            <p className="">{currentVideo.series} Series</p>
          </div>
          <h3 className="font-bold mt-4 ml-4">{currentVideo.title}</h3>
          <p className="ml-4 mt-8">{currentVideo.description}</p>
          <Link
            to="/"
            className="mt-10 ml-4 bg-lime-500 w-max px-2 rounded-sm hover:opacity-80"
          >
            <p className="">Back</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleVideo;
