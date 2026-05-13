import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Colors } from '../theme/colors';
import CarBrandTabs from './CarBrandTabs';
import CarCard from './CarCard';

const MENU_ICON = 'https://www.figma.com/api/mcp/asset/458f3479-75bc-4780-bac1-19ea0bd7c75a';
const SEARCH_ICON = 'https://www.figma.com/api/mcp/asset/92c733eb-4850-4998-833e-b8f837f7fadf';

type BrandKey = 'all' | 'lambo' | 'bugatti' | 'audi';

interface CarCardData {
  id: string;
  title: string;
  price: string;
  image: string;
  showTrend?: boolean;
}

interface CarHomeLayoutProps {
  activeBrand: BrandKey;
  cards: CarCardData[];
  onSelectBrand?: (key: BrandKey) => void;
  onCardPress?: () => void;
  onSearchPress?: () => void;
  backgroundImage?: string;
}

const CarHomeLayout = ({
  activeBrand,
  cards,
  onSelectBrand,
  onCardPress,
  onSearchPress,
  backgroundImage,
}: CarHomeLayoutProps) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image source={{ uri: MENU_ICON }} style={styles.menuIcon} />
          <Text style={styles.greeting}>Hello Romina!!</Text>
        </View>

        <View style={styles.titleRow}>
          <Text style={styles.title}>Select Cars for rent</Text>
          <TouchableOpacity activeOpacity={0.8} onPress={onSearchPress}>
            <Image source={{ uri: SEARCH_ICON }} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>

        <CarBrandTabs activeKey={activeBrand} onSelect={onSelectBrand} />

        <View style={styles.cardList}>
          {cards.map((card) => (
            <View key={card.id} style={styles.cardWrapper}>
              <CarCard
                title={card.title}
                price={card.price}
                image={card.image}
                showTrend={card.showTrend}
                onPress={onCardPress}
                onRent={onCardPress}
                onViewDetails={onCardPress}
              />
            </View>
          ))}
        </View>

        {backgroundImage ? (
          <Image source={{ uri: backgroundImage }} style={styles.backgroundCar} resizeMode="contain" />
        ) : null}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.carBlue,
  },
  content: {
    paddingBottom: 72,
  },
  header: {
    paddingHorizontal: 18,
    paddingTop: 12,
  },
  menuIcon: {
    width: 40,
    height: 40,
  },
  greeting: {
    marginTop: 12,
    fontSize: 30,
    color: Colors.white,
    fontFamily: 'Roboto-Bold',
    letterSpacing: 0.3,
  },
  titleRow: {
    marginTop: 18,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: 'GeneralSans-Regular',
    letterSpacing: 0.18,
  },
  searchIcon: {
    width: 52,
    height: 52,
  },
  cardList: {
    marginTop: 24,
    alignItems: 'center',
  },
  cardWrapper: {
    marginBottom: 24,
  },
  backgroundCar: {
    width: '100%',
    height: 220,
    marginTop: 24,
  },
});

export default CarHomeLayout;
