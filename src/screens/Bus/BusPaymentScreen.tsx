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
import { ChevronDown, ChevronLeft, Home, Ticket } from 'lucide-react-native';

import { Colors } from '../../theme/colors';
import BusTopBar from '../../components/BusTopBar';

const BusPaymentScreen = () => {
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
        </View>

        <View style={styles.formCard}>
          <Text style={styles.cardTitle}>Credit Card Details</Text>

          <View style={styles.paymentMethodRow}>
            <Text style={styles.paymentLabel}>Payment Method</Text>
            <View style={styles.paymentPills}>
              <View style={styles.paymentPill}>
                <Text style={styles.paymentPillText}>MC</Text>
              </View>
              <View style={styles.paymentPill}>
                <Text style={styles.paymentPillText}>VISA</Text>
              </View>
              <View style={styles.paymentPillActive}>
                <Text style={styles.paymentPillTextActive}>AMEX</Text>
              </View>
              <View style={styles.paymentPill}>
                <Text style={styles.paymentPillText}>DISC</Text>
              </View>
            </View>
          </View>

          <Text style={styles.inputLabel}>Name on card</Text>
          <TextInput
            placeholder="Name"
            placeholderTextColor={Colors.busMuted}
            style={styles.input}
          />

          <Text style={styles.inputLabel}>Card number</Text>
          <TextInput
            placeholder="0000 0000 0000 0000"
            placeholderTextColor={Colors.busMuted}
            keyboardType="number-pad"
            style={styles.input}
          />

          <View style={styles.inlineRow}>
            <View style={[styles.inlineField, styles.inlineFieldSpacing]}>
              <Text style={styles.inputLabel}>Card expiration</Text>
              <View style={styles.selectInput}>
                <Text style={styles.selectText}>Month</Text>
                <ChevronDown size={16} color={Colors.busMuted} />
              </View>
            </View>
            <View style={styles.inlineField}>
              <Text style={styles.inputLabel}>
                {' '}
              </Text>
              <View style={styles.selectInput}>
                <Text style={styles.selectText}>Year</Text>
                <ChevronDown size={16} color={Colors.busMuted} />
              </View>
            </View>
          </View>

          <Text style={styles.inputLabel}>Card Security Code</Text>
          <TextInput
            placeholder="Code"
            placeholderTextColor={Colors.busMuted}
            keyboardType="number-pad"
            style={styles.input}
          />
        </View>

        <TouchableOpacity
          style={styles.payButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('BusVerifyPin' as never)}
        >
          <Text style={styles.payButtonText}>Pay Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardTitle: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
  },
  container: {
    backgroundColor: Colors.busBg,
    flex: 1,
  },
  content: {
    paddingBottom: 32,
  },
  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginHorizontal: 20,
    marginTop: 20,
    padding: 16,
  },
  inlineField: {
    flex: 1,
  },
  inlineFieldSpacing: {
    marginRight: 12,
  },
  inlineRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  input: {
    borderColor: Colors.busBorder,
    borderRadius: 6,
    borderWidth: 1,
    color: '#000000',
    marginBottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  inputLabel: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 6,
  },
  payButton: {
    backgroundColor: Colors.busBlue,
    borderRadius: 16,
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 16,
  },
  payButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  paymentLabel: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
  },
  paymentMethodRow: {
    borderColor: Colors.busBorder,
    borderRadius: 6,
    borderStyle: 'dashed',
    borderWidth: 1,
    marginBottom: 16,
    padding: 12,
  },
  paymentPill: {
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    borderRadius: 20,
    height: 28,
    justifyContent: 'center',
    marginLeft: 8,
    paddingHorizontal: 10,
  },
  paymentPillActive: {
    alignItems: 'center',
    backgroundColor: '#006FCF',
    borderRadius: 20,
    height: 28,
    justifyContent: 'center',
    marginLeft: 8,
    paddingHorizontal: 10,
  },
  paymentPillText: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '600',
  },
  paymentPillTextActive: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  paymentPills: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  selectInput: {
    alignItems: 'center',
    borderColor: Colors.busBorder,
    borderRadius: 6,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  selectText: {
    color: Colors.busMuted,
    fontSize: 14,
  },
  summaryCard: {
    backgroundColor: Colors.busBlue,
    borderRadius: 16,
    marginHorizontal: 20,
    marginTop: 12,
    padding: 16,
  },
  summaryRow: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 6,
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

export default BusPaymentScreen;
