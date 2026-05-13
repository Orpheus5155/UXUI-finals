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
import { ChevronLeft, Home, Ticket } from 'lucide-react-native';

import { Colors } from '../../theme/colors';
import BusRouteCard from '../../components/BusRouteCard';
import BusSeatLegend from '../../components/BusSeatLegend';
import BusSeatMap from '../../components/BusSeatMap';
import BusTopBar from '../../components/BusTopBar';
import BusTripCard from '../../components/BusTripCard';

const SWAP_ICON = 'https://www.figma.com/api/mcp/asset/f05396db-e4e6-48df-8fe8-4f64888a79fb';

const BusSeatSelectionScreen = () => {
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

        <View style={styles.routeCardWrapper}>
          <BusRouteCard
            from="Da Nang"
            to="Hue"
            dateLabel="15th - May - 2026 | Friday"
            swapIcon={SWAP_ICON}
          />
        </View>

        <View style={styles.listWrapper}>
          <BusTripCard
            variant="booking"
            title="Minh Chau Galaxy"
            from="Da Nang"
            to="Hue"
            departTime="9:00 AM"
            arriveTime="12:00 AM"
            price="$8.36"
            duration="3h"
            seatsLeft="15 Seats left"
            seatsLeftColor="#43A047"
          />
        </View>

        <View style={styles.seatRow}>
          <BusSeatMap />
          <BusSeatLegend />
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('BusBoardingDrop' as never)}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
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
    paddingBottom: 32,
  },
  continueButton: {
    backgroundColor: Colors.busBlue,
    borderRadius: 16,
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 12,
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  listWrapper: {
    marginHorizontal: 20,
    marginTop: 12,
  },
  routeCardWrapper: {
    marginHorizontal: 20,
    marginTop: 12,
  },
  seatRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 16,
  },
});

export default BusSeatSelectionScreen;
