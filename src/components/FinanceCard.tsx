import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Wallet } from 'lucide-react-native';
import { Colors } from '../theme/colors';

interface FinanceCardProps {
  title: string;
  amount: string;
  isActive?: boolean;
  onPress?: () => void;
}

const FinanceCard = ({ title, amount, isActive = false, onPress }: FinanceCardProps) => {
  return (
    <TouchableOpacity 
      style={[
        styles.card, 
        isActive ? styles.activeCard : styles.inactiveCard
      ]}
      onPress={onPress}
    >
      <View style={[
        styles.iconContainer, 
        isActive ? styles.activeIcon : styles.inactiveIcon
      ]}>
        <Wallet size={16} color={isActive ? Colors.primary : Colors.darkGray} />
      </View>
      <Text style={[styles.title, isActive ? styles.activeText : styles.inactiveText]}>
        {title}
      </Text>
      <Text style={[styles.amount, isActive ? styles.activeText : styles.inactiveAmount]}>
        {amount}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 144,
    height: 160,
    borderRadius: 24,
    padding: 20,
    marginRight: 16,
    justifyContent: 'space-between',
  },
  activeCard: {
    backgroundColor: Colors.primary,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  inactiveCard: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeIcon: {
    backgroundColor: Colors.white,
  },
  inactiveIcon: {
    backgroundColor: Colors.figmaBackground,
  },
  title: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    marginTop: 12,
  },
  activeText: {
    color: Colors.white,
  },
  inactiveText: {
    color: Colors.gray,
  },
  amount: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    marginTop: 8,
  },
  inactiveAmount: {
    color: Colors.black,
  },
});

export default FinanceCard;
