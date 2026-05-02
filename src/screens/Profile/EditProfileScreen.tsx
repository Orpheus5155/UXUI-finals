import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image, Dimensions, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, MoreVertical, Edit2, Award, Users, ShieldCheck } from 'lucide-react-native';
import { Colors } from '../../theme/colors';

const { width } = Dimensions.get('window');


const EditProfileScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('Romina');
  const [email, setEmail] = useState('rmn@smart.com');
  const [location, setLocation] = useState('Da Nang');
  const [zipCode, setZipCode] = useState('67000');
  const [phone, setPhone] = useState('0987654321');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        
        <View style={styles.headerContainer}>
          <Image 
            source={require('../../../assets/images/bgprf.png')} 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 280 }} 
            resizeMode="cover"
          />

          <View style={styles.headerTop}>

              <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
                <ArrowLeft size={24} color={Colors.black} />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Edit profile</Text>
              <TouchableOpacity style={styles.iconButton}>
                <MoreVertical size={24} color={Colors.black} />
              </TouchableOpacity>
          </View>


          <View style={styles.avatarSection}>

            <View style={styles.avatarWrapper}>
              <Image 
                source={{uri: 'https://cdn-icons-png.flaticon.com/512/6840/6840478.png'}} 
                style={styles.avatarImage} 
              />
              <TouchableOpacity style={styles.editIconBtn}>
                <Edit2 size={12} color="white" />
              </TouchableOpacity>
            </View>
            <Text style={styles.nameText}>Romina</Text>
            <Text style={styles.emailText}>rmn@smart.com</Text>
          </View>
        </View>

        <View style={styles.mainContent}>
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


          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>Personal Information</Text>

            <View style={styles.formRow}>
              <TextInput 
                style={styles.inputHalf} 
                value={name}
                onChangeText={setName}
                placeholder="Your name"
                placeholderTextColor="#CCC"
              />
              <TextInput 
                style={styles.inputHalf} 
                value={email}
                onChangeText={setEmail}
                placeholder="Your mail"
                placeholderTextColor="#CCC"
                keyboardType="email-address"
              />
            </View>

            <View style={styles.formRow}>
              <TextInput 
                style={styles.inputHalf} 
                value={location}
                onChangeText={setLocation}
                placeholder="Your location"
                placeholderTextColor="#CCC"
              />
              <TextInput 
                style={styles.inputHalf} 
                value={zipCode}
                onChangeText={setZipCode}
                placeholder="Your zip code"
                placeholderTextColor="#CCC"
                keyboardType="number-pad"
              />
            </View>

            <TextInput 
              style={styles.inputFull} 
              value={phone}
              onChangeText={setPhone}
              placeholder="Your phone"
              placeholderTextColor="#CCC"
              keyboardType="phone-pad"
            />
          </View>

          <TouchableOpacity 
            style={styles.saveButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  headerContainer: { height: 300, position: 'relative' },
  blueBackground: { backgroundColor: '#00A3FF', height: 220, width: '100%', position: 'absolute', top: 0, borderBottomLeftRadius: 100, borderBottomRightRadius: 40 },
  headerTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 20 },
  iconButton: { padding: 5 },
  headerTitle: { fontSize: 16, fontWeight: 'bold', color: Colors.black },
  avatarSection: { alignItems: 'center', position: 'absolute', bottom: 0, width: '100%' },
  avatarWrapper: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#FFB6C1', justifyContent: 'center', alignItems: 'center', shadowColor: "#000", shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.2, shadowRadius: 10, elevation: 8, borderWidth: 3, borderColor: 'white', marginBottom: 10 },
  avatarImage: { width: 90, height: 90, borderRadius: 45 },
  editIconBtn: { position: 'absolute', bottom: 0, right: 0, backgroundColor: '#FF5C5C', width: 28, height: 28, borderRadius: 14, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: 'white' },
  nameText: { fontSize: 24, fontWeight: 'bold', color: Colors.black },
  emailText: { fontSize: 12, color: Colors.textSecondary, marginTop: 2 },
  mainContent: { paddingHorizontal: 20, paddingTop: 20 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 },
  statCard: { width: '31%', backgroundColor: 'white', borderRadius: 15, padding: 10, alignItems: 'center', justifyContent: 'center', shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 5, elevation: 3, minHeight: 110 },
  statTitle: { fontSize: 10, fontWeight: '500', marginBottom: 15, textAlign: 'center' },
  statIconPlaceholder: { height: 40, justifyContent: 'center', alignItems: 'center' },
  statValue: { fontSize: 9, marginTop: 10, color: Colors.textSecondary },
  infoSection: { marginBottom: 30 },
  sectionTitle: { fontSize: 12, fontWeight: 'bold', marginBottom: 20 },
  formRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  inputHalf: { width: '48%', backgroundColor: 'white', borderRadius: 20, paddingHorizontal: 20, paddingVertical: 12, fontSize: 12, color: Colors.black, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 5, elevation: 2 },
  inputFull: { width: '100%', backgroundColor: 'white', borderRadius: 20, paddingHorizontal: 20, paddingVertical: 12, fontSize: 12, color: Colors.black, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 5, elevation: 2 },
  saveButton: { backgroundColor: '#2D62DF', borderRadius: 30, paddingVertical: 15, alignItems: 'center', width: '100%', shadowColor: "#2D62DF", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 5 },
  saveButtonText: { color: 'white', fontSize: 16, fontWeight: '500' },
});

export default EditProfileScreen;
