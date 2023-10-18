import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container : {
    position: 'absolute',
    bottom: 16,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  barContainer: {
    backgroundColor: '#F2F2F0',
    borderRadius: 6,
    borderColor: '#555938',
    alignItems: 'flex-start',
    width: 250,
  },
  bar: {
    backgroundColor: '#5A6E73',
    borderRadius: 20,
    shadowColor: 'lightblue',
    shadowOffset: { width: 0, height: 0 },
  },
  fillDuration : {

  }
});