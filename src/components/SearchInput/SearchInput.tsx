import { InputContainer } from "./SearchInput.styled";
import { TextField } from "@mui/material";
import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

interface IProps {
  allData: any;
  setFilterArr: Dispatch<any>;
  selectValue: string;
  setIsData: Dispatch<SetStateAction<boolean>>;
}

const SearchInput: FC<IProps> = ({
  allData,
  setFilterArr,
  selectValue,
  setIsData,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value.toLowerCase();
    const filterArr: any = [];

    allData.forEach((item: any, i: number) => {
      const title = item.title;
      const directed = item.directed_by;

      if (selectValue === "title" && title.toLowerCase().indexOf(text) !== -1) {
        filterArr[i] = item;
        setIsData(true);
      } else if (
        selectValue === "directed" &&
        directed.toLowerCase().indexOf(text) !== -1
      ) {
        filterArr[i] = item;
        setIsData(true);
      }
    });

    if (filterArr.length === 0) {
      setIsData(false);
    }

    console.log(filterArr);
    setFilterArr(filterArr);
  };
  return (
    <InputContainer
      onChange={handleChange}
      id="outlined-basic"
      label="Movie search"
      variant="outlined"
      className="inputElement"
    />
  );
};

export default SearchInput;
