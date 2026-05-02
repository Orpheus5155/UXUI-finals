import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, Bell } from 'lucide-react-native';
import { Colors } from '../../theme/colors';

const SmartWalletHistoryScreen = () => {
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
          <Text style={styles.titleText}>Your transactions history</Text>
        </View>
      </View>

      <View style={styles.mainContent}>
        <Text style={styles.sectionTitle}>Last Transaction</Text>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }}>
          {[...Array(6)].map((_, i) => (
            <TransactionCard 
              key={i}
              onPress={() => navigation.navigate('TransactionDetail' as never)}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const TransactionCard = ({ onPress }: any) => (
  <TouchableOpacity style={styles.txCard} onPress={onPress}>
    <View style={styles.txIconContainer}>
      <Image 
        source={{uri: 'https://cdn-icons-png.flaticon.com/512/3143/3143160.png'}} 
        style={styles.txIcon} 
        tintColor="white"
      />
    </View>
    <View style={styles.txInfo}>
      <Text style={styles.txTitle}>Cash in</Text>
      <Text style={styles.txSubtitle}>From MB Bank</Text>
      <Text style={styles.txDate}>20 April 2026</Text>
    </View>
    <View style={styles.txAmountContainer}>
      <Text style={styles.txAmount}>+$30.00</Text>
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
  titleText: { fontSize: 20, color: 'white' },

  mainContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 25,
    paddingTop: 30,
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: Colors.black, marginBottom: 20 },

  txCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#386CE6',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  txIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FF8A80',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  txIcon: { width: 24, height: 24 },
  txInfo: { flex: 1 },
  txTitle: { fontSize: 16, fontWeight: 'bold', color: 'white', marginBottom: 2 },
  txSubtitle: { fontSize: 13, color: '#A0B9F1', fontStyle: 'italic', marginBottom: 2 },
  txDate: { fontSize: 12, color: '#A0B9F1' },
  txAmountContainer: { justifyContent: 'center' },
  txAmount: { fontSize: 18, fontWeight: '500', color: '#00E676' },
});

export default SmartWalletHistoryScreen;
