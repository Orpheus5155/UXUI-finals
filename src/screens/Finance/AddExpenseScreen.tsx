import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../theme/colors';
import FinanceHeader from '../../components/FinanceHeader';
import { useFinance } from '../../context/FinanceContext';

const AddExpenseScreen = () => {
  const navigation = useNavigation();
  const { addTransaction } = useFinance();

  const handleAddExpense = () => {
    addTransaction({
      title: 'Family Expense',
      date: '10 May 2026',
      amount: '$1,368',
      vat: '0.8%',
      paymentMethod: 'Cash',
      iconType: 'shopping',
      type: 'expense',
    });

    Alert.alert('Success', 'Expense has been added successfully!', [
      { text: 'OK', onPress: () => navigation.goBack() }
    ]);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <FinanceHeader title="Add Expense" showBack={true} />
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* ... (rest of date and week selector) */}
        <View style={styles.dateSelectorCard}>
          <TouchableOpacity style={styles.arrowButton}>
            <ChevronLeft size={20} color={Colors.black} />
          </TouchableOpacity>
          <Text style={styles.dateText}>February - 2023</Text>
          <TouchableOpacity style={styles.arrowButton}>
            <ChevronRight size={20} color={Colors.black} />
          </TouchableOpacity>
        </View>

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

        {/* Form */}
        <View style={styles.form}>
          <Text style={styles.label}>Income Title</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Family Expense" placeholderTextColor="#1F2937" />
          </View>

          <Text style={styles.label}>Amount</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="1,368" placeholderTextColor="#1F2937" keyboardType="numeric" />
            <Text style={styles.currency}>$</Text>
          </View>

          <Text style={styles.label}>Expense Category</Text>
          <View style={styles.categoryContainer}>
            <TouchableOpacity style={styles.dottedAdd}>
              <Plus size={20} color={Colors.gray} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryText}>Health</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.categoryButton, styles.activeCategory]}>
              <Text style={[styles.categoryText, styles.activeCategoryText]}>Grocery</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.submitButton}
          onPress={handleAddExpense}
        >
          <Text style={styles.submitText}>ADD EXPENSE</Text>
        </TouchableOpacity>
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
  form: {
    paddingHorizontal: 24,
    marginTop: 32,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: Colors.gray,
    marginBottom: 8,
    marginTop: 20,
  },
  inputContainer: {
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: '#73BAFF',
    borderRadius: 12,
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    shadowColor: '#73BAFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 1,
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontFamily: 'Inter-Medium',
    color: '#1F2937',
  },
  currency: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: Colors.gray,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    gap: 12,
  },
  dottedAdd: {
    width: 44,
    height: 44,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryButton: {
    flex: 1,
    height: 44,
    backgroundColor: Colors.white,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  activeCategory: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  categoryText: {
    fontSize: 13,
    fontFamily: 'Inter-SemiBold',
    color: Colors.black,
  },
  activeCategoryText: {
    color: Colors.white,
  },
  submitButton: {
    backgroundColor: Colors.primary,
    marginHorizontal: 24,
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
  },
  submitText: {
    fontSize: 15,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    color: Colors.white,
    letterSpacing: 0.5,
  },
});

export default AddExpenseScreen;
