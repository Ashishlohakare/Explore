import { StyleSheet, Dimensions, PixelRatio } from 'react-native';
const {width, height} = Dimensions.get('window');

function normalize(size) {
  const scale = Dimensions.get('window').width / 375; // 375 = base iPhone width
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
}
export default StyleSheet.create({
    bg:{
        flex: 1,
        width: width,
        height: height,
    },
    button:{
        position: 'absolute',
        bottom: 80,
        alignItems: 'center',
        // borderWidth: 1,
        // paddingVertical: 20,
        height: 50,
        width: '80%',
        borderRadius: 12,
        backgroundColor: '#447d9b',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 20,
        color: '#ffffff',
    },
    introHeading:{
position: 'absolute',
        top: 80,
        justifyContent: 'center',
        textAlign: 'center',
        // borderWidth: 1,
        marginHorizontal: 60
    },
    introText:{
        color: '#ffffff',
        fontSize: normalize(26),
        // width: '70%',
        justifyContent: 'center',
        textAlign: 'center'
    }
})