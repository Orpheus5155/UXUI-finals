import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Colors } from '../../theme/colors';

const MAP_IMAGE = 'https://www.figma.com/api/mcp/asset/b01d58ba-f78c-4ff1-8410-8aa4c9cdf61a';
const BACK_ICON = 'https://www.figma.com/api/mcp/asset/6b69f338-0fc1-4466-8417-0d57ed24edb5';
const SEARCH_ICON = 'https://www.figma.com/api/mcp/asset/dc4673fa-dfa8-44a2-850c-0d2a2c24bf04';
const MARKER_ICON = 'https://www.figma.com/api/mcp/asset/4c2ad375-8919-4a21-a277-d3b91e364fd1';
const MARKER_ICON_ALT = 'https://www.figma.com/api/mcp/asset/7785c3b9-14d7-4a86-b02f-6044ac017a9e';
const CAR_IMAGE = 'https://www.figma.com/api/mcp/asset/862e1bcc-f56d-4eb1-b564-59d4c05667b3';
const USER_AVATAR = 'https://www.figma.com/api/mcp/asset/772beb2e-d5a0-4d4f-882b-0ecd678e1f4c';
const LOCATION_ICON = 'https://www.figma.com/api/mcp/asset/e0757e17-2a79-4a00-b55b-2307fe768098';
const BOOK_ICON = 'https://www.figma.com/api/mcp/asset/a73e3d30-2dcb-48bc-8093-57658ab560b6';

const CarGetScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
          <Image source={{ uri: BACK_ICON }} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <Text style={styles.searchPlaceholder}>Select Destination</Text>
          <Image source={{ uri: SEARCH_ICON }} style={styles.searchIcon} />
        </View>
      </View>

      <View style={styles.filterRow}>
        <View style={styles.filterPill}>
          <Text style={styles.filterText}>High Rated</Text>
        </View>
        <View style={styles.filterPill}>
          <Text style={styles.filterText}>Near me!</Text>
        </View>
        <View style={styles.filterPill}>
          <Text style={styles.filterText}>Cheapest</Text>
        </View>
      </View>

      <ImageBackground source={{ uri: MAP_IMAGE }} style={styles.map}>
        <Image source={{ uri: MARKER_ICON }} style={[styles.marker, { top: 140, left: 180 }]} />
        <Image source={{ uri: MARKER_ICON_ALT }} style={[styles.marker, { top: 220, left: 240 }]} />
      </ImageBackground>

      <View style={styles.bottomSheet}>
        <Image source={{ uri: CAR_IMAGE }} style={styles.sheetCar} resizeMode="contain" />
        <View style={styles.sheetContent}>
          <View style={styles.userRow}>
            <Image source={{ uri: USER_AVATAR }} style={styles.userAvatar} />
            <Text style={styles.userName}>John Smith</Text>
          </View>
          <View style={styles.locationRow}>
            <Image source={{ uri: LOCATION_ICON }} style={styles.locationIcon} />
            <Text style={styles.locationText}>Chennai Central{`\n`}Suburban</Text>
          </View>
          <Text style={styles.priceText}>Day / $450</Text>
        </View>
        <Text style={styles.carTitle}>Ferrari 280 Special</Text>
        <View style={styles.actionRow}>
          <TouchableOpacity
            style={styles.viewButton}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('CarDetail' as never)}
          >
            <Text style={styles.viewText}>View details</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bookButton}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('CarPayment' as never)}
          >
            <Image source={{ uri: BOOK_ICON }} style={styles.bookIcon} />
            <Text style={styles.bookText}>Book now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.carBlue,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingTop: 16,
  },
  backIcon: {
    width: 44,
    height: 44,
  },
  searchBar: {
    flex: 1,
    marginLeft: 8,
    height: 52,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'rgba(92,92,92,0.7)',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  searchPlaceholder: {
    color: 'rgba(92,92,92,0.5)',
    fontSize: 16,
    fontFamily: 'Satoshi-Regular',
  },
  searchIcon: {
    position: 'absolute',
    right: 4,
    top: 4,
    width: 44,
    height: 44,
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingHorizontal: 16,
  },
  filterPill: {
    backgroundColor: 'rgba(173,173,173,0.1)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 50,
  },
  filterText: {
    color: Colors.carMuted,
    fontSize: 16,
    fontFamily: 'GeneralSans-Medium',
    letterSpacing: 0.48,
  },
  map: {
    flex: 1,
    marginTop: 12,
  },
  marker: {
    position: 'absolute',
    width: 80,
    height: 80,
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
  sheetCar: {
    width: 180,
    height: 110,
  },
  sheetContent: {
    position: 'absolute',
    right: 16,
    top: 12,
    alignItems: 'flex-end',
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  userAvatar: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  userName: {
    fontSize: 16,
    color: Colors.black,
    fontFamily: 'Satoshi-Medium',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  locationIcon: {
    width: 12,
    height: 18,
    marginRight: 6,
  },
  locationText: {
    fontSize: 14,
    color: 'rgba(0,0,0,0.5)',
    fontFamily: 'Satoshi-Regular',
  },
  priceText: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: 'Satoshi-Bold',
  },
  carTitle: {
    marginTop: 8,
    fontSize: 18,
    color: 'rgba(0,0,0,0.65)',
    fontFamily: 'Times New Roman',
    fontWeight: '700',
  },
  actionRow: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewButton: {
    backgroundColor: 'rgba(51,153,137,0.15)',
    paddingHorizontal: 16,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 130,
  },
  viewText: {
    color: Colors.carGreen,
    fontSize: 14,
    fontFamily: 'Satoshi-Medium',
  },
  bookButton: {
    backgroundColor: 'rgba(51,153,137,0.15)',
    paddingHorizontal: 16,
    height: 40,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  bookText: {
    color: Colors.carGreen,
    fontSize: 14,
    fontFamily: 'Satoshi-Medium',
  },
});

export default CarGetScreen;
