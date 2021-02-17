import React from 'react';
import styles from '../assets/styles';
import {Appbar, Avatar} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';
import {Text, View, Image, Dimensions, TouchableOpacity, ImageBackground} from 'react-native';
import {Chip} from 'react-native-paper';
import {useStore} from "../store";
import AvatarIcon from "react-native-paper/src/components/Avatar/AvatarIcon";

const Header = () => {
    const {score} = useStore();

    return (
        <Appbar.Header style={styles.header}>
            <View style={styles.headerLogo}>
                <Image style={{height: 30, width: 120}}
                       source={require('../assets/images/trainer_logo.png')}/>
            </View>

            <View style={styles.rightHeader}>
                <View>
                    <Chip icon={({size, color}) => (
                        <AvatarIcon style={{backgroundColor: "#7C7899"}} color="#D9B65B" icon={"diamond-stone"}
                                    size={26}
                        />
                    )}

                          type={"flat"} style={styles.headerScore}
                          textStyle={{
                              color: "#E9D16E",
                              fontWeight:"bold",
                              fontSize: 16
                          }} onPress={() => console.log('Pressed')}>{score}</Chip>
                </View>
                <Avatar.Image
                    size={40}
                    source={{uri: 'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg'}}
                />
            </View>
        </Appbar.Header>
    );
};

export default Header;
