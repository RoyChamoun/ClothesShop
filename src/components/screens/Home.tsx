import React, {useState} from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Alert,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigateToDetails = () => {
    if (email.trim() === '') {
      Alert.alert('Error', 'Please enter email.');
      return;
    }

    if (password.trim() === '') {
      Alert.alert('Error', 'Please enter password.');
      return;
    }
    navigation.navigate('Items');
  };

  return (
    <ImageBackground
      source={require('../assets/clothes.jpg')}
      style={styles.background}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="UserName"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Button title="LogIn" onPress={navigateToDetails} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
    backgroundColor: '#fff',
  },
});

export default Home;
