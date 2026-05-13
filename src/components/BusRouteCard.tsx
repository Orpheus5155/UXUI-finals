import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ArrowDownUp } from 'lucide-react-native';

import { Colors } from '../theme/colors';

type BusRouteCardProps = {
  from: string;
  to: string;
  dateLabel: string;
  swapIcon?: string;
  ticketImage?: string;
};

const BusRouteCard = ({
  from,
  to,
  dateLabel,
  swapIcon,
  ticketImage,
}: BusRouteCardProps) => {
  return (
    <View style={styles.card}>
      {ticketImage ? (
        <Image
          source={{ uri: ticketImage }}
          resizeMode="contain"
          style={styles.ticketImage}
        />
      ) : null}
      <View style={styles.routeRow}>
        <Text style={styles.city}>{from}</Text>
        <View style={styles.swapCircle}>
          <View style={styles.swapIconRotate}>
            <ArrowDownUp size={20} color="#FFFFFF" />
          </View>
        </View>
        <Text style={styles.city}>{to}</Text>
      </View>
      <View style={styles.datePill}>
        <Text style={styles.dateText}>{dateLabel}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: Colors.busBlue,
    borderRadius: 16,
    paddingBottom: 16,
    paddingHorizontal: 16,
    paddingTop: 18,
  },
  city: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
  datePill: {
    borderColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  dateText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  routeRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  swapCircle: {
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    marginHorizontal: 16,
    opacity: 1,
    width: 50,
  },
  swapIconRotate: {
    transform: [{ rotate: '90deg' }],
  },
  ticketImage: {
    height: 90,
    marginBottom: 8,
    width: 110,
  },
});

export default BusRouteCard;
