import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { X, Bolt, RefreshCcw, Image as ImageIcon } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const MessageCameraScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" transparent backgroundColor="transparent" />
      <Image 
        source={{ uri: 'https://www.figma.com/api/mcp/asset/b5a5d940-e17d-4bda-a763-9c47946607fd' }} 
        style={styles.preview} 
      />
      
      <SafeAreaView style={styles.overlay} edges={['top', 'bottom']}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('MessageText')}>
            <X size={32} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Bolt size={32} color="#FFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.bottomSection}>
          <View style={styles.captureRow}>
            <TouchableOpacity style={styles.galleryButton}>
              <ImageIcon size={28} color="#FFF" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.captureButton}>
              <View style={styles.captureInner} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.flipButton}>
              <RefreshCcw size={28} color="#FFF" />
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
  preview: {
    ...StyleSheet.absoluteFillObject,
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
  bottomSection: {
    paddingBottom: 40,
  },
  captureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  galleryButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flipButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 5,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureInner: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FFF',
  },
});

export default MessageCameraScreen;
