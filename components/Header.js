import React from 'react';
import styles from '../assets/styles';
import {Text, View, Image, Dimensions, TouchableOpacity, ImageBackground} from 'react-native';
import Icon from './Icon';

const Header = () => {
  return (
    <TouchableOpacity style={styles.header}>
        <View>
            <View style={styles.headerLogo}>
                <Image style={{height:30,width:120}}
                       source={require('../assets/images/trainer_logo.png')} />
            </View>

        </View>
    </TouchableOpacity>
  );
};

export default Header;
