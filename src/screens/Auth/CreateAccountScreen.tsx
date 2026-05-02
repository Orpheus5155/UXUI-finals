import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, Camera, EyeOff, ChevronDown } from 'lucide-react-native';
import { Colors } from '../../theme/colors';

const { width, height } = Dimensions.get('window');

const CreateAccountScreen = () => {
  const navigation = useNavigation();

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
            <ArrowLeft size={30} color={Colors.white} />
          </TouchableOpacity>

          <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
            <View style={styles.headerRow}>
              <View>
                <Text style={styles.title}>Create</Text>
                <Text style={styles.title}>Account</Text>
              </View>
              <TouchableOpacity style={styles.uploadContainer}>
                <View style={styles.dashedCircle}>
                   <Camera size={32} color="rgba(255,255,255,0.6)" />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.form}>
              <View style={styles.inputWrapper}>
                <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="#745C5C" />
                <EyeOff size={20} color="#745C5C" style={styles.inputIcon} />
              </View>

              <View style={styles.inputWrapper}>
                <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" placeholderTextColor="#745C5C" />
              </View>

              <View style={styles.phoneInputRow}>
                 <TouchableOpacity style={styles.countryCode}>
                    <Text style={styles.flagText}>🇬🇧</Text>
                    <ChevronDown size={14} color="#745C5C" />
                    <View style={styles.divider} />
                 </TouchableOpacity>
                 <TextInput 
                  style={[styles.input, { flex: 1, marginBottom: 0 }]} 
                  placeholder="Your number" 
                  keyboardType="phone-pad" 
                  placeholderTextColor="#745C5C"
                 />
              </View>
            </View>

            <TouchableOpacity 
              style={styles.doneButton}
              onPress={() => navigation.navigate('Login' as never)}
            >
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>

            <View style={styles.footerContainer}>
              <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Login' as never)}>
                <Text style={styles.footerText}>
                  Already have an account?
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
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
    left:  0,
    opacity: 0.15,
  },

  safeArea: { flex: 1 },
  backButton: { padding: 20 },
  content: { paddingHorizontal: 25, paddingTop: 10 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 180 },

  title: { fontSize: 50, fontWeight: 'bold', color: 'white', letterSpacing: -1, lineHeight: 54 },
  uploadContainer: { width: 90, height: 90, borderRadius: 45, justifyContent: 'center', alignItems: 'center' },
  dashedCircle: { 
    width: '100%', 
    height: '100%', 
    borderRadius: 45, 
    borderWidth: 2, 
    borderColor: 'rgba(255,255,255,0.4)', 
    borderStyle: 'dashed',
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  form: { marginBottom: 30 },
  inputWrapper: { position: 'relative', marginBottom: 20 },
  input: { backgroundColor: '#F8F8F8', height: 60, borderRadius: 30, paddingHorizontal: 25, fontSize: 16, color: '#333' },
  inputIcon: { position: 'absolute', right: 25, top: 20 },
  phoneInputRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F8F8', borderRadius: 30, height: 60, paddingHorizontal: 15 },
  countryCode: { flexDirection: 'row', alignItems: 'center', paddingRight: 10 },
  flagText: { fontSize: 20, marginRight: 5 },
  divider: { width: 1, height: 25, backgroundColor: '#DDD', marginLeft: 10 },
  doneButton: { backgroundColor: '#004CFF', height: 60, borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginTop: 10 },
  doneButtonText: { color: Colors.white, fontSize: 22, fontWeight: '300' },
  footerContainer: { marginTop: 30, alignItems: 'center' },
  cancelButton: { marginBottom: 20 },
  cancelButtonText: { color: '#202020', fontSize: 15, fontWeight: '300', opacity: 0.9 },
  footerText: { textAlign: 'center', color: '#A33535', fontSize: 15, fontWeight: '500' },
});

export default CreateAccountScreen;
