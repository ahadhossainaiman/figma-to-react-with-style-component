import { ThemeProvider } from "styled-components";
import Home from "./Pages/Home";
import { GlobalStyle } from "./Styles/Global.styled";

const Theme = {
  mobile: "980px",
  smallMobile: "580px",
};

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Home></Home>
      </ThemeProvider>
    </>
  );
}

export default App;
