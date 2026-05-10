import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface VideoInfoProps {
  username: string;
  description: string;
  hashtags: string[];
}

const VideoInfo = ({ username, description, hashtags }: VideoInfoProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>@{username}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.hashtagContainer}>
        {hashtags.map((tag, index) => (
          <Text key={index} style={styles.hashtag}>
            #{tag}{' '}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 16,
    bottom: 110,
    width: '75%',
  },
  username: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    marginBottom: 8,
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  description: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    lineHeight: 20,
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  hashtagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
  },
  hashtag: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});

export default VideoInfo;
