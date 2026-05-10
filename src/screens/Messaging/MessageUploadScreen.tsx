import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronDown, Square, LayoutGrid } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../theme/colors';

const { width } = Dimensions.get('window');
const columnWidth = width / 4;

const MessageUploadScreen = () => {
  const navigation = useNavigation();

  const galleryItems = [
    { id: '1', image: 'https://www.figma.com/api/mcp/asset/66a844c8-aac1-4fe8-9516-eb375c77c8af' },
    { id: '2', image: 'https://www.figma.com/api/mcp/asset/9ea20ced-09fd-45af-8a6c-670830203a1b' },
    { id: '3', image: 'https://www.figma.com/api/mcp/asset/f312222f-4335-42fa-b1ce-7ba160cd0d72' },
    { id: '4', image: 'https://www.figma.com/api/mcp/asset/0c215574-7c34-4c7c-972f-48c429743180' },
    { id: '5', image: 'https://www.figma.com/api/mcp/asset/b96090ba-a70e-400c-b021-8099aa4ca425' },
    { id: '6', image: 'https://www.figma.com/api/mcp/asset/f734d8e5-f80a-4be0-9fd2-780064d4d9ad' },
    { id: '7', image: 'https://www.figma.com/api/mcp/asset/0e1b10ab-228c-4469-abb3-52314cf3b2aa' },
    { id: '8', image: 'https://www.figma.com/api/mcp/asset/cb99fb13-a91c-473e-9ad7-6dd6c1196e76' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerAction}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.titleContainer}>
          <Text style={styles.headerTitle}>Recents</Text>
          <ChevronDown size={16} color={Colors.gray} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={[styles.headerAction, { color: Colors.primary, fontWeight: 'bold' }]}>Next</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.previewContainer}>
        <Image 
          source={{ uri: 'https://www.figma.com/api/mcp/asset/66a844c8-aac1-4fe8-9516-eb375c77c8af' }} 
          style={styles.previewImage} 
        />
        <View style={styles.previewActions}>
           <TouchableOpacity style={styles.actionBtn}>
             <LayoutGrid size={20} color="#FFF" />
           </TouchableOpacity>
           <TouchableOpacity style={[styles.actionBtn, styles.multiSelectBtn]}>
             <Square size={16} color="#FFF" />
             <Text style={styles.btnText}>SELECT MULTIPLE</Text>
           </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={galleryItems}
        keyExtractor={(item) => item.id}
        numColumns={4}
        renderItem={({ item }) => (
          <Image source={{ uri: item.image }} style={styles.gridImage} />
        )}
      />

      <View style={styles.bottomTabs}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.activeTabText}>Library</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.inactiveTabText}>Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.inactiveTabText}>Video</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 56,
  },
  headerAction: {
    fontSize: 16,
    color: '#1f2937',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    color: '#000',
  },
  previewContainer: {
    height: 375,
    width: width,
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
  previewActions: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    flexDirection: 'row',
    gap: 8,
  },
  actionBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  multiSelectBtn: {
    width: 'auto',
    paddingHorizontal: 12,
    flexDirection: 'row',
    gap: 6,
  },
  btnText: {
    color: '#FFF',
    fontSize: 11,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
  },
  gridImage: {
    width: columnWidth,
    height: columnWidth,
    borderWidth: 0.5,
    borderColor: '#FFF',
  },
  bottomTabs: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTabText: {
    fontSize: 15,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    color: Colors.primary,
  },
  inactiveTabText: {
    fontSize: 15,
    fontFamily: 'Inter-Medium',
    color: Colors.gray,
  },
});

export default MessageUploadScreen;
