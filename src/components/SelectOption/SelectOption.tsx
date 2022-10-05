import { SelectContainer } from "./SelectOption.styled";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Dispatch, FC, SetStateAction, useEffect } from "react";

interface IProps {
  selectValue: string;
  setSelectValue: Dispatch<SetStateAction<string>>;
}

const SelectOption: FC<IProps> = ({ selectValue, setSelectValue }) => {
  const handleChange = (e: SelectChangeEvent) => {
    setSelectValue(e.target.value);
  };

  type OptionType = { title: string; directed: string };
  const option: OptionType = { title: "Title", directed: "Directed by" };
  const objectKeys: string[] = Object.keys(option);
  const objectValues: string[] = Object.values(option);

  return (
    <SelectContainer>
      <FormControl variant="standard" sx={{ minWidth: 120 }}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={selectValue}
          onChange={handleChange}
        >
          {objectKeys.map((val, key) => (
            <MenuItem className="option" key={key} value={val}>
              {objectValues[key]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </SelectContainer>
  );
};

export default SelectOption;
