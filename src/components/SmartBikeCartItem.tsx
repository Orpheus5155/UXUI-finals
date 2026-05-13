import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import SmartBikeQuantityControl from './SmartBikeQuantityControl';
import { Colors } from '../theme/colors';

type Item = {
  id: string;
  title: string;
  price: string;
  image: string;
  quantity: number;
};

type Props = {
  item: Item;
  onAdd?: () => void;
  onRemove?: () => void;
};

const SmartBikeCartItem = ({ item, onAdd, onRemove }: Props) => {
  return (
    <View style={styles.row}>
      <View style={styles.imageWrap}>
        <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <View style={styles.metaRow}>
          <Text style={styles.price}>{item.price}</Text>
          <SmartBikeQuantityControl value={item.quantity} onAdd={onAdd} onRemove={onRemove} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.08)',
  },
  imageWrap: {
    width: 100,
    height: 90,
    borderRadius: 10,
    backgroundColor: Colors.bikeCard,
    borderWidth: 1,
    borderColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 86,
    height: 70,
  },
  info: {
    flex: 1,
    gap: 12,
  },
  title: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 15,
    fontWeight: '700',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    color: Colors.bikeAccent,
    fontSize: 13,
    fontWeight: '600',
  },
});

export default SmartBikeCartItem;
