import React, {Component} from 'react';
import {Text, Button, SafeAreaView, View, TextInput} from 'react-native';
import ModalSelector from 'react-native-modal-selector';
// import {Tag, WhiteSpace} from '@ant-design/react-native';

class Cpn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textInputValue: '',
    };
  }
  render() {
    return (
      <SafeAreaView>
        <Text>Consoloee</Text>
        {/* <Tag
          closable
          onClose={() => {
            console.log('onClose');
          }}
          afterClose={() => {
            console.log('afterClose');
          }}>
          Closable
        </Tag> */}
      </SafeAreaView>
    );
  }
}

export default Cpn;
