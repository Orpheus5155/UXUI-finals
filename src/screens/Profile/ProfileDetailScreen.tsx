import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, MoreVertical, Edit2, Award, Users, ShieldCheck } from 'lucide-react-native';
import { Colors } from '../../theme/colors';

const { width } = Dimensions.get('window');


const ProfileDetailScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        
        {/* Header Section */}
        <View style={styles.headerContainer}>
          {/* Background Image */}
          <Image 
            source={require('../../../assets/images/bgprf.png')} 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 280 }} 
            resizeMode="cover"
          />

          {/* Header Top Bar */}

          <View style={styles.headerTop}>

              <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
                <ArrowLeft size={24} color={Colors.black} />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Profile</Text>
              <TouchableOpacity style={styles.iconButton}>
                <MoreVertical size={24} color={Colors.black} />
              </TouchableOpacity>
          </View>

          {/* Avatar & Info */}
          <View style={styles.avatarSection}>

            <View style={styles.avatarWrapper}>
              <Image 
                source={{uri: 'https://cdn-icons-png.flaticon.com/512/6840/6840478.png'}} 
                style={styles.avatarImage} 
              />
            </View>
            <Text style={styles.nameText}>Romina</Text>
            <Text style={styles.emailText}>rmn@smart.com</Text>
          </View>
        </View>

        <View style={styles.mainContent}>
          {/* 3 Stats Cards */}
          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Text style={styles.statTitle}>Customer Rank</Text>
              <View style={styles.statIconPlaceholder}>
                <Image source={require('../../../assets/images/customerranl.png')} style={{ width: 40, height: 40 }} resizeMode="contain" />
              </View>
            </View>

            <View style={styles.statCard}>
              <Text style={styles.statTitle}>Interact</Text>
              <View style={styles.statIconPlaceholder}>
                <Image source={require('../../../assets/images/interactuser.png')} style={{ width: 40, height: 40 }} resizeMode="contain" />
              </View>
              <Text style={styles.statValue}>20.000 User</Text>
            </View>

            <View style={styles.statCard}>
              <Text style={styles.statTitle}>Medal</Text>
              <View style={styles.statIconPlaceholder}>
                <Image source={require('../../../assets/images/medal.png')} style={{ width: 40, height: 40 }} resizeMode="contain" />
              </View>
            </View>
          </View>


          {/* Personal Information */}
          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>Personal Information</Text>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Name</Text>
              <Text style={styles.infoColon}>:</Text>
              <Text style={styles.infoValue}>Romina</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoColon}>:</Text>
              <Text style={styles.infoValue}>rmn@smart.com</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Location</Text>
              <Text style={styles.infoColon}>:</Text>
              <Text style={styles.infoValue}>Da Nang</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Zip Code</Text>
              <Text style={styles.infoColon}>:</Text>
              <Text style={styles.infoValue}>67000</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Phone Number</Text>
              <Text style={styles.infoColon}>:</Text>
              <Text style={styles.infoValue}>0987654321</Text>
            </View>
          </View>

          {/* Update Button */}
          <TouchableOpacity 
            style={styles.updateButton}
            onPress={() => navigation.navigate('EditProfile' as never)}
          >
            <Text style={styles.updateButtonText}>Update your profile</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  headerContainer: {
    height: 300,
    position: 'relative',
  },
  blueBackground: {
    backgroundColor: '#00A3FF',
    height: 220,
    width: '100%',
    position: 'absolute',
    top: 0,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 40,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  iconButton: { padding: 5 },
  headerTitle: { fontSize: 16, fontWeight: 'bold', color: Colors.black },
  waveOverlay: {
    position: 'absolute',
    bottom: 50,
    left: -50,
    width: 200,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 100,
    opacity: 0.1,
  },
  avatarSection: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  avatarWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFB6C1', // Pinkish background for avatar
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
    borderWidth: 3,
    borderColor: 'white',
    marginBottom: 10,
  },
  avatarImage: { width: 90, height: 90, borderRadius: 45 },
  nameText: { fontSize: 24, fontWeight: 'bold', color: Colors.black },
  emailText: { fontSize: 12, color: Colors.textSecondary, marginTop: 2 },
  
  mainContent: { paddingHorizontal: 20, paddingTop: 20 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 },
  statCard: {
    width: '31%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    minHeight: 110,
  },
  statTitle: { fontSize: 10, fontWeight: '500', marginBottom: 15, textAlign: 'center' },
  statIconPlaceholder: { height: 40, justifyContent: 'center', alignItems: 'center' },
  statValue: { fontSize: 9, marginTop: 10, color: Colors.textSecondary },

  infoSection: { marginBottom: 30 },
  sectionTitle: { fontSize: 12, fontWeight: 'bold', marginBottom: 20 },
  infoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  infoLabel: { width: 100, fontSize: 13, color: Colors.black },
  infoColon: { width: 20, fontSize: 13, color: Colors.black },
  infoValue: { flex: 1, fontSize: 13, textAlign: 'right', color: Colors.black },

  updateButton: {
    backgroundColor: '#2D62DF',
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
    shadowColor: "#2D62DF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  updateButtonText: { color: 'white', fontSize: 14, fontWeight: '500' },
});

export default ProfileDetailScreen;
