import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

import { Colors } from '../theme/colors';

const ICONS = {
  lambo: 'https://www.figma.com/api/mcp/asset/a4055347-b0f9-4113-84e0-7d59a805f027',
  bugatti: 'https://www.figma.com/api/mcp/asset/abdfbc3b-39f2-4cd9-9f55-d836b83a3170',
  audi: 'https://www.figma.com/api/mcp/asset/6073eb0c-ad42-434d-b2ed-00afe2ed1a8a',
};

type BrandKey = 'all' | 'lambo' | 'bugatti' | 'audi';

interface CarBrandTabsProps {
  activeKey: BrandKey;
  onSelect?: (key: BrandKey) => void;
}

const CarBrandTabs = ({ activeKey, onSelect }: CarBrandTabsProps) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onSelect?.('all')}
        style={[styles.allTab, activeKey === 'all' ? styles.allTabActive : styles.allTabInactive]}
      >
        <Text style={styles.allText}>All</Text>
      </TouchableOpacity>

      {(['lambo', 'bugatti', 'audi'] as BrandKey[]).map((key) => (
        <TouchableOpacity
          key={key}
          activeOpacity={0.8}
          onPress={() => onSelect?.(key)}
          style={[styles.iconTab, activeKey === key && styles.iconTabActive]}
        >
          <Image source={{ uri: ICONS[key] }} style={styles.iconImage} resizeMode="contain" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  allTab: {
    height: 56,
    width: 88,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  allTabActive: {
    backgroundColor: Colors.carOrange,
  },
  allTabInactive: {
    backgroundColor: Colors.carDark,
  },
  allText: {
    fontSize: 16,
    color: Colors.white,
    fontFamily: 'GeneralSans-Semibold',
    letterSpacing: 0.16,
  },
  iconTab: {
    height: 56,
    width: 88,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  iconTabActive: {
    backgroundColor: Colors.carOrange,
  },
  iconImage: {
    width: 88,
    height: 56,
  },
});

export default CarBrandTabs;
