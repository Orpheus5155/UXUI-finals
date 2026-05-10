import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar, MoreHorizontal, Car, Smartphone, Plus } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../theme/colors';
import FinanceHeader from '../../components/FinanceHeader';
import FinanceBottomNav from '../../components/FinanceBottomNav';
import { useFinance } from '../../context/FinanceContext';

const SavingsScreen = () => {
  const navigation = useNavigation<any>();
  const { goals } = useFinance();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <FinanceHeader title="Savings" showBack={true} />
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* ... (amount and monthly goal) */}
        <Text style={styles.subTitle}>Current Savings</Text>
        
        <View style={styles.amountContainer}>
          <View style={styles.outerCircle}>
            <View style={styles.innerCircle}>
              <Text style={styles.amountText}>$800</Text>
            </View>
          </View>
        </View>

        <View style={styles.goalStatusCard}>
          <View style={styles.goalHeader}>
            <Calendar size={20} color={Colors.black} />
            <Text style={styles.goalDate}>July 2024</Text>
          </View>
          <Text style={styles.goalLabel}>Goal for this Month</Text>
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: '40%' }]}>
              <Text style={styles.progressText}>$ 200</Text>
            </View>
            <Text style={styles.totalGoalText}>$ 500</Text>
          </View>
        </View>

        <View style={styles.entriesSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Your Goals</Text>
            <TouchableOpacity style={styles.moreButton} onPress={() => navigation.navigate('YourGoals')}>
              <MoreHorizontal size={20} color={Colors.gray} />
            </TouchableOpacity>
          </View>

          {goals.map((goal) => (
            <GoalItem 
              key={goal.id}
              title={goal.title} 
              current={goal.current} 
              total={goal.total} 
              progress={goal.progress} 
              icon={goal.icon === 'car' ? <Car size={20} color={Colors.darkGray} /> : goal.icon === 'home' ? <Home size={20} color={Colors.darkGray} /> : <Smartphone size={20} color={Colors.darkGray} />} 
            />
          ))}
        </View>
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
    backgroundColor: Colors.background,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  subTitle: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: Colors.black,
  },
  amountContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  outerCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  amountText: {
    fontSize: 32,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    color: Colors.white,
  },
  goalStatusCard: {
    backgroundColor: Colors.white,
    marginHorizontal: 24,
    borderRadius: 24,
    padding: 20,
    marginTop: 30,
  },
  goalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  goalDate: {
    fontSize: 15,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    color: Colors.black,
    marginLeft: 8,
  },
  goalLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: Colors.black,
    marginBottom: 12,
  },
  progressBarBg: {
    height: 44,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    overflow: 'hidden',
  },
  progressBarFill: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    paddingLeft: 16,
    borderRadius: 12,
  },
  progressText: {
    color: Colors.white,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    fontSize: 13,
  },
  totalGoalText: {
    color: Colors.black,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    fontSize: 13,
    marginLeft: 'auto',
  },
  entriesSection: {
    marginTop: 30,
    paddingHorizontal: 24,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 24,
    flex: 1,
    minHeight: 400,
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
  goalItem: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  goalIconContainer: {
    width: 48,
    height: 48,
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
    marginBottom: 8,
  },
  itemProgressBarBg: {
    height: 4,
    backgroundColor: '#F3F4F6',
    borderRadius: 2,
    marginBottom: 8,
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
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: Colors.gray,
  },
  totalAmount: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: Colors.gray,
  },
});

export default SavingsScreen;
