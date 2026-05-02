import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { 
  Bell, Wallet, History, BarChart3, Star, 
  Bike, Car, Ticket, Plane, Train, Clapperboard, Utensils, ShoppingBag,
  Pizza, MessageSquare, Zap, Calculator, FileText, Bitcoin,
  MessageCircle, Video, Grid, Hotel, Gamepad, Film, Sparkles,
  CreditCard, ChevronRight, PackageCheck, Truck, Headphones, ShoppingCart
} from 'lucide-react-native';
import { Colors } from '../../theme/colors';

const AllUtilitiesScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Section (Same as Profile) */}
        <View style={styles.headerBackground}>
           <Image 
            source={require('../../../assets/images/appicon.png')} 
            style={styles.backgroundImage}
            resizeMode="cover"
          />
           <View style={styles.headerTop}>

              <View style={styles.avatarContainer}>
                 <View style={styles.avatarPlaceholder} />
              </View>
              <TouchableOpacity style={styles.bellButton}>
                 <Bell size={24} color={Colors.white} />
              </TouchableOpacity>
           </View>
           
           <View style={styles.headerContent}>
              <Text style={styles.brandText}>SMART</Text>
              <Text style={styles.brandSubText}>SUPERAPP</Text>
              <Text style={styles.brandTagline}>• Multifaceted Services for Life •</Text>
           </View>

           <View style={styles.floatingCard}>
              <ActionItem icon={<Wallet size={24} color={Colors.primary} />} label="SMart Wallet" />
              <ActionItem icon={<History size={24} color={Colors.primary} />} label="History" />
              <ActionItem icon={<BarChart3 size={24} color={Colors.primary} />} label="Statistics" />
              <ActionItem icon={<Star size={24} color={Colors.primary} />} label="Evaluate" />
           </View>
        </View>

        <View style={styles.mainContent}>
          {/* Expanded Utilities Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Utilities</Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.seeMore}>See less</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.grid}>
              <GridItem icon={<Bike size={24} color={Colors.white} />} label="SMart Bike" />
              <GridItem icon={<Car size={24} color={Colors.white} />} label="SMart Car" />
              <GridItem icon={<Ticket size={24} color={Colors.white} />} label="Bus ticket" />
              <GridItem icon={<Plane size={24} color={Colors.white} />} label="Airplane ticket" />
              
              <GridItem icon={<Train size={24} color={Colors.white} />} label="Train ticket" />
              <GridItem icon={<Clapperboard size={24} color={Colors.white} />} label="Cinema ticket" />
              <GridItem icon={<Utensils size={24} color={Colors.white} />} label="Restaurant" />
              <GridItem icon={<ShoppingBag size={24} color={Colors.white} />} label="SMart Market" />

              <GridItem icon={<Pizza size={24} color={Colors.white} />} label="Fast food" />
              <GridItem icon={<MessageSquare size={24} color={Colors.white} />} label="App review" />
              <GridItem icon={<Zap size={24} color={Colors.white} />} label="Flash sale" />
              <GridItem icon={<Ticket size={24} color={Colors.white} />} label="App Voucher" />

              <GridItem icon={<Calculator size={24} color={Colors.white} />} label="Calculator" />
              <GridItem icon={<FileText size={24} color={Colors.white} />} label="Bill Manage" />
              <GridItem icon={<Bitcoin size={24} color={Colors.white} />} label="Crypto" />
              <GridItem icon={<MessageCircle size={24} color={Colors.white} />} label="Chatting" />

              <GridItem icon={<Video size={24} color={Colors.white} />} label="Video call" />
              <GridItem icon={<Grid size={24} color={Colors.white} />} label="Social feed" />
              <GridItem icon={<Hotel size={24} color={Colors.white} />} label="Hotel booking" />
              <GridItem icon={<Gamepad size={24} color={Colors.white} />} label="Game play" />

              <GridItem icon={<Film size={24} color={Colors.white} />} label="Film HOT" />
              <GridItem icon={<Video size={24} color={Colors.white} />} label="Short video" />
              <GridItem icon={<Sparkles size={24} color={Colors.white} />} label="Your AI" />
              <GridItem icon={<ShoppingCart size={24} color={Colors.white} />} label="Shopping" />
            </View>
          </View>

          {/* Financial Services */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Financial services</Text>
            <View style={styles.financialRow}>
              <FinancialCard title="Borrow money" subtitle="100.000$ will come to your wallet" />
              <FinancialCard title="Borrow money" subtitle="100.000$ will come to your wallet" />
            </View>
          </View>

          {/* My Order Utilities */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>My order utilities</Text>
            <View style={styles.orderRow}>
              <OrderItem icon={<CreditCard size={24} color={Colors.primary} />} label="Confirmation" />
              <OrderItem icon={<PackageCheck size={24} color={Colors.primary} />} label="Pickup" />
              <OrderItem icon={<Truck size={24} color={Colors.primary} />} label="Delivering" />
              <OrderItem icon={<Headphones size={24} color={Colors.primary} />} label="Support" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const ActionItem = ({ icon, label }: any) => (
  <TouchableOpacity style={styles.actionItem}>
    <View style={styles.actionIconContainer}>{icon}</View>
    <Text style={styles.actionLabel}>{label}</Text>
  </TouchableOpacity>
);

const GridItem = ({ icon, label }: any) => (
  <TouchableOpacity style={styles.gridItem}>
    <View style={styles.gridIconContainer}>{icon}</View>
    <Text style={styles.gridLabel}>{label}</Text>
  </TouchableOpacity>
);

const OrderItem = ({ icon, label }: any) => (
  <TouchableOpacity style={styles.orderItem}>
    <View style={styles.orderIconContainer}>{icon}</View>
    <Text style={styles.orderLabel}>{label}</Text>
  </TouchableOpacity>
);

const FinancialCard = ({ title, subtitle }: any) => (
  <TouchableOpacity style={styles.financialCard}>
    <View style={styles.financialIconContainer}>
       <CreditCard size={16} color={Colors.white} />
    </View>
    <View style={styles.financialText}>
      <Text style={styles.financialTitle}>{title}</Text>
      <Text style={styles.financialSubtitle}>{subtitle}</Text>
    </View>
    <ChevronRight size={16} color={Colors.white} />
  </TouchableOpacity>
);

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  headerBackground: {
    backgroundColor: '#2D62DF',
    height: 280,
    paddingTop: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    zIndex: 1,
    overflow: 'hidden',
  },
  backgroundImage: {
    position: 'absolute',
    width: width * 1.2,
    height: width * 1.2,
    top: -width * 0.1,
    left: -width * 0.1,
    opacity: 0.16,
  },
  headerTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  avatarContainer: { width: 70, height: 70, borderRadius: 35, backgroundColor: 'white', padding: 3 },
  avatarPlaceholder: { width: '100%', height: '100%', borderRadius: 35, backgroundColor: '#DDD' },
  bellButton: { padding: 8 },
  headerContent: { alignItems: 'center', marginTop: 10 },
  brandText: { fontSize: 32, fontWeight: '900', color: 'rgba(255,255,255,0.2)', letterSpacing: 2 },
  brandSubText: { fontSize: 18, fontWeight: 'bold', color: 'rgba(255,255,255,0.2)', marginTop: -5 },
  brandTagline: { fontSize: 10, color: 'rgba(255,255,255,0.3)', marginTop: 5 },
  floatingCard: {
    position: 'absolute',
    bottom: -40,
    left: 20,
    right: 20,
    height: 90,
    backgroundColor: 'white',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  actionItem: { alignItems: 'center' },
  actionIconContainer: { width: 42, height: 42, backgroundColor: Colors.surface, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 4 },
  actionLabel: { fontSize: 10, fontWeight: '500' },
  mainContent: { paddingTop: 60, paddingHorizontal: 20 },
  section: { marginBottom: 30 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  seeMore: { fontSize: 14, color: '#6F93E9' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  gridItem: { width: '23%', alignItems: 'center', marginBottom: 20 },
  gridIconContainer: { width: 48, height: 48, backgroundColor: '#2D62DF', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  gridLabel: { fontSize: 10, textAlign: 'center', fontWeight: '500' },
  financialRow: { flexDirection: 'row', justifyContent: 'space-between' },
  financialCard: { 
    width: '48%', 
    backgroundColor: '#89B4FF', 
    borderRadius: 12, 
    padding: 10, 
    flexDirection: 'row', 
    alignItems: 'center',
  },
  financialIconContainer: { marginRight: 8 },
  financialText: { flex: 1 },
  financialTitle: { fontSize: 10, color: 'white', fontWeight: 'bold' },
  financialSubtitle: { fontSize: 6, color: '#FF3B30', fontWeight: '500' },
  orderRow: { flexDirection: 'row', justifyContent: 'space-between' },
  orderItem: { alignItems: 'center', width: '23%' },
  orderIconContainer: { width: 44, height: 44, backgroundColor: Colors.blueLight, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 6 },
  orderLabel: { fontSize: 10, fontWeight: '500' },
});

export default AllUtilitiesScreen;
