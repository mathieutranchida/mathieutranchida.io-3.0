import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./globalStyles";
import styled from "styled-components";

import Homepage from "./pages/hompage/index";
import Photography from "./pages/photo";
import Footer from "./components/footer";
import ScrollToTop from "./customHooks/scrollToTop";
import WebDevelopment from "./pages/webDev/index";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <GlobalStyles />
          <Wrapper>
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/photography">
                <Photography />
              </Route>
              <Route exact path="/web-development">
                <WebDevelopment />
              </Route>
            </Switch>
            <Footer />
          </Wrapper>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export default App;
