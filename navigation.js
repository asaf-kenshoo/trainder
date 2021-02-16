import { Navigation } from 'react-native-navigation';

import Login from './components/Login';
import Home from "./containers/Home";
import Profile from "./containers/Profile";

Navigation.registerComponent(`LoginScreen`, () => Login);
Navigation.registerComponent(`ForgotPasswordScreen`, () => Profile);
Navigation.registerComponent(`HomeScreen`, () => Home);
Navigation.registerComponent(`FeedScreen`, () => Profile);
Navigation.registerComponent(`GalleryScreen`, () => Profile);

export const goToLogin = () => Navigation.setRoot({
    root: {

        stack: {
            id: 'stackMain',
            children: [
                {
                    component: {
                        name: "LoginScreen"
                    }
                }
            ]
        }

    }
});

const iconColor = '#444';
const selectedIconColor = '#0089da';

export const goToTabs = (icons, username) => {

    Navigation.setRoot({
        root: {

            bottomTabs: {

                id: 'bottomTabsMain',

                children: [
                    {
                        component: {
                            name: "HomeScreen",
                            options: {
                                bottomTab: {
                                    fontSize: 11,
                                    text: 'Home',
                                    icon: icons[0],
                                    iconColor,
                                    selectedIconColor,

                                }
                            },
                            passProps: {
                                username
                            },

                        }
                    },

                    {
                        component: {
                            name: "GalleryScreen",
                            options: {
                                bottomTab: {
                                    fontSize: 11,
                                    text: 'Gallery',
                                    icon: icons[1],
                                    iconColor,
                                    selectedIconColor,
                                }
                            }
                        }
                    },

                    {
                        component: {
                            name: "FeedScreen",
                            options: {
                                bottomTab: {
                                    fontSize: 11,
                                    text: 'Feed',
                                    icon: icons[2],
                                    iconColor,
                                    selectedIconColor,
                                }
                            }
                        }
                    }

                ]
            }

        }
    })

}
