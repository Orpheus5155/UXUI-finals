import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Colors } from '../../theme/colors';
import CarSpecChip from '../../components/CarSpecChip';

const BACK_ICON = 'https://www.figma.com/api/mcp/asset/4102819c-7876-4569-ac92-4cbe4aeb1303';
const SAVED_ICON = 'https://www.figma.com/api/mcp/asset/e8cb63b9-d927-48f2-b431-5f8f580b6a01';
const CAR_IMAGE = 'https://www.figma.com/api/mcp/asset/108f8b92-ccbb-4f0b-847c-0a08e5e74869';
const RATING_STARS = 'https://www.figma.com/api/mcp/asset/043427ca-4216-465f-913a-c187fdfd2211';
const CHEVRON = 'https://www.figma.com/api/mcp/asset/428d6fb0-d04a-4197-904d-767b762e4961';
const AVATAR = 'https://www.figma.com/api/mcp/asset/d5694719-88f0-4f4e-ac2a-37d7dfa3b5ee';
const LOCATION_ICON = 'https://www.figma.com/api/mcp/asset/170f854d-7af6-47d5-943c-6d4a23e82f0c';
const CHAT_ICON = 'https://www.figma.com/api/mcp/asset/833d0b12-fda8-4ba5-8472-97b5a7737259';
const CALL_ICON = 'https://www.figma.com/api/mcp/asset/e282beb2-3a4f-4928-b969-bc7fa059de07';

const SPEC_ICONS = {
  seats: 'https://www.figma.com/api/mcp/asset/e12bddff-9581-420d-bab2-0972b8b181c2',
  fuel: 'https://www.figma.com/api/mcp/asset/b9d1b5f4-a1d0-4a96-ba2f-aaf3308e5e14',
  hp: 'https://www.figma.com/api/mcp/asset/c8c6f6bf-1e45-4b9e-85f3-696b2f496c94',
  speed: 'https://www.figma.com/api/mcp/asset/ef162ddb-8847-468e-b7ee-fea320f150dc',
  gear: 'https://www.figma.com/api/mcp/asset/459f6c8b-002b-442d-85a8-21f863a02627',
};

const CarDetailScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerCard}>
        <View style={styles.headerRow}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
            <Image source={{ uri: BACK_ICON }} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Ferrari 280 Special</Text>
        </View>
        <TouchableOpacity style={styles.savedButton} activeOpacity={0.85}>
          <Image source={{ uri: SAVED_ICON }} style={styles.savedIcon} />
        </TouchableOpacity>
        <Image source={{ uri: CAR_IMAGE }} style={styles.carImage} resizeMode="contain" />
        <Text style={styles.priceText}>
          $450 /<Text style={styles.priceSuffix}>Day</Text>
        </Text>
      </View>

      <TouchableOpacity
        style={styles.primaryButton}
        activeOpacity={0.85}
        onPress={() => navigation.navigate('CarPayment' as never)}
      >
        <Text style={styles.primaryText}>Book Now</Text>
        <Image source={{ uri: CHEVRON }} style={styles.primaryIcon} />
      </TouchableOpacity>

      <View style={styles.ratingRow}>
        <Text style={styles.sectionTitle}>Rating</Text>
        <View style={styles.ratingValue}>
          <Image source={{ uri: RATING_STARS }} style={styles.starImage} />
          <Text style={styles.ratingText}>4.0</Text>
        </View>
        <Image source={{ uri: CHEVRON }} style={styles.chevronIcon} />
      </View>

      <View style={styles.sectionBlock}>
        <Text style={styles.sectionHeading}>Overview</Text>
        <Text style={styles.overviewText}>
          Lorem ipsum dolor sit amet consectetur. Fermentum morbi proin sed tortor augue sed neque.
          Id praesent sit posuere diam orci vivamus sapien velit neque. Sollicitudin ut convallis
          amet eget. Gravida egestas at turpis faucibus gravida
          <Text style={styles.readMore}> Read more...</Text>
        </Text>
      </View>

      <View style={styles.sectionBlock}>
        <Text style={styles.sectionHeading}>Renter Details</Text>
        <View style={styles.renterRow}>
          <View style={styles.renterInfo}>
            <Image source={{ uri: AVATAR }} style={styles.renterAvatar} />
            <View>
              <Text style={styles.renterName}>John Smith</Text>
              <View style={styles.locationRow}>
                <Image source={{ uri: LOCATION_ICON }} style={styles.locationIcon} />
                <Text style={styles.locationText}>Chennai Central, Suburban</Text>
              </View>
            </View>
          </View>
          <View style={styles.renterActions}>
            <Image source={{ uri: CHAT_ICON }} style={styles.actionIcon} />
            <Image source={{ uri: CALL_ICON }} style={styles.actionIcon} />
          </View>
        </View>
      </View>

      <View style={styles.sectionBlock}>
        <Text style={styles.sectionHeading}>Specifications</Text>
        <View style={styles.specGrid}>
          <CarSpecChip icon={SPEC_ICONS.seats} label="2 Seats" />
          <CarSpecChip icon={SPEC_ICONS.fuel} label="57.0 ltr" />
          <CarSpecChip icon={SPEC_ICONS.hp} label="160HP" />
          <CarSpecChip icon={SPEC_ICONS.speed} label="240kmph" />
          <CarSpecChip icon={SPEC_ICONS.gear} label="Automatic" />
        </View>
      </View>

      <TouchableOpacity
        style={styles.primaryButtonWide}
        activeOpacity={0.85}
        onPress={() => navigation.navigate('CarPayment' as never)}
      >
        <Text style={styles.primaryText}>Book Now</Text>
        <Image source={{ uri: CHEVRON }} style={styles.primaryIcon} />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.carBlue,
  },
  content: {
    paddingBottom: 32,
  },
  headerCard: {
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingBottom: 24,
  },
  headerRow: {
    marginTop: 54,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  backIcon: {
    width: 44,
    height: 44,
  },
  headerTitle: {
    marginLeft: 12,
    fontSize: 24,
    color: 'rgba(0,0,0,0.85)',
    fontFamily: 'Times New Roman',
    fontWeight: '700',
  },
  savedButton: {
    position: 'absolute',
    top: 110,
    right: 34,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  savedIcon: {
    width: 20,
    height: 18,
  },
  carImage: {
    width: 317,
    height: 167,
    alignSelf: 'center',
    marginTop: 32,
  },
  priceText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 28,
    color: 'rgba(0,0,0,0.85)',
    fontFamily: 'Times New Roman',
    fontWeight: '700',
  },
  priceSuffix: {
    fontSize: 16,
    fontFamily: 'Times New Roman',
    fontWeight: '400',
  },
  primaryButton: {
    marginTop: 24,
    alignSelf: 'center',
    backgroundColor: Colors.carOrange,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 6,
  },
  primaryButtonWide: {
    marginTop: 24,
    alignSelf: 'center',
    backgroundColor: Colors.carOrange,
    paddingHorizontal: 55,
    paddingVertical: 18,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 6,
  },
  primaryText: {
    color: Colors.carLight,
    fontSize: 18,
    fontFamily: 'GeneralSans-Medium',
    letterSpacing: 0.54,
    marginRight: 16,
  },
  primaryIcon: {
    width: 16,
    height: 16,
    transform: [{ rotate: '90deg' }],
  },
  ratingRow: {
    marginTop: 24,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: 'Satoshi-Bold',
    letterSpacing: 0.9,
  },
  ratingValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starImage: {
    width: 136,
    height: 24,
    marginRight: 8,
  },
  ratingText: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    fontFamily: 'Satoshi-Medium',
    letterSpacing: 0.8,
  },
  chevronIcon: {
    width: 16,
    height: 16,
    transform: [{ rotate: '90deg' }],
  },
  sectionBlock: {
    marginTop: 24,
    alignItems: 'center',
  },
  sectionHeading: {
    fontSize: 28,
    color: Colors.white,
    fontFamily: 'Times New Roman',
    fontWeight: '700',
    marginBottom: 12,
  },
  overviewText: {
    width: 339,
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    fontFamily: 'Satoshi-Regular',
    textAlign: 'justify',
  },
  readMore: {
    fontSize: 16,
    fontFamily: 'Satoshi-Bold',
    color: Colors.white,
  },
  renterRow: {
    width: '100%',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  renterInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  renterAvatar: {
    width: 64,
    height: 64,
    marginRight: 16,
  },
  renterName: {
    fontSize: 16,
    color: Colors.white,
    fontFamily: 'Satoshi-Bold',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  locationIcon: {
    width: 12,
    height: 19,
    marginRight: 6,
  },
  locationText: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.5)',
    fontFamily: 'Satoshi-Regular',
  },
  renterActions: {
    flexDirection: 'row',
  },
  actionIcon: {
    width: 44,
    height: 44,
    marginLeft: 8,
  },
  specGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
});

export default CarDetailScreen;
