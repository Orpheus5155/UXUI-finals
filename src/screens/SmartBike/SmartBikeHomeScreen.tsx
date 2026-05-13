import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Menu, ShoppingBag, Search, Heart } from 'lucide-react-native';
import { Colors } from '../../theme/colors';

const { width } = Dimensions.get('window');
const H_PADDING = 20;
const GRID_GAP = 14;
const cardWidth = (width - H_PADDING * 2 - GRID_GAP) / 2;

const HERO_BG = 'https://www.figma.com/api/mcp/asset/51e0beab-434f-4f71-8cf2-0cea23c49c6f';
const FEATURED_IMAGE = 'https://www.figma.com/api/mcp/asset/cf80ed27-5b2d-4669-85f3-87eebfd8c38a';

const PRODUCTS = [
  {
    id: '1',
    title: 'PEUGEOT - LR01',
    subtitle: 'Road Bike',
    price: '$ 1,999.99',
    image: 'https://www.figma.com/api/mcp/asset/8c545ff9-d5ee-4b3e-912e-0598cdb92b12',
  },
  {
    id: '2',
    title: 'SMITH - Trade',
    subtitle: 'Road Helmet',
    price: '$ 120',
    image: 'https://www.figma.com/api/mcp/asset/1103d8ba-342e-4043-b48b-92bd4492e691',
  },
  {
    id: '3',
    title: 'PILOT - Chromoly',
    subtitle: 'Mountain Bike',
    price: '$ 1,999.99',
    image: 'https://www.figma.com/api/mcp/asset/ad281399-b15a-4af9-a5ae-94f2f7d9fdce',
  },
  {
    id: '4',
    title: 'SMITH - Trade',
    subtitle: 'Road Helmet',
    price: '$ 120',
    image: 'https://www.figma.com/api/mcp/asset/1103d8ba-342e-4043-b48b-92bd4492e691',
  },
  {
    id: '5',
    title: 'TRIAERO - SN04',
    subtitle: 'Road Bike',
    price: '$ 1,899.99',
    image: 'https://www.figma.com/api/mcp/asset/8c545ff9-d5ee-4b3e-912e-0598cdb92b12',
  },
  {
    id: '6',
    title: 'PILOT - 29',
    subtitle: 'Mountain Bike',
    price: '$ 2,499.99',
    image: 'https://www.figma.com/api/mcp/asset/ad281399-b15a-4af9-a5ae-94f2f7d9fdce',
  },
  {
    id: '7',
    title: 'SMITH - Trade',
    subtitle: 'Road Helmet',
    price: '$ 120',
    image: 'https://www.figma.com/api/mcp/asset/1103d8ba-342e-4043-b48b-92bd4492e691',
  },
  {
    id: '8',
    title: 'URBAN - M1',
    subtitle: 'Road Bike',
    price: '$ 999.99',
    image: 'https://www.figma.com/api/mcp/asset/8c545ff9-d5ee-4b3e-912e-0598cdb92b12',
  },
];

const SmartBikeHomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={{ uri: HERO_BG }} style={styles.hero} imageStyle={styles.heroImage}>
        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.menuButton} activeOpacity={0.85}>
            <Menu size={20} color={Colors.white} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bagButton}
            onPress={() => navigation.navigate('SmartBikeCart' as never)}
            activeOpacity={0.85}
          >
            <ShoppingBag size={18} color={Colors.figmaPrimary} />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={styles.hello}>Hello, Romina!!</Text>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Choose Your Bike</Text>
          <TouchableOpacity style={styles.searchButton} activeOpacity={0.85}>
            <Search size={18} color={Colors.white} />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.sheet}>
        <ScrollView contentContainerStyle={styles.sheetContent} showsVerticalScrollIndicator={false}>
          <View style={styles.featuredCard}>
            <Image source={{ uri: FEATURED_IMAGE }} style={styles.featuredImage} />
            <Text style={styles.discount}>30% Off</Text>
          </View>

          <View style={styles.grid}>
            {PRODUCTS.map((item) => {
              const isPeugeot = item.title === 'PEUGEOT - LR01';

              if (isPeugeot) {
                return (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.productCard}
                    activeOpacity={0.9}
                    onPress={() => navigation.navigate('SmartBikeProduct' as never)}
                  >
                    <View style={styles.productHeader}>
                      <Heart size={18} color={Colors.white} />
                    </View>
                    <Image source={{ uri: item.image }} style={styles.productImage} />
                    <Text style={styles.productSubtitle}>{item.subtitle}</Text>
                    <Text style={styles.productTitle}>{item.title}</Text>
                    <Text style={styles.productPrice}>{item.price}</Text>
                  </TouchableOpacity>
                );
              }

              return (
                <View key={item.id} style={styles.productCard}>
                  <View style={styles.productHeader}>
                    <Heart size={18} color={Colors.white} />
                  </View>
                  <Image source={{ uri: item.image }} style={styles.productImage} />
                  <Text style={styles.productSubtitle}>{item.subtitle}</Text>
                  <Text style={styles.productTitle}>{item.title}</Text>
                  <Text style={styles.productPrice}>{item.price}</Text>
                </View>
              );
            })}
          </View>
          <View style={{ height: 50 }} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  hero: {
    paddingHorizontal: H_PADDING,
    paddingTop: 12,
    paddingBottom: 16,
    backgroundColor: Colors.figmaPrimary,
  },
  heroImage: {
    opacity: 0.15,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuButton: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bagButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: Colors.white,
    fontSize: 10,
    fontWeight: '700',
  },
  hello: {
    marginTop: 12,
    fontSize: 28,
    fontWeight: '700',
    color: Colors.white,
  },
  titleRow: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.white,
  },
  searchButton: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sheet: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    marginTop: -28,
    paddingTop: 28,
  },
  sheetContent: {
    paddingHorizontal: H_PADDING,
  },
  featuredCard: {
    height: 170,
    backgroundColor: '#8C8F97',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 22,
    justifyContent: 'flex-end',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },
  featuredImage: {
    position: 'absolute',
    left: 18,
    right: 18,
    top: 8,
    height: 140,
    resizeMode: 'contain',
  },
  discount: {
    padding: 16,
    fontSize: 22,
    fontWeight: '700',
    color: 'rgba(255,255,255,0.75)',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: cardWidth,
    backgroundColor: '#7C808A',
    borderRadius: 18,
    padding: 12,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 10,
    elevation: 4,
  },
  productHeader: {
    alignItems: 'flex-end',
  },
  productImage: {
    height: 80,
    resizeMode: 'contain',
    marginVertical: 8,
  },
  productSubtitle: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 12,
    fontWeight: '500',
  },
  productTitle: {
    color: Colors.white,
    fontSize: 13,
    fontWeight: '700',
    marginTop: 2,
  },
  productPrice: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 4,
  },
});

export default SmartBikeHomeScreen;
