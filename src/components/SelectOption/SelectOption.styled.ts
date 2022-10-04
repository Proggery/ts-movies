import { colors } from "./../../config/baseStyles";
import styled from "styled-components";


export const SelectContainer = styled.span`
  min-width: 120px;
  margin-left: 1rem;
  * {
    color: white !important;
  }
  .css-1rxz5jq-MuiSelect-select-MuiInputBase-input-MuiInput-input.css-1rxz5jq-MuiSelect-select-MuiInputBase-input-MuiInput-input.css-1rxz5jq-MuiSelect-select-MuiInputBase-input-MuiInput-input {
    padding-left: 3px;
  }

  .css-a3l6o-MuiInputBase-root-MuiInput-root-MuiSelect-root:after {
    border-color: ${colors.primaryColor};
  }

  svg {
    color: white;
  }
`;