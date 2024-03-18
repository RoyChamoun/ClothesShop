import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  PixelRatio,
} from 'react-native';
import {useCart} from '../context/CartContext';

const Jeans: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const price = 150;

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const windowWidth = Dimensions.get('window').width;
  const imageWidth = windowWidth * 0.5;
  const scaledPrice = price * PixelRatio.getFontScale();

  const totalPrice = (quantity * scaledPrice).toFixed(2);

  const {addToCart} = useCart();

  const handleAddToCart = () => {
    const randomId = Math.random().toString(36).substr(2, 9);
    addToCart({
      id: randomId,
      name: 'Jeans',
      size: selectedSize,
      quantity,
      price: scaledPrice,
    });
  };

  return (
    <View style={[styles.container, {backgroundColor: '#ffffff'}]}>
      <Image
        source={require('../assets/jeans.jpg')}
        style={{width: imageWidth, height: 600 / 2, marginBottom: 10}}
      />
      <Text style={styles.itemName}>Jeans</Text>
      <Text style={styles.price}>${scaledPrice.toFixed(2)}</Text>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
        {sizes.map(size => (
          <TouchableOpacity
            key={size}
            style={[
              styles.sizeButton,
              {backgroundColor: selectedSize === size ? 'blue' : '#ccc'},
            ]}
            onPress={() => setSelectedSize(size)}>
            <Text style={{color: selectedSize === size ? 'white' : 'black'}}>
              {size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={decrementQuantity}>
          <Text style={styles.button}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity onPress={incrementQuantity}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.totalPrice}>Total: ${totalPrice}</Text>
      <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '100%',
    marginVertical: 10,
  },
  itemName: {
    fontSize: 24,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    marginBottom: 5,
    color: 'green',
  },
  button: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  quantity: {
    fontSize: 20,
  },
  totalPrice: {
    fontSize: 18,
    marginTop: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
  },
  sizeButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10,
  },
});

export default Jeans;
