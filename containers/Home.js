import React from 'react';
import { View, ImageBackground } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';

import City from '../components/City';
import Filters from '../components/Filters';
import CardItem from '../components/CardItem';
import styles from '../assets/styles';
import Demo from '../assets/data/demo.js';
import firebase from "../firebase.js";

function getUserId(){
  return "asaf124"
}

const sendEvent = (index, response) => {
  let product_id = Demo[index].product_id;
  firebase.database()
      .ref('Events_DB/' + getUserId() + "_" + product_id)
      .set({
        name: getUserId(),
        productId: product_id,
        answer: response,
        processed: 0,
      })
      .catch((err)=>{console.log('error ', err)})
};

const Home = () => {
  return (
      <ImageBackground
          source={require('../assets/images/bg.png')}
          style={styles.bg}
      >
        <View style={styles.containerHome}>
          <View style={styles.top}>
            <City />
            <Filters />
          </View>

          <CardStack
              onSwipedLeft={(index) => sendEvent(index,0)}
              onSwipedRight={(index) => sendEvent(index,1)}
              loop={true}
              verticalSwipe={false}
              renderNoMoreCards={() => null}
              ref={swiper => (this.swiper = swiper)}
          >
            {Demo.map((item, index) => (
                <Card key={index}>
                  <CardItem
                      image={item.image_url}
                      name={item.label_prediction}
                      description={item.title}
                      matches={item.prob_prediction}
                      actions
                      onPressLeft={() => this.swiper.swipeLeft()}
                      onPressRight={() => this.swiper.swipeRight()}
                  />
                </Card>
            ))}
          </CardStack>
        </View>
      </ImageBackground>
  );
};

export default Home;
