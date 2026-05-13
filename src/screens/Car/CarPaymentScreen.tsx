import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Colors } from '../../theme/colors';
import CarHeader from '../../components/CarHeader';
import CarPaymentOption from '../../components/CarPaymentOption';

const BACK_ICON = 'https://www.figma.com/api/mcp/asset/7f391925-1726-4143-969e-de97bfd88b87';
const LEFT_ARROW = 'https://www.figma.com/api/mcp/asset/462b2c6c-d967-4641-8a7b-fced23c18cc5';
const RIGHT_ARROW = 'https://www.figma.com/api/mcp/asset/f7fc4365-9cee-4df7-805b-8d95efe5e75d';
const PAYPAL_ICON = 'https://www.figma.com/api/mcp/asset/df398a65-c8ae-4676-912d-2e0150c40bd5';
const GOOGLE_PAY_ICON = 'https://www.figma.com/api/mcp/asset/5a7917b2-3d9a-4470-8ef5-c1b3480a0356';
const PAYTM_ICON = 'https://www.figma.com/api/mcp/asset/3310c78b-0ccc-478c-8793-6203fd0eab2f';
const OPTION_TRAIL = 'https://www.figma.com/api/mcp/asset/288fd380-3454-4b23-a63d-710ecd6a7313';
const HOME_ICON = 'https://www.figma.com/api/mcp/asset/9ab9dd43-97d8-4b52-bafd-9da943a27bf4';
const OTHER_ICON = 'https://www.figma.com/api/mcp/asset/fb6bc2a3-0da5-40f2-89f3-ebf77f866ea8';
const AVATAR = 'https://www.figma.com/api/mcp/asset/01a5de0f-d7f1-4423-8d5d-63bedb81c0aa';
const LOCATION_ICON = 'https://www.figma.com/api/mcp/asset/5c69b0f1-e363-4785-a1c7-85a2bfd48b39';
const CHAT_ICON = 'https://www.figma.com/api/mcp/asset/12a556a9-61f2-445a-b5dc-866fcdc33d59';
const CALL_ICON = 'https://www.figma.com/api/mcp/asset/7d164c90-7544-402b-94df-d92fef15795b';

const WEEK_DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const DATE_ROWS = [
  [27, 28, 29, 30, 31, 1, 2],
  [3, 4, 5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21, 22, 23],
  [24, 25, 26, 27, 28, 29, 30],
];
const DISABLED_DATES = new Set([27, 28, 29, 30, 31]);
const SELECTED_DATES = new Set([8, 9, 10, 11, 12, 13, 14, 15]);

const CarPaymentScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <CarHeader
        title="Payment and Details"
        leftIcon={<Image source={{ uri: BACK_ICON }} style={styles.backIcon} />}
        onLeftPress={() => navigation.goBack()}
        containerStyle={styles.header}
      />

      <View style={styles.calendarWrap}>
        <View style={styles.monthRow}>
          <Image source={{ uri: LEFT_ARROW }} style={styles.monthArrow} />
          <Text style={styles.monthText}>September</Text>
          <Image source={{ uri: RIGHT_ARROW }} style={styles.monthArrow} />
        </View>

        <View style={styles.calendarCard}>
          <View style={styles.weekRow}>
            {WEEK_DAYS.map((day) => (
              <View key={day} style={styles.weekCell}>
                <Text style={styles.weekText}>{day}</Text>
              </View>
            ))}
          </View>
          {DATE_ROWS.map((row, rowIndex) => (
            <View key={`row-${rowIndex}`} style={styles.dateRow}>
              {row.map((date) => {
                const disabled = DISABLED_DATES.has(date) && rowIndex === 0;
                const selected = SELECTED_DATES.has(date) && rowIndex > 0;
                return (
                  <View
                    key={`${rowIndex}-${date}`}
                    style={[
                      styles.dateCell,
                      disabled && styles.dateCellDisabled,
                      selected && styles.dateCellSelected,
                    ]}
                  >
                    <Text style={styles.dateText}>{date}</Text>
                  </View>
                );
              })}
            </View>
          ))}
        </View>
      </View>

      <Text style={styles.sectionTitle}>Payment Options</Text>
      <View style={styles.sectionBlock}>
        <CarPaymentOption
          label="PayPal"
          detail="234 **** **** **12"
          icon={PAYPAL_ICON}
          trailingIcon={OPTION_TRAIL}
        />
        <View style={styles.optionSpacing} />
        <CarPaymentOption
          label="Google Pay"
          detail="564 **** **** **09"
          icon={GOOGLE_PAY_ICON}
          trailingIcon={OPTION_TRAIL}
          active
        />
        <View style={styles.optionSpacing} />
        <CarPaymentOption
          label="Paytm"
          detail="234 **** **** **12"
          icon={PAYTM_ICON}
          trailingIcon={OPTION_TRAIL}
        />
        <TouchableOpacity style={styles.moreButton} activeOpacity={0.85}>
          <Text style={styles.moreText}>more</Text>
          <Image source={{ uri: RIGHT_ARROW }} style={styles.moreArrow} />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Delivery Address</Text>
      <View style={styles.sectionBlock}>
        <View style={[styles.addressCard, styles.addressCardActive]}>
          <View style={styles.addressLeft}>
            <Image source={{ uri: HOME_ICON }} style={styles.addressIcon} />
            <View>
              <Text style={styles.addressTitle}>Home Address</Text>
              <Text style={styles.addressText}>12 Chennai, 21</Text>
            </View>
          </View>
          <View style={styles.editPill}>
            <Text style={styles.editText}>Edit</Text>
          </View>
        </View>
        <View style={styles.addressCard}>
          <View style={styles.addressLeft}>
            <Image source={{ uri: OTHER_ICON }} style={styles.addressIcon} />
            <View>
              <Text style={styles.addressTitle}>Other Address</Text>
              <Text style={styles.addressText}>Tech It, Chennai</Text>
            </View>
          </View>
          <View style={styles.editPill}>
            <Text style={styles.editText}>Edit</Text>
          </View>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Contact Renter</Text>
      <View style={styles.contactRow}>
        <View style={styles.contactInfo}>
          <Image source={{ uri: AVATAR }} style={styles.contactAvatar} />
          <View>
            <Text style={styles.contactName}>John Smith</Text>
            <View style={styles.contactLocationRow}>
              <Image source={{ uri: LOCATION_ICON }} style={styles.locationIcon} />
              <Text style={styles.contactLocation}>Chennai Central, suburban</Text>
            </View>
          </View>
        </View>
        <View style={styles.contactActions}>
          <Image source={{ uri: CHAT_ICON }} style={styles.actionIcon} />
          <Image source={{ uri: CALL_ICON }} style={styles.actionIcon} />
        </View>
      </View>

      <Text style={styles.sectionTitle}>Check Out</Text>
      <View style={styles.checkoutCard}>
        <View style={styles.checkoutRow}>
          <View style={styles.checkoutBadge} />
          <View>
            <Text style={styles.checkoutTitle}>Ferrari 280 Special</Text>
            <Text style={styles.checkoutDetail}>$450/Day x 8 Days</Text>
          </View>
        </View>
      </View>
      <View style={styles.totalBar}>
        <Text style={styles.totalLabel}>Grand Total</Text>
        <Text style={styles.totalValue}>$3,600</Text>
      </View>

      <TouchableOpacity
        style={styles.payNowButton}
        activeOpacity={0.85}
        onPress={() => navigation.navigate('CarVerifyPin' as never)}
      >
        <Text style={styles.payNowText}>Pay Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.carBlue,
  },
  content: {
    paddingBottom: 40,
  },
  header: {
    marginTop: 40,
    paddingHorizontal: 12,
  },
  backIcon: {
    width: 40,
    height: 32,
  },
  calendarWrap: {
    marginTop: 16,
    alignItems: 'center',
  },
  monthRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 50,
  },
  monthArrow: {
    width: 8,
    height: 16,
  },
  monthText: {
    marginHorizontal: 16,
    fontSize: 18,
    color: Colors.white,
    fontFamily: 'Satoshi-Medium',
  },
  calendarCard: {
    marginTop: 8,
    backgroundColor: 'rgba(70,70,70,0.5)',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 10,
  },
  weekRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  weekCell: {
    width: 44,
    height: 44,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginHorizontal: 3,
  },
  weekText: {
    color: Colors.white,
    fontSize: 16,
    fontFamily: 'Satoshi-Medium',
  },
  dateRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  dateCell: {
    width: 44,
    height: 44,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    marginHorizontal: 3,
  },
  dateCellDisabled: {
    opacity: 0.4,
  },
  dateCellSelected: {
    backgroundColor: Colors.carOrange,
  },
  dateText: {
    color: Colors.white,
    fontSize: 18,
    fontFamily: 'Satoshi-Bold',
  },
  sectionTitle: {
    marginTop: 32,
    marginLeft: 24,
    fontSize: 18,
    color: Colors.white,
    fontFamily: 'Satoshi-Bold',
  },
  sectionBlock: {
    marginTop: 12,
    paddingHorizontal: 24,
  },
  optionSpacing: {
    height: 12,
  },
  moreButton: {
    marginTop: 12,
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255,0.1)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  moreText: {
    color: Colors.white,
    fontSize: 18,
    fontFamily: 'Satoshi-Bold',
    marginRight: 8,
  },
  moreArrow: {
    width: 14,
    height: 12,
  },
  addressCard: {
    backgroundColor: 'rgba(255,250,251,0.1)',
    borderRadius: 9,
    padding: 12,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addressCardActive: {
    backgroundColor: 'rgba(235,94,40,0.9)',
  },
  addressLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressIcon: {
    width: 26,
    height: 24,
    marginRight: 12,
  },
  addressTitle: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: 'Satoshi-Bold',
  },
  addressText: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.6)',
    fontFamily: 'Satoshi-Regular',
  },
  editPill: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 50,
  },
  editText: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: 'Satoshi-Bold',
  },
  contactRow: {
    marginTop: 12,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactAvatar: {
    width: 64,
    height: 64,
    marginRight: 16,
  },
  contactName: {
    fontSize: 16,
    color: Colors.white,
    fontFamily: 'Satoshi-Bold',
  },
  contactLocationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  contactLocation: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.5)',
    fontFamily: 'Satoshi-Regular',
  },
  locationIcon: {
    width: 12,
    height: 19,
    marginRight: 6,
  },
  contactActions: {
    flexDirection: 'row',
  },
  actionIcon: {
    width: 44,
    height: 44,
    marginLeft: 8,
  },
  checkoutCard: {
    marginTop: 12,
    marginHorizontal: 24,
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 10,
    padding: 16,
  },
  checkoutRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkoutBadge: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: Colors.white,
    marginRight: 12,
  },
  checkoutTitle: {
    fontSize: 20,
    color: Colors.white,
    fontFamily: 'Satoshi-Black',
  },
  checkoutDetail: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.7)',
    fontFamily: 'Satoshi-Medium',
    marginTop: 6,
  },
  totalBar: {
    marginTop: 16,
    marginHorizontal: 24,
    backgroundColor: 'rgba(235,94,40,0.9)',
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalLabel: {
    fontSize: 20,
    color: Colors.white,
    fontFamily: 'Satoshi-Bold',
  },
  totalValue: {
    fontSize: 24,
    color: Colors.white,
    fontFamily: 'Satoshi-Bold',
  },
  payNowButton: {
    marginTop: 24,
    alignSelf: 'center',
    backgroundColor: '#1756CC',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 50,
  },
  payNowText: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: 'Satoshi-Bold',
  },
});

export default CarPaymentScreen;
