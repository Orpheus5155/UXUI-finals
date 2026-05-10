import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../theme/colors';
import FinanceHeader from '../../components/FinanceHeader';
import TransactionItem from '../../components/TransactionItem';
import FinanceBottomNav from '../../components/FinanceBottomNav';

const TotalExpenseSpendScreen = () => {
  const navigation = useNavigation<any>();
  const [activeTab, setActiveTab] = useState<'spends' | 'categories'>('spends');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <FinanceHeader title="Total Expenses" showBack={true} />
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Date Selector */}
        <View style={styles.dateSelectorCard}>
          <TouchableOpacity style={styles.arrowButton}>
            <ChevronLeft size={20} color={Colors.black} />
          </TouchableOpacity>
          <Text style={styles.dateText}>February - 2023</Text>
          <TouchableOpacity style={styles.arrowButton}>
            <ChevronRight size={20} color={Colors.black} />
          </TouchableOpacity>
        </View>

        {/* Weekly Day Selector */}
        <View style={styles.weekSelector}>
          {['Mo', 'Tu', 'We', 'Th', 'Fri', 'Sa', 'Su'].map((day, index) => (
            <View key={day} style={styles.dayCol}>
              <Text style={styles.dayText}>{day}</Text>
              <TouchableOpacity 
                style={[
                  styles.dayNumContainer, 
                  index === 4 && styles.activeDayContainer
                ]}
              >
                <Text style={[styles.dayNum, index === 4 && styles.activeDayNum]}>
                  {index === 0 ? 29 : index === 1 ? 30 : index - 1}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Circular Amount */}
        <View style={styles.amountContainer}>
          <View style={styles.outerCircle}>
            <View style={styles.innerCircle}>
              <Text style={styles.amountLabel}>$1,600</Text>
            </View>
          </View>
          <Text style={styles.budgetStatus}>
            You have Spend total{'\n'}
            <Text style={styles.boldText}>60% of you budget</Text>
          </Text>
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'spends' && styles.activeTab]}
            onPress={() => setActiveTab('spends')}
          >
            <Text style={[styles.tabText, activeTab === 'spends' && styles.activeTabText]}>Spends</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'categories' && styles.activeTab]}
            onPress={() => navigation.navigate('TotalExpenseCategories')}
          >
            <Text style={[styles.tabText, activeTab === 'categories' && styles.activeTabText]}>Categories</Text>
          </TouchableOpacity>
        </View>

        {/* Transactions */}
        <View style={styles.entriesSection}>
          <TransactionItem 
            title="Food" 
            date="20 Feb 2024" 
            amount="$20" 
            vat="0.5%" 
            paymentMethod="Google Pay"
            iconType="food"
            type="expense"
          />
          <TransactionItem 
            title="Uber" 
            date="13 Mar 2024" 
            amount="$18" 
            vat="0.8%" 
            paymentMethod="Cash"
            iconType="transport"
            type="expense"
          />
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
  dateSelectorCard: {
    backgroundColor: Colors.white,
    marginHorizontal: 24,
    borderRadius: 24,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  arrowButton: {
    width: 32,
    height: 32,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 15,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    color: Colors.black,
  },
  weekSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginTop: 24,
  },
  dayCol: {
    alignItems: 'center',
  },
  dayText: {
    fontSize: 13,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 12,
  },
  dayNumContainer: {
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeDayContainer: {
    backgroundColor: Colors.primary,
  },
  dayNum: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#D1D5DB',
  },
  activeDayNum: {
    color: Colors.white,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
  },
  amountContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  outerCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  amountLabel: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    color: Colors.white,
  },
  budgetStatus: {
    marginTop: 24,
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Inter-Medium',
    color: Colors.black,
    lineHeight: 22,
  },
  boldText: {
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
  },
  tabsContainer: {
    flexDirection: 'row',
    marginHorizontal: 24,
    marginTop: 32,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
  },
  tabText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#9CA3AF',
  },
  activeTabText: {
    color: Colors.black,
    fontFamily: 'Inter-Bold',
  },
  entriesSection: {
    paddingHorizontal: 24,
    marginTop: 16,
  },
});

export default TotalExpenseSpendScreen;
