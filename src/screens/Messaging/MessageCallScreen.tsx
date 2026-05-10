import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Volume2, Mic, PhoneOff, MessageSquare } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const MessageCallScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" transparent backgroundColor="transparent" />
      <Image 
        source={{ uri: 'https://www.figma.com/api/mcp/asset/3929a55a-8c8c-4467-9905-870b1cc130b9' }} 
        style={styles.bgImage} 
        blurRadius={20}
      />
      <View style={styles.overlay} />
      
      <SafeAreaView style={styles.content} edges={['top', 'bottom']}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerBtn}>
             <MessageSquare size={20} color="#FFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.centerContent}>
          <Image 
            source={{ uri: 'https://www.figma.com/api/mcp/asset/6ced1545-bebb-4ede-af3f-93e78e5c5a7b' }} 
            style={styles.avatar} 
          />
          <Text style={styles.name}>Martha Craig</Text>
          <Text style={styles.status}>Contacting...</Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.footerRow}>
             <TouchableOpacity style={styles.actionBtn}>
               <Volume2 size={28} color="#FFF" />
             </TouchableOpacity>
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
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
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
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 24,
  },
  name: {
    fontSize: 32,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 8,
  },
  status: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.7)',
  },
  footer: {
    paddingBottom: 60,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 32,
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

export default MessageCallScreen;
