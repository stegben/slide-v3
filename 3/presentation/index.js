import React from 'react';

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
  TableItem,
} from 'spectacle';


// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import BgSlide from './BgSlide';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  node: require('../assets/node.png'), // eslint-disable-line global-require
  ryan: require('../assets/ryan_dahl.jpg'), // eslint-disable-line global-require
  v8: require('../assets/v8.jpg'), // eslint-disable-line global-require
  nonblocking: require('../assets/nonblocking.png'), // eslint-disable-line global-require
  nodeApi: require('../assets/nodeApi.png'), // eslint-disable-line global-require
};

preloader(images);

const theme = createTheme({
  primary: 'white',
  secondary: 'white',
  tertiary: 'white',
  quartenary: 'white',
}, {
  primary: 'Open Sans Condensed',
  secondary: 'Open Sans Condensed',
  tertiary: 'Open Sans Condensed',
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['zoom', 'slide']} transitionDuration={500} textColor="white" progress="bar">
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Web Programming Seminar
            </Heading>
            <Heading size={5} fix textColor="white">
              Week 3: Node
            </Heading>
            <Text textSize="1.5em" lineHeight={1.3} margin="120px 0px 0px" bold textColor="white">
              CommonJS / Express / npm script / Git
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Outline
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  Node
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  CommonJS
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  HTTP / Express
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Server side render
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  npm script
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Git warm up
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Image src={images.node.replace('/', '')} style={{ width: '80%' }} />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Ryan Dahl
            </Heading>
            <Image src={images.ryan.replace('/', '')} style={{ width: '80%' }} />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              History
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  Non-blocking
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Event-driven
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  V8 engine
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  JS
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  2009 open source Node.js
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={1} lineHeight={2} textColor="white">
              V8 engine
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            libuv: 跨平台（*nix, windows）抽象封裝層
            <Image src={images.v8.replace('/', '')} style={{ width: '80%' }} />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={1} lineHeight={2} textColor="white">
              Non-blocking
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              當你被 block 了就是 blocking
            </Heading>
            <br />
            <Heading size={4} lineHeight={1} textColor="white">
              當你沒有被 block 就是 non-blocking
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Node 是單執行緒 non-blocking
            </Heading>
            <Image src={images.nonblocking.replace('/', '')} style={{ width: '80%' }} />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={1} lineHeight={1} textColor="white">
              CommonJS
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              CommonJS
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  希望 JavaScript 可以 run 在任何地方
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  模組規範
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  I/O, 檔案系統
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  require, exports
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              引用模組 require
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/require.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
            <Text textColor="primary" lineHeight={2}>
              引入後便可以使用
            </Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/require-usage.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              模組定義 & 導出 exports
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/exports.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
            <Text textColor="primary" lineHeight={2}>
              亦可 require 其他模組再 exports
            </Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/require-exports.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Node 內建模組
            </Heading>
            <Image src={images.nodeApi.replace('/', '')} style={{ width: '80%' }} />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              http 模組
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/node-http.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              fs 模組
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/node-fs.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Demo & Practice
            </Heading>
          </BgSlide>
        </Deck>
      </Spectacle>
    );
  }
}
