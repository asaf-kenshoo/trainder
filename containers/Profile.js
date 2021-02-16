import React from 'react';
import styles from '../assets/styles';

import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import ProfileItem from '../components/ProfileItem';
import Icon from '../components/Icon';
import Demo from '../assets/data/demo.js';

const Profile = () => {
  const {
    age,
    image,
    info1,
    info2,
    info3,
    info4,
    location,
    match,
    name
  } = Demo[7];

  return (

      <ScrollView >
        <ProfileItem style={{PaddingTop: "-60%"}}
          name={"Poli"} 
          iconPath={"https://i.ibb.co/ChM7Fkq/image.png"} 
          score={234} 
          level={1} 
          numberOfAnswers={123}
        />

      </ScrollView>
  );
};

export default Profile;
