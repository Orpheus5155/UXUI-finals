import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Users, ChevronRight } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../theme/colors';

const MessageNewScreen = () => {
  const navigation = useNavigation();

  const contacts = [
    { id: '1', name: 'Martha Craig', avatar: 'https://www.figma.com/api/mcp/asset/a9f4fccb-6ae2-49ad-9a79-2f30fd5e57ce' },
    { id: '2', name: 'Kieron Dotson', avatar: 'https://www.figma.com/api/mcp/asset/9713ca3c-bd08-48ac-af6c-3b0d6f02d64a' },
    { id: '3', name: 'Zack John', avatar: 'https://www.figma.com/api/mcp/asset/1e4f454f-170f-4886-932d-20be4e28659b' },
    { id: '4', name: 'Jamie Franco', avatar: 'https://www.figma.com/api/mcp/asset/0e1b10ab-228c-4469-abb3-52314cf3b2aa' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('MessageMain')}>
          <Text style={styles.headerAction}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New message</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <View style={styles.toContainer}>
        <Text style={styles.toLabel}>To:</Text>
        <TextInput style={styles.toInput} autoFocus />
      </View>

      <TouchableOpacity style={styles.groupItem}>
        <View style={styles.groupIcon}>
          <Users size={24} color={Colors.black} />
        </View>
        <Text style={styles.groupText}>Create a New Group</Text>
        <ChevronRight size={20} color={Colors.gray} />
      </TouchableOpacity>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>люди</Text>
      </View>

      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.contactItem} onPress={() => navigation.navigate('MessageText')}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <Text style={styles.contactName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
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
    color: '#000',
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    color: '#000',
  },
  headerPlaceholder: {
    width: 50,
  },
  toContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    backgroundColor: '#F9FAFB',
  },
  toLabel: {
    fontSize: 16,
    color: Colors.gray,
    marginRight: 8,
  },
  toInput: {
    flex: 1,
    fontSize: 16,
    color: Colors.primary,
  },
  groupItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  groupIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  groupText: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    color: '#000',
  },
  sectionHeader: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sectionTitle: {
    fontSize: 14,
    color: Colors.gray,
    textTransform: 'lowercase',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 16,
  },
  contactName: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    color: '#000',
  },
});

export default MessageNewScreen;
