import { appTitle } from "../../components/AppTitle/AppTitle";
import CardItem from "../../components/CardItem/CardItem";
import EmptyMovie from "../../components/EmptyMovie/EmptyMovie";
import SearchInput from "../../components/SearchInput/SearchInput";
import SelectOption from "../../components/SelectOption/SelectOption";
import Title from "../../components/Title/Title";
import { CardContainer, SearchContainer } from "./Home.styled";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

const Home: FC = () => {
  appTitle("Movies");

  const [allData, setAllData] = useState<any>([]);
  const [filterArr, setFilterArr] = useState<any>([]);
  const [selectValue, setSelectValue] = useState<string>("title");
  const [isData, setIsData] = useState<boolean>(true);

  const allMovies = async () => {
    const res = await fetch(
      "https://www.fakerestapi.com/datasets/api/v1/movie-details-dataset.json"
    );
    const { data } = await res.json();
    const allData = [];

    for (let i = 0; i < 60; i++) {
      allData[i] = data[i];
    }
    setAllData(allData);
  };

  useEffect(() => {
    allMovies();
  }, []);

  const SearchInputProps = {
    allData,
    setFilterArr,
    setIsData,
    selectValue,
  };
  return (
    <>
      <Container>
        <Row>
          <Title title="Search My Favorite Movie" />
        </Row>
        <Row>
          <SearchContainer>
            <SearchInput {...SearchInputProps} />
            <SelectOption
              selectValue={selectValue}
              setSelectValue={setSelectValue}
            />
          </SearchContainer>
        </Row>
      </Container>
      <Container>
        <Row>
          {isData ? (
            <CardContainer>
              {filterArr.length !== 0
                ? filterArr.map((item: any, key: number) => (
                    <CardItem key={key} {...item} />
                  ))
                : allData.map((item: any, key: number) => (
                    <CardItem key={key} {...item} />
                  ))}
            </CardContainer>
          ) : (
            <EmptyMovie />
          )}
        </Row>
      </Container>
    </>
  );
};

export default Home;
