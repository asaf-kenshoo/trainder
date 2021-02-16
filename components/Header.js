import React from 'react';
import styles from '../assets/styles';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import {Text, View, Image, Dimensions, TouchableOpacity, ImageBackground} from 'react-native';
import { Chip } from 'react-native-paper';
import Icon from './Icon';

const Header = () => {
  return (
        <Card style={styles.header}>
            <View style={styles.headerLogo}>
                <Image style={{height:30,width:120}}
                       source={require('../assets/images/trainer_logo.png')} />
            </View>
            {/*<Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>*/}
        </Card>
      // <Appbar style={styles.bottom}>
      //     <Appbar.Action
      //         icon="archive"
      //         onPress={() => console.log('Pressed archive')}
      //     />
      //     <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
      //     <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
      //     <Appbar.Action
      //         icon="delete"
      //         onPress={() => console.log('Pressed delete')}
      //     />
      // </Appbar>
  );
};

export default Header;
