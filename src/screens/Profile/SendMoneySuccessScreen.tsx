import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, Bell, CheckCircle2 } from 'lucide-react-native';
import { Colors } from '../../theme/colors';

const SendMoneySuccessScreen = () => {
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
          <Text style={styles.titleText}>Your transaction information</Text>
        </View>
      </View>

      <View style={styles.bottomBackground} />

      <View style={styles.cardWrapper}>
        <View style={styles.successCard}>
          <View style={styles.successHeader}>
            <CheckCircle2 size={64} color="#4CD964" fill="#E5F9E7" />
            <Text style={styles.successTitle}>Transfer Successful !!!!!!</Text>
            <Text style={styles.successSubtitle}>Your money has been transfered successfully!!!</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.detailsSection}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Transfer Amount</Text>
              <Text style={styles.detailValue}>$20.00</Text>
            </View>

            <View style={styles.contactCard}>
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

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Date & Time</Text>
              <Text style={styles.detailValue}>30 April 2026, 11:00 PM</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>No. Ref</Text>
              <Text style={styles.detailValue}>12312312356546</Text>
            </View>
          </View>

          <TouchableOpacity 
            style={styles.seeDetailsBtn}
            onPress={() => navigation.navigate('TransactionDetail' as never)}
          >
            <Text style={styles.seeDetailsText}>SEE DETAILS</Text>
          </TouchableOpacity>

        </View>
      </View>
      
      <View style={styles.footer}>
        <TouchableOpacity style={styles.doneButton} onPress={() => navigation.navigate('SmartWallet' as never)}>
          <Text style={styles.doneText}>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

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

  bottomBackground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '55%',
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },

  cardWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: -20,
    zIndex: 10,
  },
  successCard: {
    backgroundColor: 'white',
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    overflow: 'hidden',
  },
  successHeader: {
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  successTitle: {
    fontSize: 20,
    color: Colors.black,
    marginTop: 15,
  },
  successSubtitle: {
    fontSize: 13,
    color: '#B9B9B9',
    textAlign: 'center',
    marginTop: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    width: '100%',
  },
  detailsSection: {
    padding: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  detailLabel: {
    fontSize: 14,
    color: '#B9B9B9',
  },
  detailValue: {
    fontSize: 14,
    color: Colors.black,
  },
  
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 12,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: '#F4F4F4',
  },
  contactAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FF6B6B',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    overflow: 'hidden',
  },
  contactImage: { width: '100%', height: '100%' },
  contactInfo: { flex: 1 },
  contactName: { fontSize: 18, color: Colors.black, marginBottom: 2 },
  contactAccount: { fontSize: 14, color: '#B8B8B8' },

  seeDetailsBtn: {
    backgroundColor: '#EAEAEA',
    paddingVertical: 18,
    alignItems: 'center',
  },
  seeDetailsText: {
    fontSize: 14,
    color: Colors.black,
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 25,
    paddingBottom: 30,
    zIndex: 20,
  },
  doneButton: {
    backgroundColor: '#4271E2',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doneText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SendMoneySuccessScreen;
