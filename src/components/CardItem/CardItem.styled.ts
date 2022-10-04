import { device } from "../../config/baseStyles";
import { Card } from "react-bootstrap";
import styled from "styled-components";

export const Container = styled(Card)`
  max-width: 18rem;
  margin: 0 auto;
  width: 100%;

  .card-img-top {
    height: 300px;
    object-fit: cover;
  }
  .card-title {
    text-align: center;
    @media ${device.lg} {
      font-size: 1.15rem;
    }
  }

  .card-text {
      font-size: .8rem;
  }
`;
