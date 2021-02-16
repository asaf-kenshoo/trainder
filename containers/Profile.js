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

      <ScrollView style={styles.centeralizeProfileContent}>
        <ProfileItem style={{PaddingTop: "-60%"}}
          name={"Asaf The Snitch"}
          iconPath={"https://i.ibb.co/ChM7Fkq/image.png"}
          score={234}
          level={1}
          numberOfAnswers={123}
        />
      <View style={styles.centeralizeProfileContent}>
        <View style={styles.profileInviteFriendsLabel}>
          <Text style={{ color: 'white', textAlign: 'center', paddingTop: 8}}>INVITE FRIENDS </Text>
        </View>
      </View>
      </ScrollView>
  );
};

export default Profile;
