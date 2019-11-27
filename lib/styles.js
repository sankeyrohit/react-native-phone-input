import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');


const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: "80%"
  },
  basicContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    width: "95%",
    flex: 0.9,
    borderRadius: 10,
    alignItems: 'center',
    overflow: "hidden"
  },
  buttonView: {
    width: "100%",
    height: 50,
    padding: 18,
    textAlign:"center",
    backgroundColor: "#F3F3F3",
    borderTopColor: 'lightgrey',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  bottomPicker: {
    width: "100%",
    alignContent:"center"
  },
  flag: {
    height: 20,
    width: 30,
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: '#cecece',
    backgroundColor: '#cecece',
  },
  text: {
    height: 20,
    padding: 0,
    justifyContent: 'center',
  },
  mainBox:{
    width:"95%",
    backgroundColor: "green",
    flex: 0.9
  }
});
