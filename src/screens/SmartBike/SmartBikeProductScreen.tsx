import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChevronDown } from 'lucide-react-native';
import { Colors } from '../../theme/colors';
import SmartBikeHeader from '../../components/SmartBikeHeader';

const { width, height } = Dimensions.get('window');
const SHEET_HEIGHT = Math.min(height * 0.6, 460);
const SHEET_PEEK = 120;

const BIKE_IMAGE = 'https://www.figma.com/api/mcp/asset/a7e1f31b-0b16-45e2-8aa2-9932ebd5ddeb';

const SmartBikeProductScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState<'description' | 'specification' | null>(null);
  const showDescription = activeTab === 'description';
  const sheetProgress = useRef(new Animated.Value(1)).current;

  const translateY = sheetProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, SHEET_HEIGHT - SHEET_PEEK],
  });

  const imageScale = sheetProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [0.78, 1],
  });

  const animateSheet = (toValue: number) => {
    Animated.timing(sheetProgress, {
      toValue,
      duration: 260,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  };

  const handleDescriptionPress = () => {
    setActiveTab('description');
    animateSheet(0);
  };

  const handleSpecificationPress = () => {
    setActiveTab('specification');
    animateSheet(1);
  };

  const handleBack = () => {
    if (showDescription) {
      setActiveTab(null);
      animateSheet(1);
      return;
    }

    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.diagonal} />
      <SmartBikeHeader
        title="PEUGEOT - LR01"
        onBack={handleBack}
        backIcon={showDescription ? <ChevronDown size={20} color={Colors.white} /> : undefined}
        variant="dark"
        iconColor={Colors.white}
      />

      <View style={[styles.imageWrap, showDescription && styles.imageWrapCompact]}>
        <Animated.Image
          source={{ uri: BIKE_IMAGE }}
          style={[styles.image, { transform: [{ scale: imageScale }] }]}
          resizeMode="contain"
        />
      </View>

      {showDescription && (
        <View style={styles.dots}>
          <View style={styles.dotActive} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      )}

      <Animated.View style={[styles.sheet, { transform: [{ translateY }] }]}>
        <ScrollView
          contentContainerStyle={styles.sheetContent}
          showsVerticalScrollIndicator={false}
          scrollEnabled={showDescription}
        >
          <View style={styles.tabs}>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'description' && styles.tabActive]}
              activeOpacity={0.85}
              onPress={handleDescriptionPress}
            >
              <Text style={[styles.tabText, activeTab === 'description' && styles.tabTextActive]}>
                Description
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'specification' && styles.tabActive]}
              activeOpacity={0.85}
              onPress={handleSpecificationPress}
            >
              <Text style={[styles.tabText, activeTab === 'specification' && styles.tabTextActive]}>
                Specification
              </Text>
            </TouchableOpacity>
          </View>

          {showDescription && (
            <>
              <View style={styles.descBlock}>
                <Text style={styles.descTitle}>PEUGEOT - LR01</Text>
                <Text style={styles.descText}>
                  The LR01 uses the same design as the most iconic bikes from PEUGEOT Cycles' 130-year
                  history and combines it with agile, dynamic performance that's perfectly suited to
                  navigating today's cities. As well as a lugged steel frame and iconic PEUGEOT
                  black-and-white chequer design, this city bike also features a 16-speed Shimano
                  Claris drivetrain.
                </Text>
              </View>

              <View style={styles.buyRow}>
                <Text style={styles.price}>$ 1,999.99</Text>
                <TouchableOpacity
                  style={styles.addButton}
                  activeOpacity={0.9}
                  onPress={() => navigation.navigate('SmartBikeCart' as never)}
                >
                  <Text style={styles.addText}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.figmaPrimary,
  },
  diagonal: {
    position: 'absolute',
    right: -140,
    top: -140,
    width: width * 0.9,
    height: width * 2,
    backgroundColor: Colors.white,
    transform: [{ rotate: '18deg' }],
  },
  imageWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
  },
  imageWrapCompact: {
    flex: 0,
    marginTop: 6,
    paddingTop: 0,
  },
  image: {
    width: width * 0.98,
    height: 280,
  },
  dots: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 4,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.35)',
  },
  dotActive: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.white,
  },
  sheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: SHEET_HEIGHT,
    backgroundColor: Colors.bikeSurface,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },
  sheetContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
  },
  tabs: {
    flexDirection: 'row',
    gap: 16,
  },
  tab: {
    backgroundColor: '#28303F',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  tabActive: {
    backgroundColor: '#323B4F',
  },
  tabText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 15,
    fontWeight: '500',
  },
  tabTextActive: {
    color: Colors.bikeAccent,
    fontWeight: '700',
  },
  descBlock: {
    marginTop: 20,
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
    marginTop: 24,
    backgroundColor: '#262E3D',
    borderRadius: 50,
    paddingVertical: 20,
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

export default SmartBikeProductScreen;
