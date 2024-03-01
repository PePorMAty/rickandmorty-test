import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import SelectVideo from "./SelectVideo";
import { getVideo, selectSeason } from "../../store/slices/videosSlice";
import { Link } from "react-router-dom";

const Videos = () => {
  const [season, setSeason] = useState("1");
  const { currentSeason } = useAppSelector((state) => state.videos);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(selectSeason(season));
  }, [dispatch, season]);

  return (
    <div className="mt-16 mb-8">
      <SelectVideo setSeason={setSeason} />
      <div className="grid grid-cols-5 gap-8">
        {currentSeason.map((elem) => (
          <Link
            to={`/video/${elem.id}`}
            className="cursor-pointer mb-4 hover:opacity-80"
            key={elem.id}
            onClick={() => dispatch(getVideo(elem.id))}
          >
            <img className="rounded-xl mb-2" src={elem.image} alt="preview" />
            <div className="flex">
              <p className="font-bold mb-2 pr-2">{elem.season} season</p>
              <p className="font-bold mb-2">{elem.series} series</p>
            </div>
            <h3 className="">{elem.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Videos;
