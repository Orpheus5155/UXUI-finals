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
import { ChevronDown, ChevronLeft, Home, Ticket } from 'lucide-react-native';

import { Colors } from '../../theme/colors';
import BusRouteCard from '../../components/BusRouteCard';
import BusSeatLegend from '../../components/BusSeatLegend';
import BusSeatMap from '../../components/BusSeatMap';
import BusTopBar from '../../components/BusTopBar';
import BusTripCard from '../../components/BusTripCard';

const SWAP_ICON = 'https://www.figma.com/api/mcp/asset/b3480980-edf2-49fb-b125-84361874447a';

const BusBoardingDropDetailsScreen = () => {
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
      </ScrollView>

      <View style={styles.bottomSheet}>
        <TouchableOpacity style={styles.sheetInput} activeOpacity={0.8}>
          <Text style={styles.sheetInputText}>Select Boarding Point</Text>
          <ChevronDown size={18} color={Colors.busGray} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sheetInput} activeOpacity={0.8}>
          <Text style={styles.sheetInputText}>Select Drop Point</Text>
          <ChevronDown size={18} color={Colors.busGray} />
        </TouchableOpacity>

        <View style={styles.sheetFooter}>
          <View>
            <Text style={styles.footerLabel}>Selected Seats</Text>
            <Text style={styles.footerValue}>C5, D5</Text>
          </View>
          <View style={styles.footerRight}>
            <Text style={styles.footerLabel}>Total Fare</Text>
            <Text style={styles.footerValue}>$16.72</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.proceedButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('BusGuestDetails' as never)}
        >
          <Text style={styles.proceedButtonText}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    backgroundColor: Colors.busDark,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    bottom: 0,
    left: 0,
    padding: 20,
    position: 'absolute',
    right: 0,
  },
  container: {
    backgroundColor: Colors.busBg,
    flex: 1,
  },
  content: {
    paddingBottom: 320,
  },
  footerLabel: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  footerRight: {
    alignItems: 'flex-end',
  },
  footerValue: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 4,
  },
  listWrapper: {
    marginHorizontal: 20,
    marginTop: 12,
  },
  proceedButton: {
    backgroundColor: Colors.busBlue,
    borderRadius: 16,
    marginTop: 16,
    paddingVertical: 12,
  },
  proceedButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
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
  sheetFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  sheetInput: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sheetInputText: {
    color: '#585656',
    fontSize: 15,
  },
});

export default BusBoardingDropDetailsScreen;
