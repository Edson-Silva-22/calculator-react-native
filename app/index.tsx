import { Image, Platform, View, Text, TouchableOpacity, StatusBar } from 'react-native';
import homeStyles from '@/styles/Home'
import { useState } from 'react';

export default function HomeScreen() {
  
  const keyboard = ['( )', '%', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '+/-', '0', '.']

  return (
    <View style={homeStyles.main}> 
      <StatusBar
        barStyle="light-content"
        backgroundColor="#B4BEC9"
        translucent={true}
      />

      <View style={homeStyles.display}>
        <Text style={homeStyles.displayText}>0</Text>
      </View>

      <View style={homeStyles.keyboard}>
        <TouchableOpacity style={homeStyles.touchable}>
          <Text style={homeStyles.touchableTextClear}>C</Text>
        </TouchableOpacity>

        {
          keyboard.map((key, index) => (
            <TouchableOpacity 
              style={homeStyles.touchable}
              key={index}
            >
              <Text style={homeStyles.touchableText}>{key}</Text>
            </TouchableOpacity>
          ))
        }

        <TouchableOpacity style={[homeStyles.touchable, homeStyles.touchableEqual]}>
          <Text style={homeStyles.touchableTextEqual}>=</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}


