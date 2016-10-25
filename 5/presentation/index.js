import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Slide,
  Spectacle,
  Text,
  S,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import BgSlide from "./BgSlide";
import MyListItem from "./MyListItem";
// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  webpack: require("../assets/webpack.png"),
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "white",
  tertiary: "white",
  quartenary: "white"
}, {
  primary: "Open Sans Condensed",
  secondary: "Open Sans Condensed",
  tertiary: "Open Sans Condensed"

});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} textColor="white" progress="bar">
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Web Programming Seminar
            </Heading>
            <Heading size={5} fix textColor="white">
              Week 5: Webpack
            </Heading>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading size={5} lineHeight={1} textColor="white">
              We learned babel last week, we can use ES6, JSX on most browsers.
            </Heading>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading size={5} lineHeight={1} textColor="white">
              But now we're facing another problem...
            </Heading>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              Outline
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  Webpack Basics
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Webpack Loaders and Plugins
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Git collaborations
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Github Pages
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          {/*

          Basic

         */}
          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              Basic
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  Installation
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Usage
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Config
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide>
            <Heading size={4} lineHeight={2} textColor="white">
              Webpack
            </Heading>
            <Image src={images.webpack.replace("/", "")} style={{ width: '90%' }} />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Installation
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/installation.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Usage
            </Heading>
            <Text textColor="primary">
              First, write some code...
            </Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/simple-usage-js.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Usage
            </Heading>
            <Text textColor="primary">
              Then, use webpack
            </Text>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/simple-usage-command.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Usage
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/command-explanation.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Config file
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/simple-config.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Practice
            </Heading>
          </BgSlide>


          {/*

          Loaders and Plugins

         */}
          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              Loaders and Plugins
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  Loaders
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Plugins
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary">
              Webpack has a rich set of loaders and plugins, making it very flexible.
            </Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Loaders
            </Heading>
            <Text textColor="primary">
              Let you bundle different type of codes <br />(JSX, CSS, CoffeeScript, etc.)
            </Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Loaders
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/config-loaders.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          {/*

          Production settings

          */}
          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              Git collaborations
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  branch
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  checkout
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              Hot Reload
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  devtool
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  plugins
                </Text>
              </ListItem>
            </List>
          </BgSlide>


        </Deck>
      </Spectacle>
    );
  }
}
