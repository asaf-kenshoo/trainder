import React from 'react';
import styles from '../assets/styles';

import { Text, View } from 'react-native';
import Icon from './Icon';

const ProfileItem = ({
  name, iconPath, score, level, numberOfAnswers
}) => {
  return (
    <View style={styles.containerProfileItem}>
      <View style={styles.matchesProfileItem}>
        <img style={{height: "100px", width: "100px", "border-radius": "50%"}}
        src={iconPath} />
      </View>

      <Text style={styles.name}>{name}</Text>

      <View style={styles.info}>
        <img style={{height: "23px", width: "23px"}}
          src="https://cdn.iconscout.com/icon/free/png-256/swipe-1456613-1229963.png"
        /> x {numberOfAnswers} | 
        <img style={{height: "32px", width: "25px"}}
          src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Star_Gold_Dark-512.png"
        /> x {level} | 
        <img style={{height: "32px", width: "32px"}}
          src="https://image.flaticon.com/icons/png/512/124/124568.png"
        /> {score} XP

      </View>
      <View>
        <div style={{backgroundColor: 'blue', height: "23px", width: "50%"}}>
        <Text style={{ color: 'white', textAlign: 'center' }}>INVITE FRIENDS </Text>
        </div>
      </View>

    </View>
  );
};

export default ProfileItem;
