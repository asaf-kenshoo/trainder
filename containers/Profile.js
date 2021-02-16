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
const Profile = () => {

  return (

      <ScrollView >
        <ProfileItem style={{PaddingTop: "-60%"}}
          name={"Robert Downey jr"}
          iconPath={"https://i.ibb.co/ChM7Fkq/image.png"}
          score={234}
          level={1}
          numberOfAnswers={123}
        />
      <View>
        <View style={{backgroundColor: '#32a897', height: "35px", textAlign: "center", "padding-top": "5px", "border-radius": "15px"}}>
        <Text style={{ color: 'white' }}>INVITE FRIENDS </Text>
        </View>
      </View>
      </ScrollView>
  );
};

export default Profile;
