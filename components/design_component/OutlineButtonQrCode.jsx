import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const OutlineButtonQrCode = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin:10,
        borderRadius: 30,
        alignSelf:"center"
        
      }}
      onPress={onPress}
    >
     <Text style={{  
    color: 'rgb(15, 107, 245)',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    letterSpacing: 1.1,
  }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default OutlineButtonQrCode;
