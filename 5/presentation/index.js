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
  bg2: require("../assets/bg2.png"),
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
              But now we're facing other problems...
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  hard to use CommonJS in client-side
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  too many third-party packages
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  global naming
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  ...
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading size={5} lineHeight={1} textColor="white">
              Can we pack all the codes in one single file?
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={5} lineHeight={1} textColor="white">
              Webpack
            </Heading>
            <Image src={images.webpack.replace("/", "")} style={{ width: '90%' }} />
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
                  Webpack Loaders
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
        {/*
          <BgSlide>
            <Heading size={4} lineHeight={2} textColor="white">
              Webpack
            </Heading>
            <Image src={images.webpack.replace("/", "")} style={{ width: '90%' }} />
          </BgSlide>
        */}
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
              Config file
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/simple-config-command.example")}
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
              Loaders
            </Heading>
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
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Loaders -- Babel Loader
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Loaders -- Babel Loader
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/babel-loader-installation.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Loaders -- Babel Loader
            </Heading>
            <CodePane
              lang="json"
              source={require("raw!../assets/codes/babel-loader-babelrc.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Loaders -- Babel Loader
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/babel-loader-config.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Loaders -- css & style Loader
            </Heading>

          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Loaders -- css & style Loader
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/style-loader-installation.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Loaders -- css & style Loader
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/style-loader-config.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Loaders -- css & style Loader
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/style-loader-allow.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Topics not covered yet:
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  Plugins (often used in production mode)
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Production settings
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Hot Module replacement
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Code Splitting
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  <a href="https://github.com/css-modules/webpack-demo">CSS Modules</a>
                </Text>
              </ListItem>
            </List>
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
            <Heading size={4} lineHeight={2} textColor="white">
              Github Flow
            </Heading>
            <a href="https://guides.github.com/introduction/flow/">intro</a>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Create branch
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/create-branch.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              List branches
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/list-branches.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Change to other branch
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/change-branch.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Delete branch
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/delete-branch.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Merge branch locally (not suggested)
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/merge-branch.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Push branch and PR on GitHub (suggested)
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/push-branch.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Pull branch
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/pull-branch.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              Github Pages
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  Create "gh-pages" branch
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Add index.html
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Link to [username].github.io/[project name]
                </Text>
              </ListItem>
            </List>
          </BgSlide>

        </Deck>
      </Spectacle>
    );
  }
}
