import React, { Component } from "react";
import { Container } from "../theme/grid.js";
import { Background, White, ImageContainer } from "../SomeSite/SomeSite.style";
import ParallaxImage from "react-image-parallax2";

class SomeSite extends Component {
  render() {
    return (
      <Background>
        <Container>
          <White>
            <h1>Some Site</h1>
          </White>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Container>
          <ImageContainer>
            <ParallaxImage
              reduceHeight={0.6}
              src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-2042.jpg"
            />
          </ImageContainer>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Background>
    );
  }
}

export default SomeSite;
