import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import A from './src/screen/A';
import B from './src/screen/B';
import AddPage from './src/screen/AddPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AccountPage from './src/screen/AccountPage';
import ReportPage from './src/screen/ReportPage';
import HomePage from './src/screen/HomePage';
import HeaderDrawer from './src/components/HeaderDrawer';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const App = () => {

  const [amount, setAmount] = useState('');
  const [selectClassification, setSelectClassification] = useState();
  const [selectPay, setSelectPay] = useState();
  const [reMark, setRemark] = useState('');

  return (
    <NavigationContainer>
      {/* <HeaderDrawer /> */}
      <Drawer.Navigator
        initialRouteName="HomePage" // 初始頁面
      >
        <Drawer.Screen name="A" component={A} />
        <Drawer.Screen name="B" component={B} />
        <Drawer.Screen name="AddPage" component={AddPage} />
      </Drawer.Navigator>

      
      {/* <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'AccountPage') {
              iconName = 'user';
              size = focused ? 30 : 20;
              color = focused ? '#f55555' : '#555555';
            } else {
              iconName = 'file';
              size = focused ? 30 : 20;
              color = focused ? '#f55555' : '#555555';
            }
            return (
              <FontAwesome5
                name={iconName}
                size={size}
                color={color}
              />
            )
          }
        })}
      >
        <Tab.Screen name='HomePage' component={HomePage} />
        <Tab.Screen name='B' component={B} />
        <Tab.Screen name='ReportPage' component={ReportPage} />
        <Tab.Screen name='AccountPage' component={AccountPage} />
      </Tab.Navigator> */}


      {/* <Stack.Navigator>
        <Stack.Screen name="A" component={A} />
        <Stack.Screen name="B" component={B} />
      </Stack.Navigator> */}


      </NavigationContainer>

  );
};

export default App;
