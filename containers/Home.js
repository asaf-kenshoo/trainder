import React from 'react';
import {View, ImageBackground} from 'react-native';
import CardStack, {Card} from 'react-native-card-stack-swiper';

import CardItem from '../components/CardItem';
import styles from '../assets/styles';
import Demo from '../assets/data/demo.js';
import firebase from "../firebase.js";
import {useStore} from "../store";
import Header from "../components/Header";

const sendEvent = (username, index, response) => {
    let product_id = (Demo[index].Channel + "_" + Demo[index].Source_Product_Identifier).replace(" ", "_");
    firebase.database()
        .ref('Events_DB/' + username + "_" + product_id)
        .set({
            name: username,
            productId: product_id,
            answer: response,
            processed: 0,
        })
        .catch((err) => {
        })

};

const updateScore = (username, userScore) => {
    firebase.database()
        .ref('users/' + username)
        .update({score: userScore})
        .catch((err) => {
        })
};

const Home = () => {
    const {username, score, setScore} = useStore();
    const t = {};
    return (
        <View>
            <Header></Header>
            <ImageBackground
                source={require('../assets/images/gradient_bg.png')}
                style={styles.bg}>
            </ImageBackground>
            <View style={styles.containerHome}>

                <CardStack
                    onSwipedLeft={(index) => {
                        sendEvent(username, index, 0);
                        updateScore(username, score + 1);
                        setScore(score + 1);
                    }}
                    onSwipedRight={(index) => {
                        sendEvent(username, index, 1);
                        updateScore(username, score + 1);
                        setScore(score + 1);
                    }}
                    loop={true}
                    verticalSwipe={false}
                    renderNoMoreCards={() => null}
                    ref={swiper => (t.swiper = swiper)}
                >
                    {Demo.map((item, index) => (
                        <Card key={index}>
                            <CardItem
                                image={item.Image_URL}
                                name={item.Title}
                                description={item.Description}
                                question={item.Question}
                                actions
                                onPressLeft={() => t.swiper.swipeLeft()}
                                onPressRight={() => t.swiper.swipeRight()}
                            />
                        </Card>
                    ))}
                </CardStack>
            </View>

        </View>

    );
};


export default Home;
