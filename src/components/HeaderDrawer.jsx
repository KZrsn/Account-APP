import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AccountPage from '../screen/AccountPage';
import B from '../screen/B';
import HomePage from '../screen/HomePage';
import ReportPage from '../screen/ReportPage';


const Drawer = createDrawerNavigator();

export default HeaderDrawer =  () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomePage" // 初始頁面
      >
        <Drawer.Screen name="HomePage" component={HomePage} />
        {/* <Drawer.Screen name="B" component={B} /> */}
        <Drawer.Screen name="ReportPage" component={ReportPage} />
        <Drawer.Screen name="AccountPage" component={AccountPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  size: {
    fontSize: 40
  },
});