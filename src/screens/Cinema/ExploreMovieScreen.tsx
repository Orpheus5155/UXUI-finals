import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { ChevronLeft, Search, Star } from 'lucide-react-native';
import { Colors } from '../../theme/colors';

const { width } = Dimensions.get('window');

const ExploreMovieScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Now Showing');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
          <ChevronLeft size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Explore Movie</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Search size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <View style={styles.tabBackground}>
          <TouchableOpacity 
            style={[styles.tabButton, activeTab === 'Now Showing' && styles.activeTabButton]}
            onPress={() => setActiveTab('Now Showing')}
          >
            <Text style={[styles.tabText, activeTab === 'Now Showing' && styles.activeTabText]}>Now Showing</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tabButton, activeTab === 'Upcoming' && styles.activeTabButton]}
            onPress={() => setActiveTab('Upcoming')}
          >
            <Text style={[styles.tabText, activeTab === 'Upcoming' && styles.activeTabText]}>Upcoming</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Top Movies Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Movies</Text>
          <TouchableOpacity>
            <Text style={styles.seeMoreText}>See more</Text>
          </TouchableOpacity>
        </View>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.topMoviesScroll}
        >
          <MoviePoster 
            title="Wood" 
            rating={5} 
            image="https://images.unsplash.com/photo-1542204113-e93a434de324?w=400" 
          />
          <MoviePoster 
            title="Wood" 
            rating={5} 
            image="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400" 
          />
          <MoviePoster 
            title="Wood" 
            rating={5} 
            image="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400" 
          />
        </ScrollView>

        {/* Recommended Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recommended</Text>
        </View>

        <View style={styles.recommendedGrid}>
           <RecommendedCard 
            title="Wood" 
            rating={5} 
            image="https://images.unsplash.com/photo-1542204113-e93a434de324?w=800" 
           />
           <RecommendedCard 
            title="Wood" 
            rating={5} 
            image="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800" 
           />
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const MoviePoster = ({ title, rating, image }: any) => (
    <TouchableOpacity style={styles.moviePoster}>
        <Image source={{ uri: image }} style={styles.posterImage} />
        <Text style={styles.posterTitle}>{title}</Text>
        <View style={styles.ratingRow}>
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} color="#F5A623" fill={i < rating ? "#F5A623" : "transparent"} />
            ))}
        </View>
    </TouchableOpacity>
);

const RecommendedCard = ({ title, rating, image }: any) => (
    <TouchableOpacity style={styles.recommendedCard}>
        <Image source={{ uri: image }} style={styles.recommendedImage} />
        <Text style={styles.recommendedTitle}>{title}</Text>
        <View style={styles.ratingRow}>
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} color="#F5A623" fill={i < rating ? "#F5A623" : "transparent"} />
            ))}
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  tabContainer: {
    paddingHorizontal: 46,
    paddingVertical: 12,
  },
  tabBackground: {
    flexDirection: 'row',
    backgroundColor: '#918B8B',
    borderRadius: 44,
    height: 47,
    padding: 4,
    shadowColor: '#FFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 44,
  },
  activeTabButton: {
    backgroundColor: '#4171E2',
  },
  tabText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  activeTabText: {
    color: 'white',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  seeMoreText: {
    fontSize: 12,
    fontWeight: '300',
    color: 'white',
  },
  topMoviesScroll: {
    gap: 30,
    paddingBottom: 40,
  },
  moviePoster: {
    width: 139,
  },
  posterImage: {
    width: 139,
    height: 196,
    borderRadius: 12,
    backgroundColor: '#333',
  },
  posterTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
  },
  ratingRow: {
    flexDirection: 'row',
    gap: 2,
    marginTop: 4,
  },
  recommendedGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 16,
  },
  recommendedCard: {
    width: (width - 48) / 2,
    marginBottom: 20,
  },
  recommendedImage: {
    width: '100%',
    height: 246,
    borderRadius: 12,
    backgroundColor: '#333',
  },
  recommendedTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
});

export default ExploreMovieScreen;
