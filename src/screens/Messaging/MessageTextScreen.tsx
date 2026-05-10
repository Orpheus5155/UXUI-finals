import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, Phone, Video, Camera, Image as ImageIcon, Mic, LayoutGrid, Smile, ThumbsUp, Check } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../theme/colors';

const MessageTextScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <ChevronLeft size={24} color="#0084FF" />
          </TouchableOpacity>
          <View style={styles.userInfo}>
            <Image 
              source={{ uri: 'https://www.figma.com/api/mcp/asset/485c80d6-e4b3-4c49-87a3-8aabca4f1d5d' }} 
              style={styles.headerAvatar} 
            />
            <View>
              <Text style={styles.headerName}>Martha Craig</Text>
              <Text style={styles.headerStatus}>Message</Text>
            </View>
          </View>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity 
            style={styles.headerIcon}
            onPress={() => navigation.navigate('MessageCall')}
          >
            <Phone size={22} color={Colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.headerIcon}
            onPress={() => navigation.navigate('MessageVideo')}
          >
            <Video size={22} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.flex}
      >
        <ScrollView style={styles.chatArea} contentContainerStyle={styles.chatContent}>
          <View style={styles.sentContainer}>
            <View style={styles.sentBubble}>
              <Text style={styles.sentText}>It's morning in Tokyo 😎</Text>
            </View>
            <View style={styles.checkCircle}>
               <Check size={8} color={Colors.primary} strokeWidth={3} />
            </View>
          </View>

          <Text style={styles.timeStamp}>11:40</Text>

          <View style={styles.receivedContainer}>
            <Image 
              source={{ uri: 'https://www.figma.com/api/mcp/asset/485c80d6-e4b3-4c49-87a3-8aabca4f1d5d' }} 
              style={styles.messageAvatar} 
            />
            <View style={styles.receivedBubble}>
              <Text style={styles.receivedText}>What is the most popular meal in Japan?</Text>
            </View>
          </View>

          <View style={[styles.receivedContainer, { marginTop: 8 }]}>
            <View style={styles.avatarSpacer} />
            <View style={styles.receivedBubble}>
              <Text style={styles.receivedText}>Do you like it?</Text>
            </View>
          </View>

          <View style={styles.sentContainer}>
            <View style={[styles.sentBubble, { marginBottom: 4 }]}>
              <Text style={styles.sentText}>I think top two are:</Text>
            </View>
            <View style={styles.checkCircle}>
               <Check size={8} color={Colors.primary} strokeWidth={3} />
            </View>
          </View>

          <View style={styles.sentContainer}>
            <View style={styles.imageGrid}>
              <Image 
                source={{ uri: 'https://www.figma.com/api/mcp/asset/3024a151-03a6-4776-b1cd-f48d56f6567c' }} 
                style={styles.sentImage} 
              />
              <Image 
                source={{ uri: 'https://www.figma.com/api/mcp/asset/7a9fc48a-4ba0-40af-88f3-0aca94a57872' }} 
                style={styles.sentImage} 
              />
            </View>
            <View style={styles.checkCircle}>
               <Check size={8} color="#0084FF" strokeWidth={3} />
            </View>
          </View>
        </ScrollView>

        {/* Input Bar */}
        <View style={styles.inputBar}>
          <TouchableOpacity onPress={() => navigation.navigate('MessageUpload')}>
            <LayoutGrid size={24} color={Colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('MessageCamera')} style={styles.inputAction}>
            <Camera size={24} color={Colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.inputAction}
            onPress={() => navigation.navigate('MessageUpload')}
          >
            <ImageIcon size={24} color={Colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.inputAction}>
            <Mic size={24} color={Colors.primary} />
          </TouchableOpacity>
          
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Aa" placeholderTextColor={Colors.gray} />
            <TouchableOpacity style={styles.emojiButton}>
              <Smile size={22} color={Colors.primary} />
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity style={styles.likeButton}>
            <ThumbsUp size={24} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  flex: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    padding: 8,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  headerAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 8,
  },
  headerName: {
    fontSize: 15,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    color: '#000',
  },
  headerStatus: {
    fontSize: 11,
    color: Colors.gray,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    padding: 8,
    marginLeft: 12,
  },
  chatArea: {
    flex: 1,
  },
  chatContent: {
    padding: 16,
  },
  sentContainer: {
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  sentBubble: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 16,
    borderBottomRightRadius: 2,
    maxWidth: '75%',
  },
  sentText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'Inter-Regular',
  },
  checkCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  timeStamp: {
    textAlign: 'center',
    fontSize: 12,
    color: Colors.gray,
    marginVertical: 16,
  },
  receivedContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  messageAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 8,
  },
  avatarSpacer: {
    width: 36,
  },
  receivedBubble: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 16,
    borderTopLeftRadius: 2,
    maxWidth: '75%',
  },
  receivedText: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'Inter-Regular',
  },
  imageGrid: {
    flexDirection: 'row',
    gap: 2,
    borderRadius: 16,
    overflow: 'hidden',
    maxWidth: '75%',
  },
  sentImage: {
    width: 100,
    height: 80,
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 14,
    backgroundColor: '#FFFFFF',
  },
  inputAction: {
    marginLeft: 14,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F2F5',
    borderRadius: 20,
    height: 36,
    marginLeft: 14,
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#000',
  },
  emojiButton: {
    padding: 4,
  },
  likeButton: {
    marginLeft: 14,
  },
});

export default MessageTextScreen;
