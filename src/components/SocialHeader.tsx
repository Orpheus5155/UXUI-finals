import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../theme/colors';

interface SocialHeaderProps {
  activeTab: 'following' | 'foryou';
  onTabChange: (tab: 'following' | 'foryou') => void;
}

const SocialHeader = ({ activeTab, onTabChange }: SocialHeaderProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onTabChange('following')}>
        <Text style={[styles.tabText, activeTab === 'following' && styles.activeTabText]}>
          Following
        </Text>
      </TouchableOpacity>
      <View style={styles.divider} />
      <TouchableOpacity onPress={() => onTabChange('foryou')}>
        <View style={styles.tabContainer}>
          <Text style={[styles.tabText, activeTab === 'foryou' && styles.activeTabText]}>
            For You
          </Text>
          {activeTab === 'foryou' && <View style={styles.activeUnderline} />}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 12,
    zIndex: 10,
  },
  tabText: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    color: 'rgba(255,255,255,0.7)',
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  divider: {
    width: 16,
  },
  tabContainer: {
    alignItems: 'center',
  },
  activeUnderline: {
    width: 32,
    height: 3,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    marginTop: 8,
  },
});

export default SocialHeader;
