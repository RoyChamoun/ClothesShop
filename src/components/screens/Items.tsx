import React, {useLayoutEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Boot from '../items/Boot';
import Jacket from '../items/Jacket';
import Jeans from '../items/Jeans';
import SweatShirt from '../items/SweatShirt';

const Items: React.FC = () => {
  const {width} = Dimensions.get('window');
  const navigation = useNavigation();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleNavigateToMyItems = () => {
    navigation.navigate('MyItems');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={handleNavigateToMyItems}
          style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Cart</Text>
        </TouchableOpacity>
      ),
    });
  }, [handleNavigateToMyItems, navigation]);

  return (
    <>
      <ScrollView
        style={{backgroundColor: 'blue'}}
        contentContainerStyle={[
          styles.container,
          {paddingHorizontal: width * 0.05},
        ]}>
        <Jacket />
        <SweatShirt />
        <Jeans />
        <Boot />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  headerButton: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  headerButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Items;
