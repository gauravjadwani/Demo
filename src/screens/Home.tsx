import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Text,
  Button,
} from 'native-base';

interface Props {}

export default class Home extends Component<Props> {
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button>
              <Text>Apps</Text>
            </Button>
            <Button>
              <Text>Camera</Text>
            </Button>
            <Button active>
              <Text>Navigate</Text>
            </Button>
            <Button>
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

// import React, { Component } from 'react';
// import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
// export default class FooterTabsExample extends Component {
//   render() {
//     return (
//       <Container>
//         <Header />
//         <Content />
//         <Footer>
//           <FooterTab>
//             <Button>
//               <Text>Apps</Text>
//             </Button>
//             <Button>
//               <Text>Camera</Text>
//             </Button>
//             <Button active>
//               <Text>Navigate</Text>
//             </Button>
//             <Button>
//               <Text>Contact</Text>
//             </Button>
//           </FooterTab>
//         </Footer>
//       </Container>
//     );
//   }
// }
