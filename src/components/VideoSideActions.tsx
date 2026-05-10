import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Heart, MessageCircle, Send, Share2, Plus } from 'lucide-react-native';

interface VideoSideActionsProps {
  likes: string;
  comments: string;
  onCommentPress?: () => void;
  onSharePress?: () => void;
  onProfilePress?: () => void;
  userAvatar?: string;
}

const VideoSideActions = ({ likes, comments, onCommentPress, onSharePress, onProfilePress, userAvatar }: VideoSideActionsProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.avatarContainer} onPress={onProfilePress}>
        <Image 
          source={{ uri: userAvatar || 'https://via.placeholder.com/50' }} 
          style={styles.avatar} 
        />
        <View style={styles.plusContainer}>
          <Plus size={12} color="#FFFFFF" strokeWidth={3} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <Heart size={36} color="#FFFFFF" fill="#FF2D55" strokeWidth={0} />
        <Text style={styles.actionText}>{likes}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={onCommentPress}>
        <MessageCircle size={36} color="#FFFFFF" fill="transparent" strokeWidth={2.5} />
        <Text style={styles.actionText}>{comments}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <Send size={30} color="#FFFFFF" strokeWidth={2.5} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={onSharePress}>
        <Share2 size={32} color="#FFFFFF" strokeWidth={2.5} />
        <Text style={styles.actionText}>Share</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 8,
    bottom: 120,
    alignItems: 'center',
    gap: 20,
  },
  avatarContainer: {
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  plusContainer: {
    position: 'absolute',
    bottom: -6,
    alignSelf: 'center',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FF2D55',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButton: {
    alignItems: 'center',
  },
  actionText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    marginTop: 4,
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});

export default VideoSideActions;
