import React from 'react';
import { 
  View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, 
  FlatList, StatusBar 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronDown, Square, LayoutGrid, Infinity } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../theme/colors';

const { width } = Dimensions.get('window');
const columnWidth = width / 4;

const MainVideoAddScreen = () => {
  const navigation = useNavigation();

  const galleryItems = [
    { id: '1', image: 'https://www.figma.com/api/mcp/asset/2d7d1f50-d175-4df4-a9b8-30caa31b6da4' },
    { id: '2', image: 'https://www.figma.com/api/mcp/asset/67e0ce4b-5015-4559-84ff-89ce728160b7' },
    { id: '3', image: 'https://www.figma.com/api/mcp/asset/2d1735b1-891d-48a3-9a3d-d177d69d87e7' },
    { id: '4', image: 'https://www.figma.com/api/mcp/asset/35c4a7fa-4b59-4df3-b5e2-7d4d592947d6' },
    { id: '5', image: 'https://www.figma.com/api/mcp/asset/1b545354-984b-42a3-a3f7-2f324a6318a7' },
    { id: '6', image: 'https://www.figma.com/api/mcp/asset/c22fe2ad-f952-405b-9f49-43c83389297e' },
    { id: '7', image: 'https://www.figma.com/api/mcp/asset/6bbb229e-023c-4af0-824a-a97054bf8f1e' },
    { id: '8', image: 'https://www.figma.com/api/mcp/asset/55d27589-0517-4571-99d4-f41f591471aa' },
    { id: '9', image: 'https://www.figma.com/api/mcp/asset/8ca6f5a3-7aff-474d-b8e0-cfcacbc5f6c2' },
    { id: '10', image: 'https://www.figma.com/api/mcp/asset/4264f924-c843-45a9-b40b-6bae15457dc3' },
    { id: '11', image: 'https://www.figma.com/api/mcp/asset/5a84caf0-894e-494e-ba60-2452890ea683' },
    { id: '12', image: 'https://www.figma.com/api/mcp/asset/4c173338-667f-4dfd-b8b9-72e5c9bfd833' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
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
          source={{ uri: 'https://www.figma.com/api/mcp/asset/9a7f4b4a-5ff4-493a-9d3b-7056caae0a3a' }} 
          style={styles.previewImage} 
        />
        <View style={styles.previewActions}>
          <TouchableOpacity style={styles.actionBtn}>
             <Infinity size={20} color="#FFF" />
          </TouchableOpacity>
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
    paddingBottom: 10,
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
    color: '#000',
  },
  inactiveTabText: {
    fontSize: 15,
    fontFamily: 'Inter-Medium',
    color: Colors.gray,
  },
});

export default MainVideoAddScreen;
