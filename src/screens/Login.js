import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import globalStyles from '../css/globalStyles';

export default function Login({navigation}) {
  return (
    // ← You need this
    <View style={styles.container}>
      <View style={styles.logoImage}>
        <Image
          source={require('../../assets/Logo/logo.jpeg')}
          style={styles.Logo}
        />
      </View>
      <View style={{ width: '80%', gap: 20 }}>
        <TextInput
          style={styles.loginUsername}
          placeholder="Enter Email"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.loginUsername}
          placeholder="Enter Password"
          placeholderTextColor="#888"
        />
      </View>
<TouchableOpacity style={globalStyles.button}
            onPress={() => navigation.navigate('Login')}>
              <Text style={globalStyles.buttonText}>Next</Text>
            </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    elevation: 5,
    top: 100,
    position: 'absolute',
  },

  Logo: {
    width: 100,
    height: 100,
    borderRadius: 25,
  },
  loginUsername: {
    // borderWidth: 1,
    fontSize: 16,
    paddingLeft: 20,
    borderRadius: 25,
    paddingVertical: 15,
    backgroundColor: '#ffffff',
    borderColor: '#fff',
  },
});
