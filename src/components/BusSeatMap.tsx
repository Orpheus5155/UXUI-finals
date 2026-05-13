import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

import { Colors } from '../theme/colors';

type SeatStatus = 'available' | 'booked' | 'selected' | 'reserved';

type BusSeatMapProps = {
  style?: ViewStyle;
  rows?: SeatStatus[][];
};

const defaultRows: SeatStatus[][] = [
  ['booked', 'available', 'available', 'available'],
  ['available', 'available', 'available', 'reserved'],
  ['available', 'available', 'booked', 'booked'],
  ['booked', 'booked', 'available', 'available'],
  ['available', 'available', 'selected', 'selected'],
  ['booked', 'booked', 'available', 'available'],
];

const seatColors: Record<SeatStatus, string> = {
  available: '#DAD9DB',
  booked: '#000000',
  selected: Colors.busBlue,
  reserved: '#FFD800',
};

const BusSeatMap = ({ style, rows = defaultRows }: BusSeatMapProps) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.labelRow}>
        <Text style={styles.labelText}>A</Text>
        <Text style={styles.labelText}>B</Text>
        <View style={styles.labelSpacer} />
        <Text style={styles.labelText}>C</Text>
        <Text style={styles.labelText}>D</Text>
      </View>
      {rows.map((row, rowIndex) => (
        <View key={`row-${rowIndex}`} style={styles.row}>
          <View style={styles.seatGroup}>
            <View style={[styles.seat, { backgroundColor: seatColors[row[0]] }]} />
            <View style={[styles.seat, styles.seatSpacing, { backgroundColor: seatColors[row[1]] }]} />
          </View>
          <View style={styles.aisle} />
          <View style={styles.seatGroup}>
            <View style={[styles.seat, { backgroundColor: seatColors[row[2]] }]} />
            <View style={[styles.seat, styles.seatSpacing, { backgroundColor: seatColors[row[3]] }]} />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  aisle: {
    width: 16,
  },
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    width: 190,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 4,
  },
  labelSpacer: {
    width: 16,
  },
  labelText: {
    color: '#A0A0A0',
    fontSize: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  seat: {
    borderRadius: 5,
    height: 22,
    width: 20,
  },
  seatGroup: {
    flexDirection: 'row',
  },
  seatSpacing: {
    marginLeft: 10,
  },
});

export default BusSeatMap;
