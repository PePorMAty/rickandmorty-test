import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  onActiveCharacters,
  onDisabledCharacters,
} from "../store/slices/charactersSlice";
import { onActiveVideos, onDisabledVideos } from "../store/slices/videosSlice";

const Navbar = () => {
  const videos = useAppSelector((state) => state.videos);
  const characters = useAppSelector((state) => state.videos);

  const dispatch = useAppDispatch();

  const handleActiveVideos = () => {
    dispatch(onActiveVideos());
    dispatch(onDisabledCharacters());
  };

  const handleActiveCharacters = () => {
    dispatch(onActiveCharacters());
    dispatch(onDisabledVideos());
  };

  return (
    <div className="flex justify-center px-10">
      <div
        className="text-xl px-20 hover:opacity-80 cursor-pointer"
        onClick={handleActiveVideos}
      >
        Videos
      </div>
      <div
        className="text-xl px-20 hover:opacity-80 cursor-pointer"
        onClick={handleActiveCharacters}
      >
        Characters
      </div>
    </div>
  );
};

export default Navbar;
