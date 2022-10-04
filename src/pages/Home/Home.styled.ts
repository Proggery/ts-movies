import { colors, device } from "./../../config/baseStyles";
import styled from "styled-components";

export const SearchContainer = styled.div`
  margin: 1rem auto 5rem;
  max-width: 460px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .inputElement {
    label {
      color: white;

      /* &:focus {
        color: ${colors.primaryColor};
      } */
    }
    div {
      input {
        width: 250px;
        color: white;
      }
      fieldset {
        border-color: white;
      }
      &:focus {
        border-color: red;
      }
    }
  }

  .MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border-color: ${colors.primaryColor};
  }
  .MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: ${colors.primaryColor};
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media ${device.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${device.md} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.sm} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
