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
import BusTopBar from '../../components/BusTopBar';
import BusTripCard from '../../components/BusTripCard';

const SWAP_ICON = 'https://www.figma.com/api/mcp/asset/249176e8-1fd8-429e-a3ae-6aa6248ea0fb';
const TICKET_IMAGE = 'https://www.figma.com/api/mcp/asset/75a51100-31d4-4e41-9058-20032404aac6';

const BUS_OPTIONS = [
  {
    id: '1',
    title: 'Minh Chau Galaxy',
    departTime: '9:00 AM',
    arriveTime: '12:00 AM',
    price: '$8.36',
    duration: '3h',
    seatsLeft: '15 Seats left',
    seatsLeftColor: '#43A047',
  },
  {
    id: '2',
    title: 'HM Happycar',
    departTime: '9:00 AM',
    arriveTime: '11:30 AM',
    price: '$8.74',
    duration: '2h30m',
    seatsLeft: '2 Seats left',
    seatsLeftColor: '#FA0C00',
  },
  {
    id: '3',
    title: 'NK Travels',
    departTime: '9:00 AM',
    arriveTime: '11:45 AM',
    price: '$8.5',
    duration: '2h45m',
    seatsLeft: '7 Seats left',
    seatsLeftColor: '#43A047',
  },
  {
    id: '4',
    title: 'M Travels',
    departTime: '9:00 AM',
    arriveTime: '01:00 PM',
    price: '$8',
    duration: '4h',
    seatsLeft: '14 Seats left',
    seatsLeftColor: '#43A047',
  },
];

const BusBookingPageScreen = () => {
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
            ticketImage={TICKET_IMAGE}
          />
        </View>

        <View style={styles.listWrapper}>
          {BUS_OPTIONS.map((option) => (
            <BusTripCard
              key={option.id}
              variant="booking"
              title={option.title}
              from="Da Nang"
              to="Hue"
              departTime={option.departTime}
              arriveTime={option.arriveTime}
              price={option.price}
              duration={option.duration}
              seatsLeft={option.seatsLeft}
              seatsLeftColor={option.seatsLeftColor}
              onPress={
                option.id === '1'
                  ? () => navigation.navigate('BusSeatSelection' as never)
                  : undefined
              }
            />
          ))}
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('BusSeatSelection' as never)}
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
    marginTop: 8,
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
    marginTop: 16,
  },
  routeCardWrapper: {
    marginHorizontal: 20,
    marginTop: 12,
  },
});

export default BusBookingPageScreen;
