import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
// importando css externo
import homeStyles from '@/styles/Home'

export default function HomeScreen() {
  
  // array contendo as opções do teclado da calculadora
  const keyboard = ['( )', '%', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '+/-', '0', '.']

  return (
    <View style={homeStyles.main}> 
      <StatusBar
        barStyle="light-content"
        backgroundColor="#B4BEC9"
        translucent={true}
      />

      {/* visão do display da calculadora */}
      <View style={homeStyles.display}>
        <Text style={homeStyles.displayText}>0</Text>
      </View>

      <View style={homeStyles.keyboard}>

        {/* rederização individual da opção clear */}
        <TouchableOpacity style={homeStyles.touchable}>
          <Text style={homeStyles.touchableTextClear}>C</Text>
        </TouchableOpacity>

        {
          // renderizando as opções do teclado usando um map()
          keyboard.map((key, index) => (
            <TouchableOpacity 
              style={homeStyles.touchable}
              key={index}
            >
              <Text style={homeStyles.touchableText}>{key}</Text>
            </TouchableOpacity>
          ))
        }

        {/* rederização individual da opção de igualdade */}
        <TouchableOpacity style={[homeStyles.touchable, homeStyles.touchableEqual]}>
          <Text style={homeStyles.touchableTextEqual}>=</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}


