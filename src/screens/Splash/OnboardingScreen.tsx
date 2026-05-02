import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../theme/colors';

const { width, height } = Dimensions.get('window');

const SLIDES = [
  {
    id: '1',
    title: 'Hello',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non consectetur turpis. Morbi eu eleifend lacus.',
    image: require('../../../assets/images/onboarding.png'),
    topColor: '#FFB6C1',
  },
  {
    id: '2',
    title: 'Discover',
    description: 'Explore multifaceted services for your daily life, all in one smart super app.',
    image: require('../../../assets/images/onboarding.png'),
    topColor: '#B6DFFF',
  },
  {
    id: '3',
    title: 'Smart Wallet',
    description: 'Manage your finances and payments easily and securely with our integrated wallet.',
    image: require('../../../assets/images/onboarding.png'),
    topColor: '#FFEBB6',
  },
  {
    id: '4',
    title: 'Get Started',
    description: 'Join us now to experience the ultimate convenience in the palm of your hand.',
    image: require('../../../assets/images/onboarding.png'),
    topColor: '#D1FFB6',
    isLast: true,
  }
];

const OnboardingScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation();
  const flatListRef = useRef<FlatList>(null);

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  }).current;

  const renderItem = ({ item }: { item: typeof SLIDES[0] }) => (
    <View style={styles.slideWidth}>
      <View style={styles.card}>
        <View style={[styles.imageContainer, { backgroundColor: item.topColor }]}>
           <Image source={item.image} style={styles.image} resizeMode="cover" />
        </View>
        
        <View style={styles.textContainer}>
           <Text style={styles.title}>{item.title}</Text>
           <Text style={styles.description}>{item.description}</Text>
        </View>

        {item.isLast && (
          <TouchableOpacity 
            style={styles.startButton} 
            onPress={() => navigation.navigate('CreateAccount' as never)}
          >
            <Text style={styles.startText}>Get Started Now</Text>

          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Background Pattern */}
      <View style={styles.blueBackground}>
        <Image 
          source={require('../../../assets/images/appicon.png')} 
          style={styles.bgPattern}
          resizeMode="cover"
        />
        
        <SafeAreaView style={styles.safeArea}>
          <FlatList
            ref={flatListRef}
            data={SLIDES}
            renderItem={renderItem}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
            keyExtractor={(item) => item.id}
          />

          {/* Dots Indicator */}
          <View style={styles.dotsRow}>
            {SLIDES.map((_, index) => (
              <View 
                key={index} 
                style={[styles.dot, activeIndex === index ? styles.activeDot : styles.inactiveDot]} 
              />
            ))}
          </View>
          
          <View style={{ height: 40 }} /> 
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
  safeArea: { flex: 1, width: '100%' },
  slideWidth: { width: width, alignItems: 'center', justifyContent: 'center' },
  card: {
    width: width * 0.85,
    height: height * 0.72,
    backgroundColor: 'white',
    borderRadius: 35,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: '55%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: { width: '100%', height: '100%' },
  textContainer: { padding: 30, alignItems: 'center' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 15, textAlign: 'center' },
  description: { fontSize: 16, color: '#666', textAlign: 'center', lineHeight: 24 },
  dotsRow: { flexDirection: 'row', justifyContent: 'center', marginBottom: 30 },
  dot: { width: 10, height: 10, borderRadius: 5, marginHorizontal: 5 },
  activeDot: { backgroundColor: '#004CFF', width: 25 }, // Stretched active dot for better visual
  inactiveDot: { backgroundColor: 'white' },
  startButton: {
    backgroundColor: '#004CFF',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 10,
  },
  startText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});

export default OnboardingScreen;
