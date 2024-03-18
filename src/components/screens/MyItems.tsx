import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useCart} from '../context/CartContext';

const MyItems = () => {
  const {cartItems, removeFromCart} = useCart();

  const handleDeleteItem = (itemId: string) => {
    removeFromCart(itemId);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.heading}>MyItems</Text>
        {cartItems.map(item => (
          <View key={item.id} style={styles.itemContainer}>
            <Text>{item.name}</Text>
            <Text>Size: {item.size}</Text>
            <Text>Quantity: {item.quantity}</Text>
            <Text>Price: ${item.price}</Text>
            <TouchableOpacity onPress={() => handleDeleteItem(item.id)}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    marginVertical: 10,
  },
  heading: {
    fontSize: 30,
    marginBottom: 10,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '100%',
    marginVertical: 5,
  },
  deleteButton: {
    color: 'red',
    marginTop: 5,
  },
});

export default MyItems;
