import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BatteryCharging, LogOut, MapPin, Ticket } from 'lucide-react-native';

import { Colors } from '../theme/colors';

type TripVariant = 'upcoming' | 'booking';

type BusTripCardProps = {
  variant?: TripVariant;
  title: string;
  from: string;
  to: string;
  departTime: string;
  arriveTime?: string;
  date?: string;
  price?: string;
  duration?: string;
  seatsLeft?: string;
  seatsLeftColor?: string;
  index?: number;
  onPress?: () => void;
};

const BusTripCard = ({
  variant = 'booking',
  title,
  from,
  to,
  departTime,
  arriveTime,
  date,
  price,
  duration,
  seatsLeft,
  seatsLeftColor = '#43A047',
  index,
  onPress,
}: BusTripCardProps) => {
  const isPressable = typeof onPress === 'function';

  const cardContent = variant === 'upcoming' ? (
    <View style={styles.upcomingCard}>
      <View style={styles.indexStrip}>
        <Text style={styles.indexText}>{index}</Text>
      </View>
      <View style={styles.upcomingContent}>
        <Text style={styles.upcomingTitle}>{title}</Text>
        <View style={styles.upcomingRow}>
          <Text style={styles.upcomingLabel}>From:</Text>
          <Text style={styles.upcomingValue}>{from}</Text>
        </View>
        <View style={styles.upcomingRow}>
          <Text style={styles.upcomingLabel}>To:</Text>
          <Text style={styles.upcomingValue}>{to}</Text>
        </View>
      </View>
      <View style={styles.timePanel}>
        <Text style={styles.timePanelLabel}>Departure Time</Text>
        <Text style={styles.timePanelTime}>{departTime}</Text>
        <Text style={styles.timePanelDate}>{date}</Text>
      </View>
    </View>
  ) : (
    <View style={styles.bookingCard}>
      <View>
        <Text style={styles.bookingTitle}>{title}</Text>
        <Text style={styles.bookingSubtitle}>A/C Sleeper (2+2)</Text>
        <View style={styles.timeRow}>
          <Text style={styles.timeText}>{departTime}</Text>
          <View style={styles.timeDivider} />
          <Text style={styles.timeText}>{arriveTime}</Text>
        </View>
        {seatsLeft ? (
          <Text style={[styles.seatsLeft, { color: seatsLeftColor }]}>
            {seatsLeft}
          </Text>
        ) : null}
      </View>
      <View style={styles.bookingRight}>
        <Text style={styles.priceText}>{price}</Text>
        <Text style={styles.durationText}>{duration}</Text>
        <View style={styles.iconRow}>
          <View style={styles.iconSpacing}>
            <MapPin size={14} color="#000000" />
          </View>
          <View style={styles.iconSpacing}>
            <Ticket size={14} color="#000000" />
          </View>
          <View style={styles.iconSpacing}>
            <BatteryCharging size={14} color="#000000" />
          </View>
          <View>
            <LogOut size={14} color="#000000" />
          </View>
        </View>
      </View>
    </View>
  );

  if (isPressable) {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.wrapper}>
        {cardContent}
      </TouchableOpacity>
    );
  }

  return <View style={styles.wrapper}>{cardContent}</View>;
};

const styles = StyleSheet.create({
  bookingCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
  },
  bookingRight: {
    alignItems: 'flex-end',
  },
  bookingSubtitle: {
    color: '#616161',
    fontSize: 14,
    fontWeight: '300',
    marginTop: 4,
  },
  bookingTitle: {
    color: '#585656',
    fontSize: 18,
    fontWeight: '500',
  },
  durationText: {
    color: '#000000',
    fontSize: 14,
    marginTop: 6,
  },
  iconRow: {
    flexDirection: 'row',
    marginTop: 6,
  },
  iconSpacing: {
    marginRight: 6,
  },
  indexStrip: {
    alignItems: 'center',
    backgroundColor: Colors.busBlue,
    borderBottomLeftRadius: 28,
    borderTopLeftRadius: 28,
    justifyContent: 'center',
    paddingHorizontal: 12,
    width: 42,
  },
  indexText: {
    color: '#2D2D2D',
    fontSize: 30,
    fontWeight: '700',
  },
  priceText: {
    color: '#000000',
    fontSize: 22,
    fontWeight: '700',
  },
  seatsLeft: {
    fontSize: 14,
    fontWeight: '300',
    marginTop: 6,
  },
  timeDivider: {
    backgroundColor: '#000000',
    height: 2,
    marginHorizontal: 8,
    width: 12,
  },
  timePanel: {
    alignItems: 'center',
    backgroundColor: '#0E0E0E',
    borderBottomRightRadius: 28,
    borderTopRightRadius: 28,
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
    width: 120,
  },
  timePanelDate: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
    marginTop: 2,
  },
  timePanelLabel: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
    textAlign: 'center',
  },
  timePanelTime: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 6,
  },
  timeRow: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 8,
  },
  timeText: {
    color: '#000000',
    fontSize: 12,
  },
  upcomingCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.16,
    shadowRadius: 14,
    elevation: 4,
  },
  upcomingContent: {
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  upcomingLabel: {
    color: '#B1B1B1',
    fontSize: 14,
    fontWeight: '700',
    marginRight: 6,
  },
  upcomingRow: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 4,
  },
  upcomingTitle: {
    color: '#565656',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  upcomingValue: {
    color: '#000000',
    fontSize: 14,
  },
  wrapper: {
    marginBottom: 16,
  },
});

export default BusTripCard;
