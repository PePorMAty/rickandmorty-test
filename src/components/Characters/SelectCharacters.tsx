import { useAppSelector } from "../../store/hooks";

interface Props {
  setStatus: (value: string) => void;
  setSpecies: (value: string) => void;
}

const SelectCharacters = ({ setStatus, setSpecies }: Props) => {
  const { characters } = useAppSelector((state) => state.characters.data);

  const filteredStatus = characters.reduce<string[]>((acc, item) => {
    return acc.includes(item.status) ? acc : [...acc, item.status];
  }, []);
  const filteredSpecies = characters.reduce<string[]>((acc, item) => {
    return acc.includes(item.species) ? acc : [...acc, item.species];
  }, []);

  const handleSetStatus = (value: string) => {
    setStatus(value);
    localStorage.setItem("status", value);
  };

  const handleSetSpecies = (value: string) => {
    setSpecies(value);
    localStorage.setItem("species", value);
  };

  return (
    <div className="">
      <select
        name="select-season"
        id="select-season"
        className="w-40 h-8 text-black mb-8 mr-5"
        onChange={(e) => handleSetStatus(e.target.value)}
      >
        <option value="">Choose a Status</option>
        {filteredStatus.map((elem) => (
          <option value={elem} key={elem}>
            {elem}
          </option>
        ))}
      </select>
      <select
        name="select-season"
        id="select-season"
        className="w-40 h-8 text-black mb-8 mr-5"
        onChange={(e) => handleSetSpecies(e.target.value)}
      >
        <option value="">Choose a Species</option>
        {filteredSpecies.map((elem) => (
          <option value={elem} key={elem}>
            {elem}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCharacters;
