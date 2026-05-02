import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, Bell, Sparkles, Send, Download, BarChart3, History, ScanLine } from 'lucide-react-native';
import { Colors } from '../../theme/colors';

const { width } = Dimensions.get('window');

const SmartWalletScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        
        {/* Header Section */}
        <View style={styles.headerContainer}>
          <Image 
            source={require('../../../assets/images/appicon.png')} 
            style={styles.backgroundImage}
            resizeMode="cover"
          />
          
          <View style={styles.headerTop}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
              <ArrowLeft size={28} color={Colors.white} />
            </TouchableOpacity>
            <View style={styles.headerUser}>
              <View style={styles.avatarWrapper}>
                <Image 
                  source={{uri: 'https://cdn-icons-png.flaticon.com/512/6840/6840478.png'}} 
                  style={styles.avatarImage} 
                />
              </View>
              <Text style={styles.greetingText}>Hello, Romina!!</Text>
            </View>
            <TouchableOpacity style={styles.iconButton}>
              <Bell size={24} color={Colors.white} />
            </TouchableOpacity>
          </View>

          <View style={styles.balanceSection}>
            <Text style={styles.balanceLabel}>Available Balance</Text>
            <Text style={styles.balanceAmount}>$2605.22</Text>
            <View style={styles.aiTag}>
              <Sparkles size={14} color={Colors.white} />
              <Text style={styles.aiTagText}>Safe your money with AI ?</Text>
            </View>
          </View>
        </View>

        <View style={styles.floatingCard}>
          <ActionItem 
            icon={<Image source={require('../../../assets/images/sendicon.png')} style={{width: 24, height: 24}} resizeMode="contain" />} 
            label="Send" 
            onPress={() => navigation.navigate('SendMoney' as never)}
          />
          <ActionItem 
            icon={<Image source={require('../../../assets/images/requesticon.png')} style={{width: 24, height: 24}} resizeMode="contain" />} 
            label="Request" 
          />

          <ActionItem 
            icon={<BarChart3 size={20} color={Colors.white} />} 
            label="Statistics" 
            onPress={() => navigation.navigate('SmartWalletStatistics' as never)}
          />
          <ActionItem 

            icon={<History size={20} color={Colors.white} />} 
            label="History" 
            onPress={() => navigation.navigate('SmartWalletHistory' as never)}
          />
        </View>


        {/* AI Recommendations */}
        <View style={styles.mainContent}>
          <View style={styles.sectionHeader}>
            <Sparkles size={18} color="#2D62DF" />
            <Text style={styles.sectionTitle}>AI Recommend for you</Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.productsScroll}>
            {[...Array(5)].map((_, index) => (
              <ProductCard 
                key={index}
                image={require('../../../assets/images/saleitem.png')} 
                title="Lorem ipsum dolor sit amet consectetur" 
                price="$16,00" 
                oldPrice="$20,00" 
                discount="-20%" 
              />
            ))}
          </ScrollView>


          {/* Last Transaction Section */}
          <View style={styles.transactionsSection}>
            <Text style={styles.transactionsTitle}>Last Transaction</Text>

            <TransactionItem onPress={() => navigation.navigate('TransactionDetail' as never)} title="Cash in" subtitle="From MB Bank" date="20 April 2026" amount="+$30.00" isPositive={true} />
            <TransactionItem onPress={() => navigation.navigate('TransactionDetail' as never)} title="Cash in" subtitle="From MB Bank" date="20 April 2026" amount="+$30.00" isPositive={true} />
            <TransactionItem onPress={() => navigation.navigate('TransactionDetail' as never)} title="Cash in" subtitle="From MB Bank" date="20 April 2026" amount="+$30.00" isPositive={true} />
            <TransactionItem onPress={() => navigation.navigate('TransactionDetail' as never)} title="Cash in" subtitle="From MB Bank" date="20 April 2026" amount="+$30.00" isPositive={true} />
          </View>
        </View>

      </ScrollView>

      {/* Floating Scan Button */}
      <View style={styles.scanButtonContainer}>
        <TouchableOpacity style={styles.scanButton}>
          <View style={styles.scanIconWrapper}>
            <ScanLine size={24} color={Colors.white} />
          </View>
          <Text style={styles.scanText}>SCAN NOW</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const ActionItem = ({ icon, label, onPress }: any) => (
  <TouchableOpacity style={styles.actionItem} onPress={onPress}>
    <View style={styles.actionIconContainer}>{icon}</View>
    <Text style={styles.actionLabel}>{label}</Text>
  </TouchableOpacity>
);

const ProductCard = ({ image, title, price, oldPrice, discount }: any) => (
  <View style={styles.productCard}>
    <View style={styles.productImageContainer}>
      <Image source={image} style={styles.productImage} resizeMode="cover" />
      <View style={styles.discountBadge}>
        <Text style={styles.discountText}>{discount}</Text>
      </View>

    </View>
    <View style={styles.productInfo}>
      <Text style={styles.productTitle} numberOfLines={2}>{title}</Text>
      <View style={styles.priceRow}>
        <Text style={styles.priceText}>{price}</Text>
        <Text style={styles.oldPriceText}>{oldPrice}</Text>
      </View>
    </View>
  </View>
);

const TransactionItem = ({ title, subtitle, date, amount, isPositive, onPress }: any) => (
  <TouchableOpacity style={styles.transactionCard} onPress={onPress}>
    <View style={styles.transactionIconContainer}>
      <Download size={14} color="white" />
    </View>
    <View style={styles.transactionInfo}>
      <Text style={styles.transactionTitle}>{title}</Text>
      <Text style={styles.transactionSubtitle}>{subtitle}</Text>
      <Text style={styles.transactionDate}>{date}</Text>
    </View>
    <Text style={[styles.transactionAmount, { color: isPositive ? '#00FF62' : '#FF3B30' }]}>{amount}</Text>
  </TouchableOpacity>
);


const styles = StyleSheet.create({

  container: { flex: 1, backgroundColor: '#F8F9FA' },
  headerContainer: {
    backgroundColor: '#2D62DF',
    height: 320,
    paddingTop: 20,
    overflow: 'hidden',
  },
  backgroundImage: {
    position: 'absolute',
    width: width * 1.5,
    height: width * 1.5,
    top: -width * 0.2,
    left: -width * 0.2,
    opacity: 0.1,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconButton: { padding: 5 },
  headerUser: { flexDirection: 'row', alignItems: 'center', flex: 1, marginLeft: 15 },
  avatarWrapper: {
    width: 50, height: 50, borderRadius: 25, backgroundColor: '#FFB6C1',
    justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: 'white',
    marginRight: 10,
  },
  avatarImage: { width: 46, height: 46, borderRadius: 23 },
  greetingText: { fontSize: 20, fontWeight: 'bold', color: 'white' },
  
  balanceSection: { alignItems: 'center', marginTop: 30 },
  balanceLabel: { fontSize: 14, color: 'white', opacity: 0.9 },
  balanceAmount: { fontSize: 48, fontWeight: 'bold', color: 'white', marginVertical: 5 },
  aiTag: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  aiTagText: { fontSize: 12, color: 'white', marginLeft: 5, opacity: 0.9 },

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
  actionLabel: { fontSize: 10, fontWeight: '500', textAlign: 'center' },

  mainContent: { 
    backgroundColor: 'white', 
    borderTopLeftRadius: 40, 
    borderTopRightRadius: 40, 
    marginTop: -80,
    paddingTop: 100, 
    paddingHorizontal: 20,
  },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  sectionTitle: { fontSize: 14, fontWeight: 'bold', color: '#2D62DF', marginLeft: 8 },
  
  productsScroll: { paddingRight: 20 },
  productCard: {
    width: 160,
    backgroundColor: 'white',
    borderRadius: 15,
    marginRight: 15,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  productImageContainer: { height: 160, position: 'relative' },
  productImage: { width: '100%', height: '100%' },
  discountBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#FF3B30',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderBottomLeftRadius: 10,
  },
  discountText: { color: 'white', fontSize: 10, fontWeight: 'bold' },
  productInfo: { padding: 10 },
  productTitle: { fontSize: 10, color: Colors.black, marginBottom: 5 },
  priceRow: { flexDirection: 'row', alignItems: 'center' },
  priceText: { fontSize: 14, fontWeight: 'bold', color: Colors.black, marginRight: 5 },
  oldPriceText: { fontSize: 10, color: '#2D62DF', textDecorationLine: 'line-through' },

  scanButtonContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  scanButton: {
    backgroundColor: '#E8F0FF',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  scanIconWrapper: {
    backgroundColor: '#2D62DF',
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  scanText: { fontSize: 10, fontWeight: 'bold', color: Colors.black },

  transactionsSection: { marginTop: 30 },
  transactionsTitle: { fontSize: 14, fontWeight: 'bold', color: Colors.black, marginBottom: 15 },
  transactionCard: {
    backgroundColor: '#2D62DF',
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  transactionIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FB8F8F',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  transactionInfo: { flex: 1, justifyContent: 'center' },
  transactionTitle: { color: 'white', fontSize: 12, fontWeight: '600' },
  transactionSubtitle: { color: 'white', fontSize: 10, fontStyle: 'italic', opacity: 0.9, marginTop: 2 },
  transactionDate: { color: 'white', fontSize: 9, fontStyle: 'italic', opacity: 0.8, marginTop: 2 },
  transactionAmount: { fontSize: 16, fontWeight: '500' },
});

export default SmartWalletScreen;

