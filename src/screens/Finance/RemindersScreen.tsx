import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MoreHorizontal } from 'lucide-react-native';
import { Colors } from '../../theme/colors';
import FinanceHeader from '../../components/FinanceHeader';
import FinanceBottomNav from '../../components/FinanceBottomNav';
import { useFinance } from '../../context/FinanceContext';

const RemindersScreen = () => {
  const { reminders } = useFinance();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <FinanceHeader title="Reminders" showBack={true} />
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {reminders.map((reminder) => (
          <ReminderItem 
            key={reminder.id}
            title={reminder.title} 
            date={reminder.date} 
            amount={reminder.amount} 
            dueDate={reminder.dueDate} 
          />
        ))}
      </ScrollView>

      <FinanceBottomNav />
    </SafeAreaView>
  );
};

const ReminderItem = ({ title, date, amount, dueDate }: any) => (
  <View style={styles.reminderItem}>
    <View style={styles.reminderHeader}>
      <Text style={styles.reminderDate}>Reminder Date: {date}</Text>
      <TouchableOpacity>
        <MoreHorizontal size={18} color={Colors.gray} />
      </TouchableOpacity>
    </View>
    <View style={styles.reminderContent}>
      <View>
        <Text style={styles.reminderTitle}>{title}</Text>
        <Text style={styles.amount}>{amount}</Text>
      </View>
      <View style={styles.dueSection}>
        <Text style={styles.dueLabel}>Due on</Text>
        <Text style={styles.dueDate}>{dueDate}</Text>
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
  reminderItem: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  reminderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  reminderDate: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: Colors.gray,
  },
  reminderContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  reminderTitle: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 4,
  },
  amount: {
    fontSize: 15,
    fontFamily: 'Inter-Medium',
    color: Colors.gray,
  },
  dueSection: {
    alignItems: 'flex-end',
  },
  dueLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: Colors.gray,
    marginBottom: 4,
  },
  dueDate: {
    fontSize: 13,
    fontFamily: 'Inter-Medium',
    color: Colors.gray,
  },
});

export default RemindersScreen;
