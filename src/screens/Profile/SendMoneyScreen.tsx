import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, Bell, User } from 'lucide-react-native';
import { Colors } from '../../theme/colors';

const SendMoneyScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image 
          source={require('../../../assets/images/appicon.png')} 
          style={styles.backgroundImage}
          resizeMode="cover"
        />
        
        {/* Back Button Row */}
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <ArrowLeft size={28} color={Colors.white} />
          </TouchableOpacity>
        </View>

        {/* User Info Row */}
        <View style={styles.userRow}>
          <View style={styles.avatarWrapper}>
            <Image 
              source={{uri: 'https://cdn-icons-png.flaticon.com/512/6840/6840478.png'}} 
              style={styles.avatarImage} 
            />
          </View>
          <Text style={styles.greetingText}>Hello, Romina!!</Text>
          <TouchableOpacity style={styles.bellButton}>
            <Bell size={24} color={Colors.white} />
          </TouchableOpacity>
        </View>

        <View style={styles.titleSection}>
          <Text style={styles.titleText}>Send your money to</Text>
        </View>
      </View>

      <View style={styles.mainContent}>
        {/* Search Input */}
        <View style={styles.searchContainer}>
          <User size={22} color="#999" />
          <TextInput 
            style={styles.searchInput}
            placeholder="Search your contact"
            placeholderTextColor="#b7b7b7"
          />
        </View>

        <Text style={styles.sectionTitle}>Recent Contact</Text>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }}>
          {[...Array(6)].map((_, i) => (
            <ContactItem 
              key={i} 
              name="VKUNEE" 
              account="Bank - 012 345 678 9134" 
              onPress={() => navigation.navigate('SendMoneyAmount' as never)}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const ContactItem = ({ name, account, onPress }: any) => (
  <TouchableOpacity style={styles.contactItem} onPress={onPress}>
    <View style={styles.contactAvatar}>

      <Image 
        source={{uri: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png'}} 
        style={styles.contactImage} 
      />
    </View>
    <View style={styles.contactInfo}>
      <Text style={styles.contactName}>{name}</Text>
      <Text style={styles.contactAccount}>{account}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2D62DF' },
  headerContainer: {
    backgroundColor: '#2D62DF',
    height: 220,
    paddingTop: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  backgroundImage: {
    position: 'absolute',
    width: '150%',
    height: '150%',
    top: '-20%',
    left: '-20%',
    opacity: 0.1,
  },
  topRow: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  backButton: { padding: 5, alignSelf: 'flex-start' },
  userRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  avatarWrapper: {
    width: 60, height: 60, borderRadius: 30, backgroundColor: '#FFB6C1',
    justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: 'white',
  },
  avatarImage: { width: 56, height: 56, borderRadius: 28 },
  greetingText: { fontSize: 24, fontWeight: 'bold', color: 'white', flex: 1, textAlign: 'center' },
  bellButton: { padding: 5 },
  
  titleSection: { alignItems: 'center', marginTop: 20 },
  titleText: { fontSize: 18, color: 'white' },

  mainContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 25,
    paddingTop: 30,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#A8D7F4',
    borderRadius: 35,
    paddingHorizontal: 20,
    height: 55,
    marginBottom: 25,
  },
  searchInput: { flex: 1, marginLeft: 15, fontSize: 16, color: Colors.black },
  sectionTitle: { fontSize: 18, color: '#4271E2', marginBottom: 15 },
  
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  contactAvatar: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    backgroundColor: '#FF6B6B',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    overflow: 'hidden',
  },
  contactImage: { width: '100%', height: '100%' },
  contactInfo: { flex: 1 },
  contactName: { fontSize: 18, color: Colors.black, marginBottom: 4 },
  contactAccount: { fontSize: 14, color: '#B8B8B8' },
});

export default SendMoneyScreen;

