import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '../theme/colors';

type LegendItem = {
  label: string;
  color: string;
};

const legend: LegendItem[] = [
  { label: 'Booked', color: '#000000' },
  { label: 'Your Seat', color: Colors.busBlue },
  { label: 'Available', color: '#DAD9DB' },
];

const BusSeatLegend = () => {
  return (
    <View style={styles.container}>
      {legend.map((item) => (
        <View key={item.label} style={styles.legendRow}>
          <View style={[styles.legendSwatch, { backgroundColor: item.color }]} />
          <Text style={styles.legendText}>{item.label}</Text>
        </View>
      ))}
      <View style={[styles.levelButton, styles.levelButtonActive]}>
        <Text style={styles.levelButtonTextActive}>LOWER</Text>
      </View>
      <View style={styles.levelButton}>
        <Text style={styles.levelButtonText}>UPPER</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    width: 140,
  },
  legendRow: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  legendSwatch: {
    borderRadius: 4,
    height: 12,
    marginRight: 8,
    width: 12,
  },
  legendText: {
    color: '#A0A0A0',
    fontSize: 13,
    fontWeight: '500',
  },
  levelButton: {
    alignItems: 'center',
    borderColor: '#A0A0A0',
    borderRadius: 6,
    borderWidth: 1,
    marginTop: 10,
    paddingVertical: 6,
  },
  levelButtonActive: {
    borderColor: Colors.busBlue,
  },
  levelButtonText: {
    color: '#A0A0A0',
    fontSize: 13,
    fontWeight: '500',
  },
  levelButtonTextActive: {
    color: Colors.busBlue,
    fontSize: 13,
    fontWeight: '500',
  },
});

export default BusSeatLegend;
