import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Utensils, Home, Bike, ShoppingBag, Receipt, Car, Ticket, MoreHorizontal } from 'lucide-react-native';
import { Colors } from '../../theme/colors';
import FinanceHeader from '../../components/FinanceHeader';
import FinanceBottomNav from '../../components/FinanceBottomNav';

const NotificationsScreen = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <FinanceHeader title="Notification" showBack={true} />
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <NotificationItem 
          title="Food" 
          message="You just paid your food bill" 
          time="Just now" 
          icon={<Utensils size={20} color={Colors.darkGray} />} 
        />
        <NotificationItem 
          title="Reminder" 
          message="Reminder to pay your rent" 
          time="23 sec ago" 
          icon={<Home size={20} color={Colors.darkGray} />} 
        />
        <NotificationItem 
          title="Goal Achived" 
          message="You just achived your goal for new bike" 
          time="2 min ago" 
          icon={<Bike size={20} color={Colors.darkGray} />} 
        />
        <NotificationItem 
          title="Reminder" 
          message="You just set a new reminder shopping" 
          time="10 min ago" 
          icon={<ShoppingBag size={20} color={Colors.darkGray} />} 
        />
        <NotificationItem 
          title="Food" 
          message="You just paid your food bill" 
          time="45 min ago" 
          icon={<Utensils size={20} color={Colors.darkGray} />} 
        />
        <NotificationItem 
          title="Bill" 
          message="You just got a reminder for your bill pay" 
          time="1 hour ago" 
          icon={<Receipt size={20} color={Colors.darkGray} />} 
        />
        <NotificationItem 
          title="Uber" 
          message="You just paid your uber bill" 
          time="2 hour ago" 
          icon={<Car size={20} color={Colors.darkGray} />} 
        />
        <NotificationItem 
          title="Ticket" 
          message="You just paid for the movie ticket" 
          time="5 hour ago" 
          icon={<Ticket size={20} color={Colors.darkGray} />} 
        />
      </ScrollView>

      <FinanceBottomNav />
    </SafeAreaView>
  );
};

const NotificationItem = ({ title, message, time, icon }: any) => (
  <View style={styles.notificationItem}>
    <View style={styles.iconContainer}>{icon}</View>
    <View style={styles.contentContainer}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <View style={styles.footerRow}>
        <Text style={styles.message} numberOfLines={1}>{message}</Text>
        <TouchableOpacity>
          <MoreHorizontal size={18} color={Colors.gray} />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollContent: {
    paddingBottom: 100,
    paddingHorizontal: 24,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F9FAFB',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#F4F5F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    marginLeft: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: {
    fontSize: 15,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    color: Colors.black,
  },
  time: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: Colors.gray,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  message: {
    fontSize: 13,
    fontFamily: 'Inter-Medium',
    color: Colors.darkGray,
    flex: 1,
    marginRight: 8,
  },
});

export default NotificationsScreen;
