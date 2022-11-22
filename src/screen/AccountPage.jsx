import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function AccountPage () {
  return (
    <View>
      <Text style={styles.size}>帳戶</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  size: {
    fontSize: 40
  },
});