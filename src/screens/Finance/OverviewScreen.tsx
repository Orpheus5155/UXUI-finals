import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Plus, Bell, Briefcase, MoreHorizontal } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../theme/colors';
import FinanceHeader from '../../components/FinanceHeader';
import FinanceCard from '../../components/FinanceCard';
import TransactionItem from '../../components/TransactionItem';
import FinanceBottomNav from '../../components/FinanceBottomNav';
import { useFinance } from '../../context/FinanceContext';

const OverviewScreen = () => {
  const navigation = useNavigation<any>();
  const { transactions } = useFinance();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <FinanceHeader title="Bill Overview" showBack={true} />
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Salary/Expense Cards */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.cardsScroll}
        >
          <FinanceCard title="Total Salary" amount="$1,289.38" />
          <FinanceCard 
            title="Total Expense" 
            amount="$298.16" 
            isActive={true} 
            onPress={() => navigation.navigate('TotalExpenseSpend')}
          />
          <FinanceCard title="Monthly" amount="$3,450.00" />
        </ScrollView>

        {/* ... (rest of action buttons and dots) */}
        <View style={styles.actionSection}>
          <TouchableOpacity 
            style={styles.mainActionButton}
            onPress={() => navigation.navigate('Savings')}
          >
            <Plus size={18} color={Colors.white} />
            <Text style={styles.mainActionText}>Savings</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.secondaryActionButton}
            onPress={() => navigation.navigate('Reminders')}
          >
            <Bell size={18} color={Colors.black} />
            <Text style={styles.secondaryActionText}>Remind</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryActionButton}>
            <Briefcase size={18} color={Colors.black} />
            <Text style={styles.secondaryActionText}>Budget</Text>
          </TouchableOpacity>
        </View>

        {/* Pagination Dots */}
        <View style={styles.paginationDots}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        {/* Latest Entries */}
        <View style={styles.entriesSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Latest Entries</Text>
            <TouchableOpacity style={styles.moreButton}>
              <MoreHorizontal size={20} color={Colors.gray} />
            </TouchableOpacity>
          </View>

          {transactions.map((item) => (
            <TransactionItem 
              key={item.id}
              title={item.title} 
              date={item.date} 
              amount={item.amount} 
              vat={item.vat} 
              paymentMethod={item.paymentMethod}
              iconType={item.iconType}
              type={item.type}
            />
          ))}
        </View>
      </ScrollView>

      <FinanceBottomNav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  cardsScroll: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  actionSection: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    marginTop: 10,
  },
  mainActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 14,
    flex: 1,
    marginRight: 8,
    justifyContent: 'center',
  },
  mainActionText: {
    color: Colors.white,
    marginLeft: 8,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
  },
  secondaryActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    flex: 1,
    marginHorizontal: 4,
    justifyContent: 'center',
  },
  secondaryActionText: {
    color: Colors.black,
    marginLeft: 8,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    fontSize: 13,
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    gap: 6,
  },
  dot: {
    width: 14,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#E5E7EB',
  },
  activeDot: {
    backgroundColor: Colors.primary,
    width: 16,
  },
  entriesSection: {
    marginTop: 30,
    paddingHorizontal: 24,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 24,
    flex: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
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

export default OverviewScreen;
