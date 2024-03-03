interface ISelectVideo {
  setSeason: (value: string) => void;
}

const SelectVideo = ({ setSeason }: ISelectVideo) => {
  const handleChange = (value: string) => {
    localStorage.setItem("season", value);
    setSeason(value);
  };

  return (
    <select
      name="select-season"
      id="select-season"
      className="w-40 h-8 text-black mb-8"
      onChange={(e) => handleChange(e.target.value)}
    >
      <option value="">Choose a Season</option>

      <option value="1">Season 1</option>
      <option value="2">Season 2</option>
      <option value="3">Season 3</option>
    </select>
  );
};

export default SelectVideo;
