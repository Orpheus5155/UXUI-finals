import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  Search, Camera, ShoppingCart, MessageCircle, Scan, 
  Wallet, Coins, Sparkles, Utensils, ShoppingBag, 
  AlertCircle, Ticket, Grid, History, LayoutGrid, BarChart3, User
} from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { Colors } from '../../theme/colors';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Area */}
        <View style={styles.header}>
          <View style={styles.searchContainer}>
            <Search size={16} color="#999" />
            <TextInput 
              style={styles.searchInput} 
              placeholder="The most popular" 
              placeholderTextColor="#999"
            />
            <TouchableOpacity><Camera size={18} color="#666" /></TouchableOpacity>
          </View>
          <TouchableOpacity 
            style={styles.iconButton}
            onPress={() => navigation.navigate('Cart')}
          >
            <ShoppingCart size={24} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <MessageCircle size={22} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Wallet Bar - Precision Styling from Node 5:26 */}
        <View style={styles.walletBar}>
          <TouchableOpacity style={styles.walletItemIcon}>
            <Scan size={20} color={Colors.white} />
          </TouchableOpacity>
          
          <View style={styles.vDivider} />
          
          <TouchableOpacity style={styles.walletItemMain}>
            <Wallet size={18} color={Colors.white} />
            <View style={styles.walletTextCol}>
              <Text style={styles.walletLabel}>SMart Wallet</Text>
              <Text style={styles.walletSub}>Manage your money</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.vDivider} />

          <TouchableOpacity style={styles.walletItemMain}>
            <Coins size={18} color={Colors.white} />
            <View style={styles.walletTextCol}>
              <Text style={styles.walletLabel}>SMart Coins</Text>
              <Text style={styles.walletSub}>Manage your coins</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.vDivider} />

          <TouchableOpacity style={styles.walletItemMain}>
            <Sparkles size={16} color={Colors.white} />
            <Text style={[styles.walletLabel, { marginLeft: 6 }]}>SMart AI</Text>
          </TouchableOpacity>

        </View>

        {/* Service Categories - Horizontal Scroll */}
        <View style={styles.categoriesContainer}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesScroll}
          >
            <CategoryItem 
              icon={<Utensils size={22} color="white" />} 
              label="Food & Drink" 
              onPress={() => navigation.navigate('FastFood')}
            />
            <CategoryItem icon={<ShoppingBag size={22} color="white" />} label="Shopping" />
            <CategoryItem icon={<AlertCircle size={22} color="white" />} label="Report problem" />
            <CategoryItem icon={<Ticket size={22} color="white" />} label="Hot voucher" />
            <CategoryItem icon={<Grid size={22} color="white" />} label="Watch more" />
            <CategoryItem icon={<History size={22} color="white" />} label="Trace" />
          </ScrollView>
        </View>

        {/* Red Voucher Banner from Screenshot */}
        <View style={styles.bannerContainer}>
          <Image 
            source={require('../../../assets/images/banner.png')} 
            style={styles.bannerImage}
            resizeMode="cover"
          />
        </View>

        {/* Product Grid */}
        <View style={styles.productGrid}>
           <ProductCard title="Plain Cotton T-shirt" price="300$" sold="300K" />
           <ProductCard title="Plain Cotton T-shirt" price="300$" sold="300K" />
           <ProductCard title="Plain Cotton T-shirt" price="300$" sold="300K" />
           <ProductCard title="Plain Cotton T-shirt" price="300$" sold="300K" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const CategoryItem = ({ icon, label, onPress }: any) => (
  <TouchableOpacity style={styles.categoryItem} onPress={onPress}>
    <View style={styles.categoryIcon}>{icon}</View>
    <Text style={styles.categoryLabel}>{label}</Text>
  </TouchableOpacity>
);

const ProductCard = ({ title, price, sold }: any) => (
  <View style={styles.productCard}>
    <View style={styles.productImageWrapper}>
       <Image 
        source={require('../../../assets/images/shirt.png')} 
        style={styles.productImage}
        resizeMode="contain"
       /> 
       <TouchableOpacity style={styles.cartBtnSmall}>
          <ShoppingCart size={14} color="#666" />
       </TouchableOpacity>
    </View>

    <View style={styles.productInfo}>
      <Text style={styles.productTitle}>{title}</Text>
      <View style={styles.productFooter}>
        <Text style={styles.productPrice}>{price}</Text>
        <Text style={styles.productSold}>Sold {sold}</Text>
      </View>
    </View>
  </View>
);


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'white',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 44,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  searchInput: { flex: 1, marginLeft: 8, fontSize: 13, color: 'black' },
  iconButton: { marginLeft: 15 },
  walletBar: {
    flexDirection: 'row',
    backgroundColor: '#2D62DF',
    marginHorizontal: 15,
    marginBottom: 20,
    borderRadius: 35,
    height: 56, // Slightly shorter for better proportion
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  walletItemIcon: { paddingHorizontal: 5, alignItems: 'center', justifyContent: 'center' },
  walletItemMain: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 5 },
  walletTextCol: { marginLeft: 5 },
  walletLabel: { fontSize: 10, color: 'white', fontWeight: 'bold' },
  walletSub: { fontSize: 8, color: 'white', opacity: 0.8 },
  vDivider: { width: 1, height: 30, backgroundColor: 'rgba(255,255,255,0.3)' },

  categoriesContainer: { marginBottom: 25 },
  categoriesScroll: { paddingHorizontal: 15, gap: 28 },
  categoryItem: { alignItems: 'center', width: 70 },
  categoryIcon: { width: 48, height: 48, borderRadius: 12, backgroundColor: '#2D62DF', justifyContent: 'center', alignItems: 'center' },
  categoryLabel: { fontSize: 10, marginTop: 10, textAlign: 'center', color: '#333' },
  bannerContainer: { paddingHorizontal: 0, marginBottom: 25 },
  bannerImage: { width: '100%', height: 200 },
  productGrid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 15, justifyContent: 'space-between', paddingBottom: 100 },
  productCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 25,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    overflow: 'hidden',
    padding: 10,
  },
  productImageWrapper: { width: '100%', height: 160, borderRadius: 20, overflow: 'hidden' },
  productImage: { width: '100%', height: '100%' },
  cartBtnSmall: { position: 'absolute', top: 10, right: 10 },
  productInfo: { marginTop: 12 },
  productTitle: { fontSize: 12, color: '#333', marginBottom: 15 },
  productFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  productPrice: { fontSize: 13, fontWeight: 'bold', color: '#A9E5D9' },
  productSold: { fontSize: 9, color: '#999' },
});

export default HomeScreen;
