import {FC} from "react";
import {Card} from "react-bootstrap";
import {Container} from "./CardItem.styled";


interface IProps {
  poster: string;
  title: string;
  directed_by:string;
}

const CardItem: FC<IProps> = ({ poster, title, directed_by }) => {
  return (
    <Container>
      {/* <Card.Img variant="top" src={poster} /> */}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Directed by: {directed_by}</Card.Text>
      </Card.Body>
    </Container>
  );
};

export default CardItem;