import React from 'react';
import { 
  View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, 
  TextInput, StatusBar 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../theme/colors';

const ProfileEditScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerAction}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={[styles.headerAction, { color: Colors.primary, fontWeight: 'bold' }]}>Done</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.avatarSection}>
          <Image 
            source={{ uri: 'https://www.figma.com/api/mcp/asset/761a5920-edc7-4835-9cff-6f8598a98734' }} 
            style={styles.avatar} 
          />
          <TouchableOpacity>
            <Text style={styles.changePhotoText}>Change Profile Photo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formSection}>
          <EditField label="Name" value="Romina" />
          <EditField label="Username" value="rmina" />
          <EditField label="Website" value="" placeholder="Website" />
          <EditField label="Bio" value="Profile bio goes here" />
        </View>

        <TouchableOpacity style={styles.switchAccountButton}>
          <Text style={styles.switchAccountText}>Switch to Professional Account</Text>
        </TouchableOpacity>

        <View style={styles.privateHeader}>
          <Text style={styles.privateHeaderText}>Private Information</Text>
        </View>

        <View style={styles.formSection}>
          <EditField label="Email" value="romina@gmail.com" />
          <EditField label="Phone" value="+1 202 555 0147" />
          <EditField label="Gender" value="Male" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const EditField = ({ label, value, placeholder }: any) => (
  <View style={styles.fieldContainer}>
    <Text style={styles.fieldLabel}>{label}</Text>
    <View style={styles.inputWrapper}>
      <TextInput 
        style={styles.fieldInput} 
        defaultValue={value} 
        placeholder={placeholder} 
        placeholderTextColor="#D1D5DB"
      />
    </View>
  </View>
);

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
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  headerAction: {
    fontSize: 16,
    color: '#1F2937',
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    color: '#000',
  },
  avatarSection: {
    alignItems: 'center',
    paddingVertical: 32,
    backgroundColor: '#2D62DF', // Matching Profile Feed Blue
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#FF76A8',
  },
  changePhotoText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    marginTop: 16,
  },
  formSection: {
    paddingHorizontal: 16,
  },
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  fieldLabel: {
    width: 100,
    fontSize: 15,
    fontFamily: 'Inter-Medium',
    color: '#1F2937',
  },
  inputWrapper: {
    flex: 1,
  },
  fieldInput: {
    fontSize: 15,
    fontFamily: 'Inter-Medium',
    color: '#000',
  },
  switchAccountButton: {
    padding: 16,
    marginTop: 12,
  },
  switchAccountText: {
    color: '#2D62DF',
    fontSize: 15,
    fontFamily: 'Inter-Medium',
  },
  privateHeader: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  privateHeaderText: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    color: '#000',
  },
});

export default ProfileEditScreen;
