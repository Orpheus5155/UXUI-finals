import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Plus, Wallet, MoreHorizontal } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../theme/colors';
import FinanceHeader from '../../components/FinanceHeader';
import TransactionItem from '../../components/TransactionItem';

const AddSelectScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <FinanceHeader title="Add" showBack={true} />
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Selection Cards */}
        <View style={styles.selectionSection}>
          <TouchableOpacity style={styles.dottedCard}>
            <Plus size={24} color={Colors.gray} />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.selectionCard}
            onPress={() => navigation.navigate('AddIncome')}
          >
            <View style={styles.iconContainer}>
              <Wallet size={20} color={Colors.darkGray} />
            </View>
            <Text style={styles.cardLabel}>Add Income</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.selectionCard, styles.activeCard]}
            onPress={() => navigation.navigate('AddExpense')}
          >
            <View style={[styles.iconContainer, styles.activeIcon]}>
              <Wallet size={20} color={Colors.white} />
            </View>
            <Text style={[styles.cardLabel, styles.activeText]}>Add Expense</Text>
          </TouchableOpacity>
        </View>

        {/* Latest Entries */}
        <View style={styles.entriesSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Latest Entries</Text>
            <TouchableOpacity style={styles.moreButton}>
              <MoreHorizontal size={20} color={Colors.gray} />
            </TouchableOpacity>
          </View>

          <TransactionItem 
            title="Salary" 
            date="20 Feb 2024" 
            amount="$20" 
            vat="0.5%" 
            paymentMethod="Google Pay"
            iconType="income"
            type="income"
          />
          <TransactionItem 
            title="Cashback" 
            date="13 Mar 2024" 
            amount="$1400" 
            vat="1%" 
            paymentMethod="Cash"
            iconType="income"
            type="income"
          />
          <TransactionItem 
            title="Price Money" 
            date="03 Jun 2024" 
            amount="$120" 
            vat="1%" 
            paymentMethod="Paytm"
            iconType="income"
            type="income"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  selectionSection: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    marginTop: 20,
  },
  dottedCard: {
    width: 80,
    height: 120,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectionCard: {
    width: 120,
    height: 120,
    borderRadius: 24,
    backgroundColor: Colors.white,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  activeCard: {
    backgroundColor: Colors.primary,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  activeIcon: {
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  cardLabel: {
    fontSize: 13,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    color: Colors.black,
    textAlign: 'center',
  },
  activeText: {
    color: Colors.white,
  },
  entriesSection: {
    marginTop: 40,
    paddingHorizontal: 24,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 24,
    flex: 1,
    minHeight: 500,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    color: Colors.black,
  },
  moreButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddSelectScreen;
