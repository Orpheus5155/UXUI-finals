import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, ImageBackground, Image, Dimensions, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { 
  ChevronLeft, Bell, Wallet, History, BarChart3, Star, 
  Bike, Car, Ticket, Plane, Train, Clapperboard, Utensils, ShoppingBag,
  CreditCard, ChevronRight, PackageCheck, Truck, Headphones, ShoppingCart, LogOut,
  UtensilsCrossed, Star as StarIcon, Tag, Calculator, Receipt, Bitcoin,
  MessageCircle, PhoneCall, Rss, Hotel, Gamepad2, Film, Video, Sparkles
} from 'lucide-react-native';
import { Colors } from '../../theme/colors';
import { useAuth } from '../../context/AuthContext';

const ALL_UTILITIES = [
  { icon: 'bike', label: 'SMart Bike' },
  { icon: 'car', label: 'SMart Car' },
  { icon: 'ticket', label: 'Bus ticket' },
  { icon: 'plane', label: 'Airplane ticket' },
  { icon: 'train', label: 'Train ticket' },
  { icon: 'cinema', label: 'Cinema ticket' },
  { icon: 'restaurant', label: 'Restaurant' },
  { icon: 'market', label: 'SMart Market' },
];

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { logout, isAuthenticated } = useAuth();
  const [showAllUtilities, setShowAllUtilities] = useState(false);


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Blue Header Section */}
        <View style={styles.headerBackground}>
           <Image 
            source={require('../../../assets/images/appicon.png')} 
            style={styles.backgroundImage}
            resizeMode="cover"
          />
           <View style={styles.headerTop}>
              <View style={styles.headerLeft}>
                <TouchableOpacity 
                  style={styles.avatarContainer}
                  onPress={() => {
                    if (isAuthenticated) {
                      navigation.navigate('ProfileDetail' as never);
                    } else {
                      navigation.navigate('Login' as never);
                    }
                  }}
                >

                   <Image 
                     source={{uri: 'https://cdn-icons-png.flaticon.com/512/6840/6840478.png'}} 
                     style={styles.avatarImage} 
                   />
                </TouchableOpacity>
              </View>

              <View style={styles.headerRight}>
                 <TouchableOpacity style={styles.bellButton}>
                    <Bell size={24} color={Colors.white} />
                 </TouchableOpacity>
              </View>
           </View>

         </View>

         {/* Floating Action Card (Moved outside to prevent clipping) */}
         <View style={styles.floatingCard}>
            <ActionItem 
              icon={<Wallet size={20} color={Colors.white} />} 
              label="SMart Wallet" 
              onPress={() => navigation.navigate('SmartWallet' as never)}
            />
            <ActionItem icon={<History size={20} color={Colors.white} />} label="History" />
            <ActionItem icon={<BarChart3 size={20} color={Colors.white} />} label="Statistics" />
            <ActionItem icon={<Star size={20} color={Colors.white} />} label="Evaluate" />
         </View>


        <View style={styles.mainContent}>

          {/* Utilities Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Utilities</Text>
              <TouchableOpacity onPress={() => navigation.navigate('AllUtilities' as never)}>
                <Text style={styles.seeMore}>See more</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.grid}>
              {/* Always visible - first 8 */}
              <GridItem icon={<Bike size={24} color={Colors.white} />} label="SMart Bike" />
              <GridItem icon={<Car size={24} color={Colors.white} />} label="SMart Car" />
              <GridItem icon={<Ticket size={24} color={Colors.white} />} label="Bus ticket" />
              <GridItem icon={<Plane size={24} color={Colors.white} />} label="Airplane ticket" />
              <GridItem icon={<Train size={24} color={Colors.white} />} label="Train ticket" />
              <GridItem icon={<Clapperboard size={24} color={Colors.white} />} label="Cinema ticket" onPress={() => navigation.navigate('Cinema' as never)} />
              <GridItem icon={<Utensils size={24} color={Colors.white} />} label="Restaurant" onPress={() => navigation.navigate('FastFood' as never)} />
              <GridItem icon={<ShoppingBag size={24} color={Colors.white} />} label="SMart Market" />
              {/* Expanded - remaining 16 */}
              {showAllUtilities && (
                <>
                  <GridItem icon={<UtensilsCrossed size={24} color={Colors.white} />} label="Fast food" onPress={() => navigation.navigate('FastFood' as never)} />
                  <GridItem icon={<StarIcon size={24} color={Colors.white} />} label="App review" />
                  <GridItem icon={<Tag size={24} color={Colors.white} />} label="Flash sale" />
                  <GridItem icon={<Ticket size={24} color={Colors.white} />} label="App Voucher" />
                  <GridItem icon={<Calculator size={24} color={Colors.white} />} label="Calculator" />
                  <GridItem 
                    icon={<Receipt size={24} color={Colors.white} />} 
                    label="Bill Manage" 
                    onPress={() => {
                      Alert.alert('Navigate', 'Going to Bill Overview');
                      navigation.navigate('Overview' as never);
                    }}
                  />
                  <GridItem icon={<Bitcoin size={24} color={Colors.white} />} label="Crypto" />
                  <GridItem 
                    icon={<MessageCircle size={24} color={Colors.white} />} 
                    label="Chatting" 
                    onPress={() => navigation.navigate('MessageMain' as never)}
                  />
                  <GridItem icon={<PhoneCall size={24} color={Colors.white} />} label="Video call" />
                  <GridItem icon={<Rss size={24} color={Colors.white} />} label="Social feed" />
                  <GridItem icon={<Hotel size={24} color={Colors.white} />} label="Hotel booking" />
                  <GridItem icon={<Gamepad2 size={24} color={Colors.white} />} label="Game play" />
                  <GridItem icon={<Film size={24} color={Colors.white} />} label="Film HOT" />
                  <GridItem 
                    icon={<Video size={24} color={Colors.white} />} 
                    label="Short video" 
                    onPress={() => navigation.navigate('MainVideoFeed' as never)}
                  />
                  <GridItem icon={<Sparkles size={24} color={Colors.white} />} label="Your AI" />
                </>
              )}
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
              <OrderItem icon={<CreditCard size={24} color={Colors.white} />} label="Confirmation" />
              <OrderItem icon={<PackageCheck size={24} color={Colors.white} />} label="Pickup" />
              <OrderItem icon={<Truck size={24} color={Colors.white} />} label="Delivering" />
              <OrderItem icon={<Headphones size={24} color={Colors.white} />} label="Support" />

            </View>
          </View>

          {/* Recommendation */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recommendation</Text>
            <View style={styles.recommendationRow}>
               <ProductCard title="Áo phông vải trơn" price="300$" sold="300K" />
               <ProductCard title="Áo phông vải trơn" price="300$" sold="300K" />
            </View>
          </View>

          {/* Logout Button */}
          {isAuthenticated && (
            <TouchableOpacity 
              style={styles.logoutButton} 
              onPress={() => {
                logout();
                navigation.navigate('Login' as never);
              }}
            >
              <LogOut size={20} color="#FF3B30" />
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          )}
          <View style={{ height: 40 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const ActionItem = ({ icon, label, onPress }: any) => (
  <TouchableOpacity style={styles.actionItem} onPress={onPress}>
    <View style={styles.actionIconContainer}>{icon}</View>
    <Text style={styles.actionLabel}>{label}</Text>
  </TouchableOpacity>
);


const GridItem = ({ icon, label, onPress }: any) => (
  <TouchableOpacity style={styles.gridItem} onPress={onPress}>
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

const ProductCard = ({ title, price, sold }: any) => (
  <View style={styles.productCard}>
    <View style={styles.productImagePlaceholder}>
       <Image 
        source={require('../../../assets/images/shirt.png')} 
        style={styles.productImage}
        resizeMode="contain"
       />
    </View>
    <Text style={styles.productTitle}>{title}</Text>
    <View style={styles.productFooter}>
       <Text style={styles.productPrice}>{price}</Text>
       <Text style={styles.productSold}>Sold {sold}</Text>
    </View>

    <TouchableOpacity style={styles.cartBtn}>
       <ShoppingCart size={14} color={Colors.primary} />
    </TouchableOpacity>
  </View>
);

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2D62DF' },
  headerBackground: {
    backgroundColor: '#2D62DF',
    height: 280,
    paddingTop: 20,
    paddingHorizontal: 20,
    zIndex: 1,
    overflow: 'hidden',
  },
  backgroundImage: {
    position: 'absolute',
    width: width * 1.2,
    height: width * 1.2,
    top: -width * 0.25,
    left: -width * 0.1,
    opacity: 0.16,
  },
  headerTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: 20 },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  headerRight: { flexDirection: 'row', alignItems: 'flex-start' },
  avatarContainer: { 
    width: 80, height: 80, borderRadius: 40, backgroundColor: 'white', 
    padding: 3, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.1, shadowRadius: 5, elevation: 5, justifyContent: 'center', alignItems: 'center' 
  },
  avatarImage: { width: '90%', height: '90%', borderRadius: 36 },
  bellButton: { padding: 8, marginLeft: 10 },
  headerContent: { alignItems: 'flex-end', marginTop: 5 },
  brandText: { fontSize: 32, fontWeight: '900', color: 'rgba(255,255,255,0.2)', letterSpacing: 1 },
  brandSubText: { fontSize: 16, fontWeight: 'bold', color: 'rgba(255,255,255,0.2)', marginTop: -5, letterSpacing: 2 },
  brandTagline: { fontSize: 8, color: 'rgba(255,255,255,0.3)', marginTop: 5 },


  floatingCard: {
    marginTop: -45,
    marginHorizontal: 20,
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
    zIndex: 10,
  },
  actionItem: { alignItems: 'center', width: '23%' },
  actionIconContainer: { width: 44, height: 44, backgroundColor: '#2D62DF', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 4 },
  actionLabel: { fontSize: 9, fontWeight: '500', textAlign: 'center' },

  mainContent: { 
    backgroundColor: 'white', 
    borderTopLeftRadius: 40, 
    borderTopRightRadius: 40, 
    marginTop: -40,
    paddingTop: 20, 
    paddingHorizontal: 20,
    minHeight: '100%',
  },
  section: { marginTop: 30, marginBottom: 10 },
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  financialIconContainer: { marginRight: 8 },
  financialText: { flex: 1 },
  financialTitle: { fontSize: 10, color: 'white', fontWeight: 'bold' },
  financialSubtitle: { fontSize: 6, color: '#FF3B30', fontWeight: '500' },
  orderRow: { flexDirection: 'row', justifyContent: 'space-between' },
  orderItem: { alignItems: 'center', width: '23%' },
  orderIconContainer: { width: 48, height: 48, backgroundColor: '#2D62DF', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  orderLabel: { fontSize: 10, fontWeight: '500' },

  recommendationRow: { flexDirection: 'row', justifyContent: 'space-between' },
  productCard: { width: '48%', backgroundColor: 'white', borderRadius: 20, padding: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 5, elevation: 2 },
  productImagePlaceholder: { height: 120, backgroundColor: '#F8F8F8', borderRadius: 15, marginBottom: 8, justifyContent: 'center', alignItems: 'center' },
  productImage: { width: '100%', height: '100%' },
  productTitle: { fontSize: 11, fontWeight: '500' },

  productFooter: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, alignItems: 'center' },
  productPrice: { fontSize: 12, fontWeight: 'bold', color: '#A9E5D9' },
  productSold: { fontSize: 8, color: Colors.textSecondary },
  cartBtn: { position: 'absolute', top: 15, right: 15, backgroundColor: 'white', borderRadius: 10, padding: 4, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 3, elevation: 2 },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFE5E5',
    padding: 15,
    borderRadius: 15,
    marginTop: 10,
  },
  logoutText: {
    color: '#FF3B30',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default ProfileScreen;

