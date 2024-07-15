import { StyleSheet } from 'react-native'

const homeStyles = StyleSheet.create({
  main: {
    width: '100%',
    flex: 1,
    backgroundColor: '#002333',
  },

  display: {
    height: '40%',
    backgroundColor: '#B4BEC9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  keyboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '60%',
  },

  displayText: {
    fontSize: 64,
    color: '#159A9C'
  },

  touchable: {
    height: '20%',
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#159A9C',
  },

  touchableText: {
    color: '#159A9C',
    fontSize: 32,
  },

  touchableTextClear: {
    color: '#F2668B',
    fontSize: 32
  },

  touchableTextEqual: {
    color: '#FFFFFF',
    fontSize: 32,
  },

  touchableEqual: {
    backgroundColor: '#159A9C'
  },
});

export default homeStyles