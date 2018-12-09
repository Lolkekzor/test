import { Navigation } from "react-native-navigation";

/// Screens
import FirstPage from "./src/screens/FirstPage";
Navigation.registerComponent(`screens.FirstPage`, () => FirstPage);
import GetOffers from "./src/screens/GetOffers";
Navigation.registerComponent(`screens.GetOffers`, () => GetOffers);
import RestaurantRequests from "./src/screens/RestaurantRequests";
Navigation.registerComponent('screens.RestaurantRequests', () => RestaurantRequests);

export default () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "screens.RestaurantRequests",
              options: {
                topBar: {
                  visible: true,
                  title: {
                    text: 'Restaurant',
                    alignment: 'center',
                    fontSize: 26,
                    fontWeight: "bold",
                    color: 'white',
                    fontFamily: 'Helvetica',
                  },
                  backButton: {
                    visible: true,
                    color: "white"
                  },
                  background: {
                    color: '#D01F5B'
                  }
                }
              }
            }
          }
        ]
      }
    }
  });
}

/**
Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: "screens.FirstPage",
        }
      }
    })
  });
*/

/**


*/