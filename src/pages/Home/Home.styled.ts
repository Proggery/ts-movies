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

  .css-u9osun.Mui-focused {
    color: ${colors.primaryColor};
  }

  .css-1v4ccyo:hover .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }

  .css-1v4ccyo.Mui-focused .MuiOutlinedInput-notchedOutline,
  .css-1cayd89::after {
    border-color: ${colors.primaryColor};
  }
  .css-177ic5c {
    border-radius: 0;
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