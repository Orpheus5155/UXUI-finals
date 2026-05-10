import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Car, Smartphone } from 'lucide-react-native';
import { Colors } from '../../theme/colors';
import FinanceHeader from '../../components/FinanceHeader';
import FinanceBottomNav from '../../components/FinanceBottomNav';

const YourGoalsScreen = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <FinanceHeader title="Your Goals" showBack={true} />
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>All Goals</Text>
        </View>

        <GoalItem 
          title="New Bike" 
          current="$300" 
          total="$600" 
          progress={0.5} 
          icon={<Car size={20} color={Colors.darkGray} />} 
        />
        <GoalItem 
          title="Iphone 15 Pro" 
          current="$700" 
          total="$1,000" 
          progress={0.7} 
          icon={<Smartphone size={20} color={Colors.darkGray} />} 
        />
      </ScrollView>

      <FinanceBottomNav />
    </SafeAreaView>
  );
};

const GoalItem = ({ title, current, total, progress, icon }: any) => (
  <View style={styles.goalItem}>
    <View style={styles.goalIconContainer}>{icon}</View>
    <View style={styles.goalInfo}>
      <Text style={styles.goalTitle}>{title}</Text>
      <View style={styles.itemProgressBarBg}>
        <View style={[styles.itemProgressBarFill, { width: `${progress * 100}%` }]} />
      </View>
      <View style={styles.goalAmounts}>
        <Text style={styles.currentAmount}>{current}</Text>
        <Text style={styles.totalAmount}>{total}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollContent: {
    paddingBottom: 100,
    paddingHorizontal: 24,
  },
  sectionHeader: {
    marginTop: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    color: Colors.black,
  },
  goalItem: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  goalIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#F4F5F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  goalInfo: {
    flex: 1,
    marginLeft: 16,
  },
  goalTitle: {
    fontSize: 15,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 10,
  },
  itemProgressBarBg: {
    height: 4,
    backgroundColor: '#F3F4F6',
    borderRadius: 2,
    marginBottom: 10,
  },
  itemProgressBarFill: {
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 2,
  },
  goalAmounts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  currentAmount: {
    fontSize: 13,
    fontFamily: 'Inter-Medium',
    color: Colors.gray,
  },
  totalAmount: {
    fontSize: 13,
    fontFamily: 'Inter-Medium',
    color: Colors.gray,
  },
});

export default YourGoalsScreen;
