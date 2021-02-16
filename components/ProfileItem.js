import React from 'react';
import styles from '../assets/styles';

import { Image, Text, View } from 'react-native';
import Icon from './Icon';

const ProfileItem = ({
  name, iconPath, score, level, numberOfAnswers
}) => {
  return (
    <View style={styles.containerProfileItem}>
      <View style={styles.matchesProfileItem}>
        <Image style={{height: "100px", width: "100px", "border-radius": "50%"}}
        source={iconPath} />
      </View>

      <Text style={styles.name}>{name}</Text>

      <View style={styles.info}>
        <Image style={{height: "23px", width: "23px"}}
          source="https://cdn.iconscout.com/icon/free/png-256/swipe-1456613-1229963.png"
        />
        <Text style={styles.name}> x {numberOfAnswers} | </Text>
        <Image style={{height: "32px", width: "25px"}}
          source="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Star_Gold_Dark-512.png" />
        <Text style={styles.name}> x {level} | </Text>
        <Image style={{height: "32px", width: "32px"}}
          source="https://image.flaticon.com/icons/png/512/124/124568.png" /> 
        <Text style={styles.name}>{score} XP </Text>

      </View>

    </View>
  );
};

export default ProfileItem;
