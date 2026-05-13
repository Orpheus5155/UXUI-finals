import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Colors } from '../theme/colors';

const SAVED_ICON = 'https://www.figma.com/api/mcp/asset/d030140f-d368-4d57-8e3c-d4203de4bbec';
const ARROW_ICON = 'https://www.figma.com/api/mcp/asset/5880f58e-aadc-4104-9243-2e1bb47b5fb6';

interface CarCardProps {
  title: string;
  price: string;
  image: string;
  showTrend?: boolean;
  onPress?: () => void;
  onViewDetails?: () => void;
  onRent?: () => void;
}

const CarCard = ({
  title,
  price,
  image,
  showTrend,
  onPress,
  onViewDetails,
  onRent,
}: CarCardProps) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.card}>
      <Image source={{ uri: image }} style={styles.carImage} resizeMode="contain" />
      <Image source={{ uri: SAVED_ICON }} style={styles.savedIcon} />
      <View style={styles.divider} />
      <View style={styles.contentRow}>
        <View style={styles.leftColumn}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.tagRow}>
            <TouchableOpacity activeOpacity={0.8} onPress={onViewDetails} style={styles.tagPill}>
              <Text style={styles.tagText}>View Details</Text>
            </TouchableOpacity>
            {showTrend ? (
              <View style={styles.tagPill}>
                <Text style={styles.tagText}>#Trend Car</Text>
              </View>
            ) : null}
          </View>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.priceText}>
            {price}
            <Text style={styles.priceSuffix}>/Day</Text>
          </Text>
          <TouchableOpacity activeOpacity={0.8} onPress={onRent} style={styles.rentButton}>
            <Text style={styles.rentText}>Rent</Text>
            <Image source={{ uri: ARROW_ICON }} style={styles.rentArrow} resizeMode="contain" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.carSurface,
    borderRadius: 8,
    height: 291,
    width: 350,
    paddingBottom: 12,
    overflow: 'hidden',
  },
  carImage: {
    width: '100%',
    height: 170,
  },
  savedIcon: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 44,
    height: 44,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    marginHorizontal: 12,
    marginTop: 6,
  },
  contentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingTop: 8,
  },
  leftColumn: {
    flex: 1,
    paddingRight: 8,
  },
  title: {
    fontSize: 22,
    color: 'rgba(0,0,0,0.85)',
    fontFamily: 'Times New Roman',
    fontWeight: '700',
  },
  tagRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  tagPill: {
    backgroundColor: 'rgba(235,94,40,0.15)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 8,
  },
  tagText: {
    fontSize: 14,
    color: Colors.carOrange,
    fontFamily: 'Poppins-Medium',
  },
  rightColumn: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  priceText: {
    fontSize: 18,
    color: 'rgba(0,0,0,0.65)',
    fontFamily: 'Times New Roman',
    fontWeight: '700',
  },
  priceSuffix: {
    fontSize: 16,
    fontFamily: 'Times New Roman',
    fontWeight: '400',
  },
  rentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.carOrange,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  rentText: {
    color: Colors.carLight,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    marginRight: 6,
  },
  rentArrow: {
    width: 10,
    height: 12,
  },
});

export default CarCard;
