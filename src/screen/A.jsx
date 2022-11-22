import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default A = ({ navigation }) => {
  
  const toB = () => {
    navigation.navigate(B);
  }
  const toAddPage = () => {
    navigation.navigate('AddPage');
  }

  return (
    <View style={{flex:1}}>
      <Text style={styles.size}>A</Text>
      <Pressable
        onPress={toB}
        style={({pressed})=>({backgroundColor: pressed? '#dd4d':'#f846ff'})}
      >
        <Text style={{fontSize: 40}}>去B頁面</Text>
      </Pressable>
      
      <Pressable
        onPress={toAddPage}
        style={[styles.button,({pressed})=>({backgroundColor: pressed? '#f846ff':'#ffff55'})]}
      >
        <Text style={styles.button}>+</Text>
      </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
  size: {
    fontSize: 40
  },
  button: {
    fontSize: 40,
    width: 30,
    height: 30,
    borderRadius: 30,
    position: 'absolute',
    right: 10,
    bottom: 20,
  }
});