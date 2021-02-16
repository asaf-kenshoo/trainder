import { registerRootComponent } from 'expo';
import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
Icon.loadFont();

import Loading from "./components/loading"; // the loading screen

import "./loadIcons"; // file for loading the icons to be used in the bottom tab navigation

Navigation.registerComponent("LoadingScreen", () => Loading);

Navigation.events().registerAppLaunchedListener(() => {
  // set the root component
  Navigation.setRoot({
    root: {
      component: {
        name: "LoadingScreen",
      },
    },
  });
});



// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
// registerRootComponent(App);
