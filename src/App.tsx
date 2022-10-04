import { AppContainer } from "./App.styled";
import Home from "./pages/Home/Home";
import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: FC = () => {
  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
};

export default App;
