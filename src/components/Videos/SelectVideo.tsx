interface ISelectVideo {
  setSeason: (value: string) => void;
}

const SelectVideo = ({ setSeason }: ISelectVideo) => {
  return (
    <select
      name="select-season"
      id="select-season"
      className="w-36 h-8 text-black mb-8"
      onChange={(e) => setSeason(e.target.value)}
    >
      <option value="1">Season 1</option>
      <option value="2">Season 2</option>
      <option value="3">Season 3</option>
    </select>
  );
};

export default SelectVideo;
