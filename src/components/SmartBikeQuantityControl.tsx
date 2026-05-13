import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Plus, Minus } from 'lucide-react-native';
import { Colors } from '../theme/colors';

type Props = {
  value: number;
  onAdd?: () => void;
  onRemove?: () => void;
};

const SmartBikeQuantityControl = ({ value, onAdd, onRemove }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.action, styles.add]} onPress={onAdd} activeOpacity={0.85}>
        <Plus size={14} color={Colors.white} />
      </TouchableOpacity>
      <Text style={styles.value}>{value}</Text>
      <TouchableOpacity style={[styles.action, styles.remove]} onPress={onRemove} activeOpacity={0.85}>
        <Minus size={14} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: Colors.bikeDark,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
  },
  action: {
    width: 24,
    height: 24,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: Colors.white,
  },
  add: {
    backgroundColor: Colors.bikeAccent,
  },
  remove: {
    backgroundColor: Colors.bikeCard,
  },
  value: {
    fontSize: 13,
    color: Colors.white,
    fontWeight: '600',
  },
});

export default SmartBikeQuantityControl;
