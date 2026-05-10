import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MessageSquare, Camera, Mic, PhoneOff, ChevronDown } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../theme/colors';

const MessageVideoScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" transparent backgroundColor="transparent" />
      <Image 
        source={{ uri: 'https://www.figma.com/api/mcp/asset/a1e3d2ec-c8a7-43a3-8700-0bd27a167637' }} 
        style={styles.bgImage} 
      />
      
      <SafeAreaView style={styles.overlay} edges={['top', 'bottom']}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerBtn}>
             <ChevronDown size={24} color="#FFF" />
          </TouchableOpacity>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.headerBtn}>
              <MessageSquare size={20} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerBtn}>
              <Camera size={20} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.centerContent}>
          <View style={styles.avatarBorder}>
            <Image 
              source={{ uri: 'https://www.figma.com/api/mcp/asset/485c80d6-e4b3-4c49-87a3-8aabca4f1d5d' }} 
              style={styles.avatar} 
            />
          </View>
          <Text style={styles.name}>Martha Craig</Text>
          <Text style={styles.status}>Contacting...</Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.footerRow}>
             <TouchableOpacity style={styles.actionBtn}>
               <Mic size={28} color="#FFF" />
             </TouchableOpacity>
             <TouchableOpacity 
              style={[styles.actionBtn, styles.endCallBtn]}
              onPress={() => navigation.navigate('MessageText')}
             >
               <PhoneOff size={28} color="#FFF" />
             </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  bgImage: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.8,
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  headerActions: {
    flexDirection: 'row',
    gap: 16,
  },
  headerBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerContent: {
    alignItems: 'center',
  },
  avatarBorder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FFF',
    padding: 3,
    marginBottom: 16,
  },
  avatar: {
    flex: 1,
    borderRadius: 47,
  },
  name: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 4,
  },
  status: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.7)',
  },
  footer: {
    paddingBottom: 40,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40,
  },
  actionBtn: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  endCallBtn: {
    backgroundColor: '#FF3B30',
  },
});

export default MessageVideoScreen;
