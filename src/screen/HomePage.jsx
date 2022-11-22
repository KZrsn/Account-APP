import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import CalendarItem from '../components/CalendarItem';
import AddPage from './AddPage';

export default HomePage = ({ navigation }) => {

  const todayDate = new Date().getDate();
  const todayMonth = new Date().getMonth();
  const todayYear = new Date().getFullYear();
  // const { todayDate, setTodayDate } = useState(new Date().toLocaleString());


  const toAddPage = () => {
    navigation.navigate(AddPage);
  }

  return (
      <View>
        <CalendarItem />
        <Pressable
          onPress={toAddPage}
          style={[styles.button,({pressed})=>({backgroundColor: pressed? '#f846ff':'#ffff55'})]}
        >
          <Text style={styles.size}>+</Text>
        </Pressable>
        <Text style={styles.size}>首頁</Text>
        <Text style={styles.size}>{todayDate}/{todayMonth}/{todayYear}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 30,
    height: 30,
    borderRadius: 30,
    position: 'absolute',
    right: 10,
    bottom: 10
  },
  size: {
    fontSize: 50,
  },
});
