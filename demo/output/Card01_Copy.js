import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image
} from 'react-native';

import Group3 from './Card01_Copy_images/Group3.png'
import ColorA from './Card01_Copy_images/ColorA.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: 'url(#linearGradient-3)'}}>
        <View style={styles.BG}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.Rectangle4} />
            <Text style={styles.BankName}>Bank Name</Text>
            <View style={styles.Group}>
              <Image source={Group3} style={styles.Group3} />
            </View>
          </View>
          <View style={styles.Group6}>
            <View style={styles.Savingscard} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.Group3_35}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.copy}>****  </Text>
                <Text style={styles.copy2}>****  </Text>
              </View>
            </View>
            <Text style={styles._2706}>2706</Text>
          </View>
          <View style={styles.Group6Copy}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.More}>More</Text>
              <View style={styles.Group_25}>
                <View style={styles.Icooback}>
                  <View style={styles.Group_29}>
                    <Image source={ColorA} style={styles.ColorA} />
                  </View>
                </View>
              </View>
              <View style={styles.Group16}>
                <Text style={styles._0318}>03/18</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  BG: {
    backgroundColor: '#FFFFFF',
    width: 340,
    height: 176
  },
  Rectangle4: {
    height: 26,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    width: 26
  },
  BankName: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 49
  },
  Group: {
    width: 63,
    height: 17,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Group3: {

  },
  Group6: {
    alignSelf: 'flex-start',
    marginLeft: 49,
    width: 66,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Savingscard: {
    width: 66
  },
  Group3_35: {
    width: 171,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center'
  },
  copy: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  copy2: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  _2706: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 19
  },
  Group6Copy: {
    alignSelf: 'flex-end',
    marginRight: 18,
    marginTop: 11,
    width: 276,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  More: {
    backgroundColor: 'transparent',
    fontSize: 13,
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 25
  },
  Group_25: {
    width: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Icooback: {
    backgroundColor: '#000000',
    width: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Group_29: {
    width: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ColorA: {

  },
  Group16: {
    width: 41,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _0318: {
    backgroundColor: 'transparent',
    fontSize: 15,
    fontWeight: '400',
    color: '#FFFFFF'
  }
})
