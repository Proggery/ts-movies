import { TitleContainer } from "./Title.styled";
import { FC } from "react";

interface IProps {
  title: string;
}

const Title: FC<IProps> = ({ title }) => {
  return <TitleContainer>{title}</TitleContainer>;
};

export default Title;
