import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChevronDown } from 'lucide-react-native';
import { Colors } from '../../theme/colors';
import SmartBikeHeader from '../../components/SmartBikeHeader';

const { width } = Dimensions.get('window');

const BIKE_IMAGE = 'https://www.figma.com/api/mcp/asset/2f9bd151-5f43-480d-9572-ba9b9c90c170';

const SmartBikeProductDescScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <SmartBikeHeader
        title="PEUGEOT - LR01"
        onBack={() => navigation.goBack()}
        backIcon={<ChevronDown size={20} color={Colors.white} />}
        variant="dark"
        iconColor={Colors.white}
      />

      <View style={styles.imageWrap}>
        <Image source={{ uri: BIKE_IMAGE }} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.dots}>
        <View style={[styles.dot, styles.dotActive]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      <View style={styles.sheet}>
        <View style={styles.tabs}>
          <TouchableOpacity style={styles.tabActive} activeOpacity={0.85}>
            <Text style={styles.tabActiveText}>Description</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab} activeOpacity={0.85}>
            <Text style={styles.tabText}>Specification</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.descBlock}>
          <Text style={styles.descTitle}>PEUGEOT - LR01</Text>
          <Text style={styles.descText}>
            The LR01 uses the same design as the most iconic bikes from PEUGEOT Cycles' 130-year
            history and combines it with agile, dynamic performance that's perfectly suited to
            navigating today's cities.
          </Text>
        </View>

        <View style={styles.buyRow}>
          <Text style={styles.price}>$ 1,999.99</Text>
          <TouchableOpacity style={styles.addButton} activeOpacity={0.9}>
            <Text style={styles.addText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.figmaPrimary,
  },
  imageWrap: {
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    width: width * 0.72,
    height: 220,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginTop: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  dotActive: {
    backgroundColor: Colors.white,
  },
  sheet: {
    marginTop: 24,
    marginHorizontal: 12,
    backgroundColor: Colors.bikeSurface,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 28,
  },
  tabs: {
    flexDirection: 'row',
    gap: 16,
  },
  tabActive: {
    backgroundColor: '#323B4F',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  tab: {
    backgroundColor: '#28303F',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  tabActiveText: {
    color: Colors.bikeAccent,
    fontSize: 15,
    fontWeight: '700',
  },
  tabText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 15,
    fontWeight: '500',
  },
  descBlock: {
    marginTop: 18,
    gap: 8,
  },
  descTitle: {
    color: Colors.white,
    fontSize: 17,
    fontWeight: '700',
  },
  descText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 15,
    lineHeight: 22,
  },
  buyRow: {
    marginTop: 20,
    backgroundColor: '#262E3D',
    borderRadius: 50,
    paddingVertical: 18,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: Colors.white,
  },
  price: {
    color: Colors.bikeAccent,
    fontSize: 22,
    fontWeight: '600',
  },
  addButton: {
    backgroundColor: Colors.figmaPrimary,
    borderRadius: 10,
    paddingHorizontal: 26,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  addText: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: '600',
  },
});

export default SmartBikeProductDescScreen;
