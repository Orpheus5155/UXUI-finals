import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Modal, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronDown, Calendar, ChevronLeft, ChevronRight, Check } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../theme/colors';
import FinanceHeader from '../../components/FinanceHeader';
import { useFinance } from '../../context/FinanceContext';

const AddGoalScreen = () => {
  const navigation = useNavigation();
  const { addGoal } = useFinance();
  const [showContribModal, setShowContribModal] = useState(false);
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [contribType, setContribType] = useState('Yearly');
  const [deadline, setDeadline] = useState('03/04/2026');

  const contribOptions = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

  const handleAddGoal = () => {
    addGoal({
      title: 'New House',
      current: '$0',
      total: '$188,000',
      progress: 0,
      icon: 'home',
    });

    Alert.alert('Success', 'Your new goal has been created!', [
      { text: 'Great!', onPress: () => navigation.goBack() }
    ]);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <FinanceHeader title="Add Goal" showBack={true} />
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.form}>
          <Text style={styles.label}>Goal Title</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="New house" placeholderTextColor="#1F2937" />
          </View>

          <Text style={styles.label}>Amount</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="188,000" placeholderTextColor="#1F2937" keyboardType="numeric" />
            <Text style={styles.currency}>$</Text>
          </View>

          <Text style={styles.label}>Contribution Type</Text>
          <TouchableOpacity 
            style={styles.selectorContainer}
            onPress={() => setShowContribModal(true)}
          >
            <Text style={styles.selectorText}>{contribType}</Text>
            <ChevronDown size={20} color={Colors.gray} />
          </TouchableOpacity>

          <Text style={styles.label}>Deadline</Text>
          <TouchableOpacity 
            style={styles.selectorContainer}
            onPress={() => setShowCalendarModal(true)}
          >
            <Text style={styles.selectorText}>{deadline}</Text>
            <Calendar size={20} color={Colors.gray} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.submitButton}
          onPress={handleAddGoal}
        >
          <Text style={styles.submitText}>ADD GOAL</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Contribution Type Modal */}
      <Modal visible={showContribModal} transparent animationType="fade">
        <TouchableOpacity 
          style={styles.modalOverlay} 
          activeOpacity={1} 
          onPress={() => setShowContribModal(false)}
        >
          <View style={styles.modalContent}>
            {contribOptions.map((option) => (
              <TouchableOpacity 
                key={option} 
                style={styles.optionItem}
                onPress={() => {
                  setContribType(option);
                  setShowContribModal(false);
                }}
              >
                <Text style={[styles.optionText, contribType === option && styles.selectedText]}>
                  {option}
                </Text>
                {contribType === option && (
                  <View style={styles.checkContainer}>
                    <Check size={16} color={Colors.white} />
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Calendar Modal */}
      <Modal visible={showCalendarModal} transparent animationType="fade">
        <TouchableOpacity 
          style={styles.modalOverlay} 
          activeOpacity={1} 
          onPress={() => setShowCalendarModal(false)}
        >
          <View style={[styles.modalContent, { width: 320 }]}>
            <View style={styles.calendarHeader}>
              <TouchableOpacity style={styles.arrowButton}>
                <ChevronLeft size={16} color="#374151" />
              </TouchableOpacity>
              <Text style={styles.monthText}>February - 2026</Text>
              <TouchableOpacity style={styles.arrowButton}>
                <ChevronRight size={16} color="#374151" />
              </TouchableOpacity>
            </View>

            <View style={styles.daysOfWeek}>
              {['Mo', 'Tu', 'We', 'Th', 'Fri', 'Sa', 'Su'].map(day => (
                <Text key={day} style={styles.dayLabel}>{day}</Text>
              ))}
            </View>

            <View style={styles.calendarGrid}>
              {[...Array(35)].map((_, i) => {
                const day = (i - 1) % 31 + 1;
                const isInactive = i < 2 || i > 32;
                const isActive = i === 5; // Feb 3rd
                return (
                  <TouchableOpacity 
                    key={i} 
                    style={[styles.dayContainer, isActive && styles.activeDay]}
                    onPress={() => {
                      if (!isInactive) {
                        setDeadline(`03/02/2026`);
                        setShowCalendarModal(false);
                      }
                    }}
                  >
                    <Text style={[
                      styles.dayText, 
                      isInactive && styles.inactiveDayText,
                      isActive && styles.activeDayText
                    ]}>
                      {isInactive ? (i < 2 ? 29 + i : i - 32) : day}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
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
  form: {
    paddingHorizontal: 24,
    marginTop: 20,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: Colors.gray,
    marginBottom: 8,
    marginTop: 24,
  },
  inputContainer: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
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
  selectorContainer: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  selectorText: {
    fontSize: 15,
    fontFamily: 'Inter-Medium',
    color: '#1F2937',
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    backgroundColor: Colors.white,
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F9FAFB',
  },
  optionText: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#374151',
  },
  selectedText: {
    color: Colors.primary,
    fontFamily: 'Inter-Bold',
  },
  checkContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
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
  monthText: {
    fontSize: 14,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    color: '#1f2937',
  },
  daysOfWeek: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  dayLabel: {
    width: 36,
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    color: '#1f2937',
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  dayContainer: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  activeDay: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
  },
  dayText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#374151',
  },
  inactiveDayText: {
    color: '#D1D5DB',
  },
  activeDayText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
});

export default AddGoalScreen;
