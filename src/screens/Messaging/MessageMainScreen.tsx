import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Plus, Search, Camera, ChevronLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../theme/colors';

const MessageMainScreen = () => {
  const navigation = useNavigation<any>();

  const chats = [
    // ... (rest of chats)
    { id: '1', name: 'Martha Craig', lastMessage: 'Have a nice day, bro!', time: 'now', avatar: 'https://www.figma.com/api/mcp/asset/485c80d6-e4b3-4c49-87a3-8aabca4f1d5d' },
    { id: '2', name: 'Kieron Dotson', lastMessage: 'I heard this is a good movie, s...', time: 'now', avatar: 'https://www.figma.com/api/mcp/asset/3024a151-03a6-4776-b1cd-f48d56f6567c' },
    { id: '3', name: 'Zack John', lastMessage: 'See you on the next meeting!', time: '15m', avatar: 'https://www.figma.com/api/mcp/asset/7a9fc48a-4ba0-40af-88f3-0aca94a57872' },
    { id: '4', name: 'Jamie Franco', lastMessage: 'Sounds good 😂😂😂', time: '20m', avatar: 'https://www.figma.com/api/mcp/asset/0e1b10ab-228c-4469-abb3-52314cf3b2aa' },
    { id: '5', name: 'Kiero John', lastMessage: 'The new design looks cool, b...', time: '1m', avatar: 'https://www.figma.com/api/mcp/asset/cb99fb13-a91c-473e-9ad7-6dd6c1196e76' },
    { id: '6', name: 'Max Jacobson', lastMessage: 'Thank you, bro!', time: '2h', avatar: 'https://www.figma.com/api/mcp/asset/8ee60b51-7b94-4069-af56-ab2504cedc93' },
    { id: '7', name: 'Bill Christ', lastMessage: "Yeap, I'm going to travel in To...", time: '4h', avatar: 'https://www.figma.com/api/mcp/asset/900ceb7a-aadf-49ee-a9a8-30389da242b8' },
    { id: '8', name: 'Max Humphrey', lastMessage: 'Instagram UI is pretty good', time: '5h', avatar: 'https://www.figma.com/api/mcp/asset/66bc44dd-f705-4f9a-b6c3-981b34b6d8d7' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeft size={28} color={Colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Message</Text>
        <TouchableOpacity onPress={() => navigation.navigate('MessageNew')}>
          <Plus size={28} color={Colors.black} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search size={20} color={Colors.gray} />
          <TextInput 
            style={styles.searchInput} 
            placeholder="Search" 
            placeholderTextColor={Colors.gray} 
          />
        </View>
      </View>

      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.chatItem}
            onPress={() => navigation.navigate('MessageText')}
          >
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={styles.chatInfo}>
              <View style={styles.chatHeader}>
                <Text style={styles.name}>{item.name}</Text>
              </View>
              <Text style={styles.lastMessage} numberOfLines={1}>
                {item.lastMessage} · {item.time}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
      />

      <TouchableOpacity 
        style={styles.cameraButton}
        onPress={() => navigation.navigate('MessageCamera')}
      >
        <Camera size={24} color={Colors.primary} />
        <Text style={styles.cameraText}>Camera</Text>
      </TouchableOpacity>
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
  headerPlaceholder: {
    width: 28,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    color: '#000',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 44,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#000',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  chatInfo: {
    flex: 1,
    marginLeft: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#F3F4F6',
    paddingBottom: 12,
    justifyContent: 'center',
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    color: '#000',
  },
  lastMessage: {
    fontSize: 14,
    color: Colors.gray,
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#F9FAFB',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  cameraText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    color: Colors.primary,
  },
});

export default MessageMainScreen;
