import React from 'react';
import { 
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export default accountBox = () => {
  return (
    <View style={{backgroundColor:'#ECECFF'}}>
      <Pressable>
        <View style={styles.row}>
          <FontAwesome5Icon
            name='utensils'
            size={40}
          />
          <Text style={styles.size}>金額</Text>
        </View>
        <Text>備註</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10, // 上下
    paddingHorizontal: 20 // 左右
  }, 
  size: {
    fontSize: 40
  },
});