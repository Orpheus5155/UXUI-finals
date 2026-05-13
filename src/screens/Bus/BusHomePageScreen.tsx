import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowDownUp, Calendar, Menu, Ticket } from 'lucide-react-native';

import { Colors } from '../../theme/colors';
import BusTopBar from '../../components/BusTopBar';
import BusTripCard from '../../components/BusTripCard';

const UPCOMING_TRIPS = [
  {
    id: '1',
    title: 'Bus Terminal 1',
    from: 'Ha Noi',
    to: 'SaPa',
    time: '10:45 AM',
    date: '2026.05.15',
  },
  {
    id: '2',
    title: 'Bus Terminal 2',
    from: 'Ha Noi',
    to: 'Hai Phong',
    time: '08:05 PM',
    date: '2026.05.15',
  },
  {
    id: '3',
    title: 'Bus Terminal 3',
    from: 'Da Nang',
    to: 'Hue',
    time: '09:45 AM',
    date: '2026.05.15',
  },
  {
    id: '4',
    title: 'Bus Terminal 4',
    from: 'Lorem Ipsum',
    to: 'Lorem Ipsum',
    time: '9 PM, Tue',
    date: '2024.12.08',
  },
];

const BusHomePageScreen = () => {
  const navigation = useNavigation();


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <BusTopBar
          title="Hello, Romina!!"
          subtitle="Where you want go"
          leftIcon={<Menu size={20} color={Colors.busBlue} />}
          rightActions={[{ icon: <Ticket size={18} color={Colors.busBlue} /> }]}
        />

        <View style={styles.searchCard}>
          <View style={styles.inputStack}>
            <View style={styles.inputBox}>
              <Text style={styles.inputPlaceholder}>Boarding From</Text>
            </View>
            <View style={[styles.inputBox, styles.inputBoxSpacing]}>
              <Text style={styles.inputPlaceholder}>Where are you going?</Text>
            </View>
            <View style={styles.swapButton}>
              <ArrowDownUp size={20} color="#FFFFFF" />
            </View>
          </View>
          <View style={styles.dateRow}>
            <TouchableOpacity style={[styles.datePill, styles.datePillActive]} activeOpacity={0.7}>
              <Text style={styles.dateText}>Today</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.datePill} activeOpacity={0.7}>
              <Text style={styles.dateText}>Tomorrow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.datePill, styles.datePillIcon]} activeOpacity={0.7}>
              <Calendar size={14} color="#FFFFFF" />
              <Text style={[styles.dateText, styles.dateTextWithIcon]}>Other</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.findButton}
            activeOpacity={0.8}
          >
            <Text style={styles.findButtonText}>Find Buses</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Upcoming Journey</Text>
        {UPCOMING_TRIPS.map((trip, index) => (
          <BusTripCard
            key={trip.id}
            variant="upcoming"
            title={trip.title}
            from={trip.from}
            to={trip.to}
            departTime={trip.time}
            date={trip.date}
            index={index + 1}
            onPress={
              trip.id === '3'
                ? () => navigation.navigate('BusBooking' as never)
                : undefined
            }
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.busBg,
    flex: 1,
  },
  content: {
    paddingBottom: 24,
  },
  datePill: {
    borderColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    minWidth: 86,
    paddingHorizontal: 14,
    paddingVertical: 4,
  },
  datePillActive: {
    backgroundColor: 'transparent',
  },
  datePillIcon: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  dateText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
  dateTextWithIcon: {
    marginLeft: 6,
  },
  findButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginTop: 14,
    paddingVertical: 13,
  },
  findButtonText: {
    color: '#2D2D2D',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  inputBox: {
    backgroundColor: '#E9EFFB',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 13,
  },
  inputBoxSpacing: {
    marginTop: 10,
  },
  inputStack: {
    position: 'relative',
  },
  inputPlaceholder: {
    color: '#C6CCD6',
    fontSize: 16,
  },
  searchCard: {
    backgroundColor: Colors.busBlue,
    borderRadius: 16,
    marginHorizontal: 20,
    marginTop: 16,
    padding: 18,
  },
  sectionTitle: {
    color: '#2D2D2D',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
    marginHorizontal: 20,
    marginTop: 24,
    textAlign: 'center',
  },
  swapButton: {
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    position: 'absolute',
    right: 22,
    top: '50%',
    transform: [{ translateY: -24 }],
    width: 48,
  },
});

export default BusHomePageScreen;
