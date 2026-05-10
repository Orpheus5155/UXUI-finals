import React from 'react';
import { 
  View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, 
  Dimensions, FlatList 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bookmark, LayoutGrid, Heart } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../theme/colors';
import FinanceBottomNav from '../../components/FinanceBottomNav';

const { width } = Dimensions.get('window');
const columnWidth = width / 3;

const ProfileVideoFeedScreen = () => {
  const navigation = useNavigation<any>();

  const stats = [
    { label: 'Following', value: '14' },
    { label: 'Followers', value: '38' },
    { label: 'Likes', value: '91' },
  ];

  const posts = [
    { id: '1', image: 'https://www.figma.com/api/mcp/asset/761a5920-edc7-4835-9cff-6f8598a98734' },
    { id: '2', image: 'https://www.figma.com/api/mcp/asset/893b304e-ff89-40a6-ac61-fc0f6ea2a8fe' },
    { id: '3', image: 'https://www.figma.com/api/mcp/asset/4b39b099-23ce-427f-9479-2475471d2937' },
    { id: '4', image: 'https://www.figma.com/api/mcp/asset/368cc9d2-5715-4674-8840-7f23089d7b42' },
    { id: '5', image: 'https://www.figma.com/api/mcp/asset/2967676e-5264-473d-8e4a-97745778848d' },
    { id: '6', image: 'https://www.figma.com/api/mcp/asset/5976b921-2e6b-4e6e-ae0c-5152a550d53c' },
  ];

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header} edges={['top']}>
        <View style={styles.profileInfo}>
          <Image 
            source={{ uri: 'https://www.figma.com/api/mcp/asset/761a5920-edc7-4835-9cff-6f8598a98734' }} 
            style={styles.avatar} 
          />
          <Text style={styles.greeting}>Hello, Romina!!</Text>
        </View>

        <View style={styles.statsRow}>
          {stats.map((stat, i) => (
            <View key={i} style={styles.statItem}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity 
            style={styles.editButton}
            onPress={() => navigation.navigate('ProfileEdit')}
          >
            <Text style={styles.editButtonText}>Edit profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bookmarkButton}>
            <Bookmark size={20} color={Colors.black} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.bioContainer}>
          <Text style={styles.bioText}>Tap to add bio</Text>
        </TouchableOpacity>
      </SafeAreaView>

      <View style={styles.contentCard}>
        <View style={styles.tabHeader}>
          <TouchableOpacity style={styles.tabItem}>
            <LayoutGrid size={24} color={Colors.black} />
            <View style={styles.activeIndicator} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Heart size={24} color={Colors.gray} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('MainVideoFeed')}>
              <Image source={{ uri: item.image }} style={styles.postThumb} />
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.postGrid}
        />
      </View>

      <FinanceBottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D62DF', // Exact blue from Figma rebuild
  },
  header: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#FF76A8',
  },
  greeting: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 16,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 32,
    paddingHorizontal: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  statLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: 'rgba(255,255,255,0.8)',
    marginTop: 4,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 32,
    gap: 12,
  },
  editButton: {
    flex: 1,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButtonText: {
    fontSize: 15,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    color: '#000000',
  },
  bookmarkButton: {
    width: 48,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bioContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  bioText: {
    fontSize: 15,
    fontFamily: 'Inter-Medium',
    color: '#FFFFFF',
  },
  contentCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: -20,
    overflow: 'hidden',
  },
  tabHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  tabItem: {
    paddingVertical: 16,
    alignItems: 'center',
    flex: 1,
  },
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    width: 40,
    height: 3,
    backgroundColor: Colors.black,
    borderRadius: 2,
  },
  postGrid: {
    paddingBottom: 100,
  },
  postThumb: {
    width: columnWidth,
    height: columnWidth * 1.2,
    borderWidth: 0.5,
    borderColor: '#FFF',
  },
});

export default ProfileVideoFeedScreen;
