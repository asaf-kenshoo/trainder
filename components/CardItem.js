import React from 'react';
import styles from '../assets/styles';

import {Text, View, Image, Dimensions, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CardItem = ({
                      actions,
                      description,
                      image,
                      question,
                      name,
                      onPressLeft,
                      onPressRight,
                      status,
                      variant
                  }) => {
    // Custom styling
    const fullWidth = Dimensions.get('window').width;
    const imageStyle = [
        {
            borderRadius: 8,
            width: variant ? fullWidth / 2 - 30 : fullWidth - 80,
            height: variant ? 170 : 200,
            margin: variant ? 0 : 0
        }
    ];

    const nameStyle = [
        {
            paddingTop: variant ? 10 : 15,
            paddingBottom: variant ? 5 : 7,
            color: '#363636',
            fontSize: variant ? 15 : 20,
            fontWeight:"bold"
        }
    ];

    return (
        <View style={styles.containerCardItem}>
            {/* IMAGE */}


            {/* MATCHES */}
            <View>
                <View style={styles.matchesCardItem}>
                    <Text style={styles.matchesTextCardItem}>
                        {question} ?
                    </Text>
                </View>
                <Image source={{uri: image}} style={imageStyle}/>
            </View>

            <View style={styles.descriptionWrapper}>
                {/* NAME */}
                <Text style={nameStyle}>{name}</Text>

                {/* DESCRIPTION */}
                <ScrollView>
                    {description && (
                        <Text style={styles.descriptionCardItem}>{description}</Text>
                    )}
                </ScrollView>
            </View>

            {/* STATUS */}
            {status && (
                <View style={styles.status}>
                    <View style={status === 'Online' ? styles.online : styles.offline}/>
                    <Text style={styles.statusText}>{status}</Text>
                </View>
            )}

            {/* ACTIONS */}
            {actions && (
                <View style={styles.actionsCardItem}>

                    <TouchableOpacity style={styles.button} onPress={() => onPressLeft()}>
                        <Text style={styles.like}>
                            <Icon size={57} name="times-circle"/>
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => onPressRight()}
                    >
                        <Text style={styles.dislike}>

                            <Icon size={57} name="check-circle"/>
                        </Text>
                    </TouchableOpacity>

                </View>
            )}
        </View>
    );
};

export default CardItem;
