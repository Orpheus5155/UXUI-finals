import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Utensils, Car, ShoppingBag, Wallet } from 'lucide-react-native';
import { Colors } from '../theme/colors';

interface TransactionItemProps {
  title: string;
  date: string;
  amount: string;
  vat: string;
  paymentMethod: string;
  iconType: 'food' | 'transport' | 'shopping' | 'income';
  type: 'income' | 'expense';
}

const TransactionItem = ({ title, date, amount, vat, paymentMethod, iconType, type }: TransactionItemProps) => {
  const getIcon = () => {
    switch (iconType) {
      case 'food': return <Utensils size={20} color={Colors.darkGray} />;
      case 'transport': return <Car size={20} color={Colors.darkGray} />;
      case 'shopping': return <ShoppingBag size={20} color={Colors.darkGray} />;
      case 'income': return <Wallet size={20} color={Colors.darkGray} />;
      default: return <Wallet size={20} color={Colors.darkGray} />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <View style={styles.iconContainer}>
          {getIcon()}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <View style={styles.rightSection}>
        <Text style={[styles.amount, type === 'income' ? styles.incomeText : styles.expenseText]}>
          {type === 'income' ? '+' : '-'} {amount} + Vat {vat}
        </Text>
        <Text style={styles.paymentMethod}>{paymentMethod}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F9FAF8',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#F4F5F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 16,
  },
  title: {
    fontSize: 15,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    color: Colors.black,
  },
  date: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: Colors.gray,
    marginTop: 4,
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 14,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
  },
  incomeText: {
    color: Colors.black, // From design it seems both use black/dark gray but the + and - signs differ
  },
  expenseText: {
    color: Colors.black,
  },
  paymentMethod: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: Colors.gray,
    marginTop: 4,
  },
});

export default TransactionItem;
