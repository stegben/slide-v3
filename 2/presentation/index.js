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
  why: require("../assets/why.jpg"),
  ctlinSay: require("../assets/ctlin-say.png"),
  npm2: require("../assets/npm2.png"),
  browsers: require("../assets/browsers.png"),
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
              Week 2: More on JavaScript
            </Heading>
            <Text textSize="1.5em" lineHeight={1.3} margin="120px 0px 0px" bold textColor="white">
              Good Parts / Bad Parts / ESLint
            </Text>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Text textColor="primary">JavaScript 是個很棒也很糟糕的程式語言</Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary">JavaScript is designed in 10 days.</Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary">
              Inspired by the <a href="https://youtu.be/hQVTIJBZook">speech</a> given by Doug Crockford (inventor of JSON)
            </Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              Outline
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  Bad Parts
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Good Parts
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  ESLint
                </Text>
              </ListItem>
            </List>
          </BgSlide>

        {/*

          Bad part

         */}
          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              Bad Parts
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  semicolon insertion
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  type transform (typeof)
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  numbers (isNaN, floating point)
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={1} lineHeight={2} textColor="white">
              semicolon insertion
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/semicolon-insertion-2.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
            <Text textColor="primary">
              or
            </Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/semicolon-insertion-1.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
            <Text textColor="primary">
              都幾?
            </Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/semicolon-insertion-3.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
            <Text textColor="primary">
              or
            </Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/semicolon-insertion-4.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
            <Text textColor="primary">
              都幾?
            </Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary">
              Javascript will automatically add semicolons during run-time,<br />
              so the previous examples are not coding-style problem.
            </Text>
            <Appear>
              <Heading size={1} textColor="white">
                They are bugs!
              </Heading>
            </Appear>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/semicolon-insertion-bug-2.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
            <Text textColor="primary">
              ...
            </Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/semicolon-insertion-bug-1.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/semicolon-insertion-bug-3.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
            <Text textColor="primary">
              ...
            </Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/semicolon-insertion-bug-4.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Image src={images.why.replace("/", "")} style={{ width: '80%' }} />
            <Appear>
              <Text textColor="primary">
                Because JS tries to add semicolon at the end of the line<br />
                If nothing bad happend, the semicolon will remain there.
              </Text>
            </Appear>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              Add semicolons manually!
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={1} lineHeight={2} textColor="white">
              type transform
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary" textSize="2em">
              JS is Dynamic Week type.
            </Text>
            <List>
              <Appear>
                <ListItem>
                  <Text textColor="primary">
                    Dynamic: type checking during run-time
                  </Text>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <Text textColor="primary">
                    Week: implicity type conversion
                  </Text>
                </ListItem>
              </Appear>
            </List>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/type-transform.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/type-transform-2.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/type-transform-3.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Image src={images.why.replace("/", "")} style={{ width: '80%' }} />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading textColor="primary">
              Be carefull when transforming types
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={1} lineHeight={2} textColor="white">
              numbers
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading textColor="primary" size={5} lineHeight={1.5}>
              JavaScript use float64 as numbers (no int)<br />
              (double-precision 64-bit format IEEE 754)
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/numbers-1.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading textColor="primary" size={5} lineHeight={1.5}>
              Another 雷
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/numbers-2.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Image src={images.ctlinSay.replace("/", "")} style={{ width: '80%' }} />
          </BgSlide>

          {/*

          Good part

         */}

          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              Good Parts
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  some property
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  prototype inheritance
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  this bind
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  closure
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={1} lineHeight={2} textColor="white">
              some property
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary">
              Simplicity
            </Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/simplicity.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary">
              Object-Oriented Programming
            </Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/oop.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary">
              Functional Programming
            </Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/fp.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary">
              Community
            </Text>
            <Image src={images.npm2.replace("/", "")} style={{ width: '80%' }} />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary">
              Best of the Best: Cross Platform
            </Text>
            <Image src={images.browsers.replace("/", "")} style={{ width: '80%' }} />
          </BgSlide>

          {/*

          ESLint

         */}

          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              ESLint
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  Why ESLint?
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  What is ESLint?
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  How to ESLint?
                </Text>
              </ListItem>
            </List>
          </BgSlide>
        </Deck>
      </Spectacle>
    );
  }
}
