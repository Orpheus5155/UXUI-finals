import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, Bell } from 'lucide-react-native';
import { Colors } from '../../theme/colors';

const SendMoneyAmountScreen = () => {
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
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
          
          {/* Selected Contact */}
          <View style={styles.selectedContactCard}>
            <View style={styles.contactAvatar}>
              <Image 
                source={{uri: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png'}} 
                style={styles.contactImage} 
              />
            </View>
            <View style={styles.contactInfo}>
              <Text style={styles.contactName}>VKUNEE</Text>
              <Text style={styles.contactAccount}>Bank - 012 345 678 9134</Text>
            </View>
          </View>

          {/* Amount Input */}
          <View style={styles.amountContainer}>
            <TextInput 
              style={styles.amountInput}
              defaultValue="$20.00"
              keyboardType="numeric"
            />
            <View style={styles.amountUnderline} />
          </View>

          <Text style={styles.sectionTitle}>Your balance</Text>

          {/* Funding Sources */}
          <FundingSourceItem name="SMart Money" balance="$3213.0000" />
          <FundingSourceItem name="SMart Coins" balance="40000 coins" />
          <FundingSourceItem name="SMart Coins" balance="40000 coins" />
          
        </ScrollView>
        
        {/* Confirm Button */}
        <View style={styles.footer}>
          <TouchableOpacity 
            style={styles.confirmButton}
            onPress={() => navigation.navigate('SendMoneySuccess' as never)}
          >
            <Text style={styles.confirmText}>Confirm</Text>
          </TouchableOpacity>
        </View>

      </View>

    </SafeAreaView>
  );
};

const FundingSourceItem = ({ name, balance }: any) => (
  <TouchableOpacity style={styles.fundingCard}>
    <View style={styles.fundingAvatar} />
    <View style={styles.fundingInfo}>
      <Text style={styles.fundingName}>{name}</Text>
      <Text style={styles.fundingBalance}>{balance}</Text>
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
  
  selectedContactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 35,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#F4F4F4',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
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
  contactName: { fontSize: 20, color: Colors.black, marginBottom: 4 },
  contactAccount: { fontSize: 16, color: '#B8B8B8' },

  amountContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  amountInput: {
    fontSize: 40,
    color: Colors.black,
    textAlign: 'center',
    minWidth: 150,
  },
  amountUnderline: {
    height: 2,
    backgroundColor: Colors.black,
    width: 180,
    marginTop: 5,
  },

  sectionTitle: { fontSize: 20, color: '#4271E2', marginBottom: 15, marginTop: 10 },

  fundingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 35,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#F4F4F4',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  fundingAvatar: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    backgroundColor: '#C4C4C4',
    marginRight: 15,
  },
  fundingInfo: { flex: 1 },
  fundingName: { fontSize: 18, color: Colors.black, marginBottom: 4 },
  fundingBalance: { fontSize: 16, color: '#B8B8B8' },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 25,
    paddingBottom: 30,
    backgroundColor: 'white',
  },
  confirmButton: {
    backgroundColor: '#4271E2',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SendMoneyAmountScreen;
