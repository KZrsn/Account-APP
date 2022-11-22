import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default B = ({ navigation }) => {
  
  const toA = () => {
    navigation.navigate(A);
  }
  
  return (
    <View>
      <Text style={styles.size}>B</Text>
      <Pressable
      onPress={toA}
      style={({pressed})=>({backgroundColor: pressed? '#dd4d':'#f846ff'})}
      >
      <Text style={styles.button}>去A頁面</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  size: {
    fontSize: 40
  },
  button: {
    fontSize: 40
  }
});