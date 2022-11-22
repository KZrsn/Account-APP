import { Picker } from '@react-native-picker/picker';
import React, { useRef, useState } from 'react';
import { 
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default AddPage = ({ navigation }) => {


  const [amount, setAmount] = useState('');
  const [selectClassification, setSelectClassification] = useState();
  const [selectPay, setSelectPay] = useState();
  const [reMark, setRemark] = useState('');
  const pickerRef = useRef();

function open() {
  pickerRef.current.focus();
}

function close() {
  pickerRef.current.blur();
}

  return (
    <View>
      <View style={styles.amountInput}>
        <Text style={{fontSize:40,width:'10%'}}>$</Text>
        <TextInput
          style={{fontSize:40,width:'90%'}}
          keyboardType='number-pad'
          onChangeText={(value) => {
            setAmount(value);
          }}
        />
      </View>
      <Picker
        style={styles.picker}
        selectedValue={selectClassification}
        onValueChange={(itemValue, itemIndex) =>
          setSelectClassification(itemValue)
        }
      >
        <Picker.Item label='早餐' value='早餐' />
        <Picker.Item label='午餐' value='午餐' />
        <Picker.Item label='晚餐' value='晚餐' />
        <Picker.Item label='其他' value='其他' />
      </Picker>

      <Picker
        style={styles.picker}
        selectedValue={selectPay}
        onValueChange={(itemValue, itemIndex) =>
          setSelectPay(itemValue)
        }

      >
        <Picker.Item label='現金' value='現金' />
        <Picker.Item label='信用卡' value='信用卡' />
        <Picker.Item label='悠遊卡' value='悠遊卡' />
        <Picker.Item label='ICash' value='ICash' />
      </Picker>

      <View style={styles.remark}>
        <Text style={{fontSize:25,width:'20%'}}>備註</Text>
        <TextInput
          style={{ fontSize: 30, backgroundColor: '#E8FFF5', width: '80%' }}
          onChangeText={(remarkValue) => {
            setRemark(remarkValue);
          }}
        />
      </View>
      
      <View style={styles.down}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text>取消</Text>
        </Pressable>
        <Pressable>
          <Text>儲存</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  amountInput: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFD2D2'
  },
  picker: {
    backgroundColor: '#D2E9FF',
    borderWidth: 1,
    borderColor: '#000000',

  },
  view_box: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 40,
  },
  size: {
    fontSize: 40,
    backgroundColor: "#45f444"
  },
  down: {
    backgroundColor: '#C4E1E1',
    display: 'flex',
    flexDirection: 'row',
    fontSize: 40,
    height: 50
  },
  remark: {
    borderWidth: 1,
    borderColor: '#000000',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFD2D2'  }
});