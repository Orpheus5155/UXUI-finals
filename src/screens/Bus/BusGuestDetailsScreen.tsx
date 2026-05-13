import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeft, Home, Ticket } from 'lucide-react-native';

import { Colors } from '../../theme/colors';
import BusTopBar from '../../components/BusTopBar';

const BusGuestDetailsScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <BusTopBar
          title="Hello, Romina!!"
          subtitle="Where you want go"
          leftIcon={<ChevronLeft size={20} color={Colors.busBlue} />}
          onLeftPress={() => navigation.goBack()}
          rightActions={[
            { icon: <Home size={18} color={Colors.busBlue} /> },
            { icon: <Ticket size={18} color={Colors.busBlue} /> },
          ]}
        />

        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Minh Chau Galaxy</Text>
          <Text style={styles.summarySubtitle}>A/C Sleeper (2+2)</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryTime}>9:00 AM</Text>
            <View style={styles.timeDivider} />
            <Text style={styles.summaryTime}>12:00 AM</Text>
          </View>
          <Text style={styles.summaryPrice}>$8.36</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Traveller Information</Text>
          <Text style={styles.cardSectionLabel}>Passenger 1</Text>
          <TextInput
            placeholder="Full Name"
            placeholderTextColor="#000000"
            style={styles.input}
          />
          <View style={styles.inlineRow}>
            <TextInput
              placeholder="Age"
              placeholderTextColor="#000000"
              style={[styles.input, styles.inputSmall]}
            />
            <View style={styles.genderRow}>
              <View style={styles.genderOption}>
                <View style={styles.genderDot} />
                <Text style={styles.genderText}>Male</Text>
              </View>
              <View style={styles.genderOption}>
                <View style={styles.genderDot} />
                <Text style={styles.genderText}>Female</Text>
              </View>
            </View>
          </View>

          <Text style={[styles.cardSectionLabel, styles.sectionSpacing]}>Passenger 2</Text>
          <TextInput
            placeholder="Full Name"
            placeholderTextColor="#000000"
            style={styles.input}
          />
          <View style={styles.inlineRow}>
            <TextInput
              placeholder="Age"
              placeholderTextColor="#000000"
              style={[styles.input, styles.inputSmall]}
            />
            <View style={styles.genderRow}>
              <View style={styles.genderOption}>
                <View style={styles.genderDot} />
                <Text style={styles.genderText}>Male</Text>
              </View>
              <View style={styles.genderOption}>
                <View style={styles.genderDot} />
                <Text style={styles.genderText}>Female</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Contact Information</Text>
          <TextInput
            placeholder="Phone Number"
            placeholderTextColor="#000000"
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#000000"
            style={styles.input}
          />
        </View>

        <TouchableOpacity
          style={styles.proceedButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('BusPayment' as never)}
        >
          <Text style={styles.proceedButtonText}>Proceed to Book</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.busGray,
    borderRadius: 16,
    marginHorizontal: 20,
    marginTop: 16,
    padding: 16,
  },
  cardSectionLabel: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 8,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  container: {
    backgroundColor: Colors.busBg,
    flex: 1,
  },
  content: {
    paddingBottom: 32,
  },
  genderDot: {
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    height: 12,
    marginRight: 6,
    width: 12,
  },
  genderOption: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 12,
  },
  genderRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  genderText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  inlineRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 6,
    color: '#000000',
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
  },
  inputSmall: {
    width: 90,
  },
  proceedButton: {
    backgroundColor: Colors.busBlue,
    borderRadius: 16,
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 16,
  },
  proceedButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  sectionSpacing: {
    marginTop: 8,
  },
  summaryCard: {
    backgroundColor: Colors.busBlue,
    borderRadius: 16,
    marginHorizontal: 20,
    marginTop: 12,
    padding: 16,
  },
  summaryPrice: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
    marginTop: 8,
  },
  summaryRow: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 8,
  },
  summarySubtitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '300',
    marginTop: 4,
  },
  summaryTime: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  summaryTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  timeDivider: {
    backgroundColor: '#FFFFFF',
    height: 2,
    marginHorizontal: 8,
    width: 12,
  },
});

export default BusGuestDetailsScreen;
