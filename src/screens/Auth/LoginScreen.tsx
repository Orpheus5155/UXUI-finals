import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, ArrowRight } from 'lucide-react-native';
import { Colors } from '../../theme/colors';
import { useAuth } from '../../context/AuthContext';

const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
  const navigation = useNavigation();
  const { login } = useAuth();
  const [pin, setPin] = useState(['', '', '', '']);


  return (
    <View style={styles.container}>
      <View style={styles.blueBackground}>
        {/* Large Logo Pattern in background */}
        <Image 
          source={require('../../../assets/images/appicon.png')} 
          style={styles.bgPattern}
          resizeMode="cover"
        />

        <SafeAreaView style={styles.safeArea}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <ArrowLeft size={30} color="white" />
          </TouchableOpacity>

          <View style={styles.content}>
             <View style={styles.avatarWrapper}>
                <View style={styles.avatarCircle}>
                   <Image 
                    source={{uri: 'https://cdn-icons-png.flaticon.com/512/6840/6840478.png'}} 
                    style={styles.avatarImage} 
                   />
                </View>
             </View>

             <Text style={styles.welcomeText}>Hello, Romina!!</Text>
             <Text style={styles.subText}>Type your password</Text>

             <View style={styles.pinRow}>
                {pin.map((digit, index) => (
                   <View key={index} style={styles.pinBox}>
                      <TextInput 
                        style={styles.pinInput}
                        maxLength={1}
                        keyboardType="number-pad"
                        secureTextEntry
                        value={digit}
                        placeholderTextColor="rgba(0,0,0,0.1)"
                      />
                   </View>
                ))}
             </View>

             <TouchableOpacity 
              style={styles.submitBtn}
              onPress={() => {
                login();
                navigation.navigate('MainTabs' as never);
              }}
             >
                <Text style={styles.submitBtnText}>Submit</Text>
             </TouchableOpacity>


             <View style={styles.footer}>
                <Text style={styles.notYouText}>Not you?</Text>
                <TouchableOpacity style={styles.arrowCircle} onPress={() => navigation.navigate('MainTabs' as never)}>
                   <ArrowRight size={20} color="white" />
                </TouchableOpacity>
             </View>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  blueBackground: { flex: 1, backgroundColor: '#2D62DF' },
  bgPattern: {
    position: 'absolute',
    width: width * 3,
    height: width * 3,
    top: -height * 0.2,
    left: 0,
    opacity: 0.15,
  },
  safeArea: { flex: 1 },
  backButton: { padding: 20 },
  content: { flex: 1, alignItems: 'center', paddingTop: height * 0.05 },
  avatarWrapper: { marginBottom: 30 },
  avatarCircle: { 
    width: 120, // Increased size to match design
    height: 120, 
    borderRadius: 60, 
    backgroundColor: '#FFB6C1', 
    borderWidth: 5, 
    borderColor: 'white',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  avatarImage: { width: '85%', height: '85%' },
  welcomeText: { fontSize: 32, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 15 },
  subText: { fontSize: 20, color: '#202020', fontWeight: '300', marginBottom: 45, opacity: 0.8 },
  pinRow: { flexDirection: 'row', gap: 12, marginBottom: 80 },
  pinBox: { 
    width: 65, 
    height: 65, 
    backgroundColor: 'white', 
    borderRadius: 15, 
    justifyContent: 'center', 
    alignItems: 'center', 
    shadowColor: '#000', 
    shadowOpacity: 0.08, 
    shadowRadius: 8, 
    elevation: 3 
  },
  pinInput: { fontSize: 28, textAlign: 'center', width: '100%', fontWeight: 'bold' },
  submitBtn: { 
    backgroundColor: '#004CFF', 
    width: width * 0.85, 
    height: 65, 
    borderRadius: 18, 
    justifyContent: 'center', 
    alignItems: 'center',
    shadowColor: "#004CFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  submitBtnText: { color: 'white', fontSize: 22, fontWeight: '400' },
  footer: { position: 'absolute', bottom: 40, flexDirection: 'row', alignItems: 'center', gap: 12 },
  notYouText: { color: '#202020', fontSize: 16, opacity: 0.7 },
  arrowCircle: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#004CFF', justifyContent: 'center', alignItems: 'center' },
});

export default LoginScreen;
