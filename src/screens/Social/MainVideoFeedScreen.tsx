import React, { useState } from 'react';
import { 
  View, StyleSheet, Dimensions, FlatList, ImageBackground, 
  StatusBar, Modal, Text, TouchableOpacity, Image, TextInput, 
  ScrollView 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { 
  X, Heart, AtSign, Smile, Send, MessageCircle, Share2, 
  AlertTriangle, HeartOff, Download, Copy, Plus 
} from 'lucide-react-native';
import SocialHeader from '../../components/SocialHeader';
import VideoSideActions from '../../components/VideoSideActions';
import VideoInfo from '../../components/VideoInfo';
import FinanceBottomNav from '../../components/FinanceBottomNav';
import { Colors } from '../../theme/colors';

const { width, height } = Dimensions.get('window');

const MainVideoFeedScreen = () => {
  const navigation = useNavigation<any>();
  const [activeTab, setActiveTab] = useState<'following' | 'foryou'>('foryou');
  const [showComments, setShowComments] = useState(false);
  const [showShare, setShowShare] = useState(false);

  const videos = [
    {
      id: '1',
      username: 'craig_love',
      description: 'The most satisfying Job',
      hashtags: ['fyp', 'satisfying', 'roadmarking'],
      likes: '328.7K',
      comments: '578',
      avatar: 'https://www.figma.com/api/mcp/asset/de050a41-ba74-489d-ab1d-54d2c9449374',
      bgImage: 'https://www.figma.com/api/mcp/asset/76768228-2314-41b4-ad7b-01c4c97989e9',
    },
    {
      id: '2',
      username: 'martha_c',
      description: 'Morning vibes in Tokyo! 🇯🇵',
      hashtags: ['travel', 'tokyo', 'vlog'],
      likes: '120K',
      comments: '245',
      avatar: 'https://www.figma.com/api/mcp/asset/de050a41-ba74-489d-ab1d-54d2c9449374',
      bgImage: 'https://www.figma.com/api/mcp/asset/87d37861-2e6b-4b3c-8917-f2ac27ab7661',
    }
  ];

  const shareOptions = [
    { name: 'WhatsApp', color: '#25D366', icon: <Send size={24} color="#FFF" /> },
    { name: 'Status', color: '#128C7E', icon: <AtSign size={24} color="#FFF" /> },
    { name: 'Message', color: '#FF2D55', icon: <MessageCircle size={24} color="#FFF" /> },
    { name: 'SMS', color: '#4CD964', icon: <Send size={24} color="#FFF" /> },
    { name: 'Messenger', color: '#0084FF', icon: <MessageCircle size={24} color="#FFF" /> },
    { name: 'Report', icon: <AlertTriangle size={24} color="#000" /> },
    { name: 'Not interested', icon: <HeartOff size={24} color="#000" /> },
    { name: 'Save video', icon: <Download size={24} color="#000" /> },
    { name: 'Duet', icon: <Copy size={24} color="#000" /> },
    { name: 'React', icon: <Smile size={24} color="#000" /> },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ImageBackground source={{ uri: item.bgImage }} style={styles.videoContainer} resizeMode="cover">
            <SafeAreaView style={styles.overlay} edges={['top']}>
              <SocialHeader activeTab={activeTab} onTabChange={setActiveTab} />
              
              <VideoSideActions 
                likes={item.likes} 
                comments={item.comments} 
                userAvatar={item.avatar}
                onCommentPress={() => setShowComments(true)}
                onSharePress={() => setShowShare(true)}
                onProfilePress={() => navigation.navigate('ProfileVideoFeed')}
              />
              
              <VideoInfo 
                username={item.username} 
                description={item.description} 
                hashtags={item.hashtags} 
              />
            </SafeAreaView>
          </ImageBackground>
        )}
      />

      <FinanceBottomNav />

      {/* Comment Modal */}
      <Modal visible={showComments} transparent animationType="slide">
        <TouchableOpacity 
          style={styles.modalBackdrop} 
          activeOpacity={1} 
          onPress={() => setShowComments(false)}
        >
          <View style={styles.commentContainer}>
            <View style={styles.commentHeader}>
              <Text style={styles.commentCount}>579 comments</Text>
              <TouchableOpacity onPress={() => setShowComments(false)}>
                <X size={20} color={Colors.gray} />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.commentList}>
              <CommentItem 
                name="martini_rond" 
                text="How neatly I write the date in my book" 
                time="22h" 
                likes="8098"
                avatar="https://www.figma.com/api/mcp/asset/99104b2d-b3f4-4a36-9b44-74aa4cb4a0fd"
              />
              <CommentItem 
                name="maxjacobson" 
                text="Now that's a skill very talented" 
                time="22h" 
                likes="8098"
                avatar="https://www.figma.com/api/mcp/asset/44377967-6b90-474e-8cb7-f4621ef9ce37"
              />
              <CommentItem 
                name="zackjohn" 
                text="Doing this would make me so anxious" 
                time="22h" 
                likes="8098"
                avatar="https://www.figma.com/api/mcp/asset/7e24fce7-e333-4c35-8c6a-5f1089129fa9"
              />
            </ScrollView>

            <View style={styles.commentInputContainer}>
              <TextInput 
                style={styles.commentInput} 
                placeholder="Add comment..." 
                placeholderTextColor={Colors.gray} 
              />
              <View style={styles.inputActions}>
                <AtSign size={20} color={Colors.black} style={styles.inputIcon} />
                <Smile size={20} color={Colors.black} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Share Modal */}
      <Modal visible={showShare} transparent animationType="slide">
        <TouchableOpacity 
          style={styles.modalBackdrop} 
          activeOpacity={1} 
          onPress={() => setShowShare(false)}
        >
          <View style={styles.shareContainer}>
            <Text style={styles.shareTitle}>Share to</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.shareScroll}>
              {shareOptions.slice(0, 5).map((opt, i) => (
                <View key={i} style={styles.shareItem}>
                  <View style={[styles.shareCircle, { backgroundColor: opt.color }]}>
                    {opt.icon}
                  </View>
                  <Text style={styles.shareLabel} numberOfLines={2}>{opt.name}</Text>
                </View>
              ))}
            </ScrollView>
            <View style={styles.shareDivider} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.shareScroll}>
              {shareOptions.slice(5).map((opt, i) => (
                <View key={i} style={styles.shareItem}>
                  <View style={styles.actionCircle}>
                    {opt.icon}
                  </View>
                  <Text style={styles.shareLabel}>{opt.name}</Text>
                </View>
              ))}
            </ScrollView>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setShowShare(false)}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const CommentItem = ({ name, text, time, likes, avatar }: any) => (
  <View style={styles.commentItem}>
    <Image source={{ uri: avatar }} style={styles.commentAvatar} />
    <View style={styles.commentContent}>
      <Text style={styles.commentName}>{name}</Text>
      <Text style={styles.commentText}>{text}</Text>
      <View style={styles.commentFooter}>
        <Text style={styles.commentTime}>{time}</Text>
        <TouchableOpacity><Text style={styles.replyText}>View replies (4)</Text></TouchableOpacity>
      </View>
    </View>
    <View style={styles.commentLikesContainer}>
      <Heart size={14} color={Colors.gray} />
      <Text style={styles.commentLikesCount}>{likes}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  videoContainer: {
    width: width,
    height: height,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  commentContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: height * 0.75,
    paddingBottom: 20,
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  commentCount: {
    fontSize: 14,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
    textAlign: 'center',
  },
  commentList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  commentItem: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  commentAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  commentContent: {
    flex: 1,
    marginLeft: 12,
  },
  commentName: {
    fontSize: 13,
    fontFamily: 'Inter-SemiBold',
    color: Colors.gray,
    marginBottom: 4,
  },
  commentText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#000',
    lineHeight: 18,
  },
  commentFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  commentTime: {
    fontSize: 12,
    color: Colors.gray,
    marginRight: 16,
  },
  replyText: {
    fontSize: 12,
    color: Colors.gray,
    fontFamily: 'Inter-SemiBold',
  },
  commentLikesContainer: {
    alignItems: 'center',
    marginLeft: 8,
  },
  commentLikesCount: {
    fontSize: 11,
    color: Colors.gray,
    marginTop: 4,
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  commentInput: {
    flex: 1,
    height: 40,
    fontSize: 14,
  },
  inputActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputIcon: {
    marginRight: 16,
  },
  shareContainer: {
    backgroundColor: '#F9FAFB',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingVertical: 24,
  },
  shareTitle: {
    fontSize: 14,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  shareScroll: {
    paddingHorizontal: 16,
  },
  shareItem: {
    width: 72,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  shareCircle: {
    width: 54,
    height: 54,
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionCircle: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  shareLabel: {
    fontSize: 11,
    fontFamily: 'Inter-Medium',
    color: Colors.darkGray,
    textAlign: 'center',
  },
  shareDivider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 20,
    marginHorizontal: 16,
  },
  cancelButton: {
    marginTop: 24,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingVertical: 16,
  },
  cancelText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
    fontFamily: 'Inter-Medium',
  },
});

export default MainVideoFeedScreen;
