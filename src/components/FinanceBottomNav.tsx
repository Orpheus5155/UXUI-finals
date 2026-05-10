import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Home, ClipboardList, Bell, User, Plus } from 'lucide-react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Colors } from '../theme/colors';

const FinanceBottomNav = () => {
  const navigation = useNavigation<any>();
  const route = useRoute();

  const isActive = (screenName: string) => route.name === screenName;
  
  // Define module context
  const isSocialModule = [
    'MainVideoFeed', 
    'ProfileVideoFeed', 
    'MainVideoAdd', 
    'ProfileEdit'
  ].includes(route.name);

  const handleHomePress = () => {
    if (isSocialModule) {
      navigation.navigate('MainVideoFeed');
    } else {
      navigation.navigate('Overview');
    }
  };

  const handlePlusPress = () => {
    if (route.name === 'Savings' || route.name === 'YourGoals') {
      navigation.navigate('AddGoal');
    } else if (isSocialModule) {
      navigation.navigate('MainVideoAdd');
    } else {
      navigation.navigate('AddSelect');
    }
  };

  const handleProfilePress = () => {
    if (isSocialModule) {
      navigation.navigate('ProfileVideoFeed');
    } else {
      navigation.navigate('Reminders');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.navItem} 
        onPress={handleHomePress}
      >
        <Home size={24} color={(isActive('Overview') || isActive('MainVideoFeed')) ? Colors.primary : Colors.gray} />
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.navItem}
        onPress={() => navigation.navigate('Savings')}
      >
        <ClipboardList size={24} color={isActive('Savings') ? Colors.primary : Colors.gray} />
      </TouchableOpacity>

      <View style={styles.plusContainer}>
        <TouchableOpacity 
          style={styles.plusButton}
          onPress={handlePlusPress}
        >
          <Plus size={30} color={Colors.white} strokeWidth={2.5} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.navItem}
        onPress={() => navigation.navigate('Notifications')}
      >
        <Bell size={24} color={isActive('Notifications') ? Colors.primary : Colors.gray} />
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.navItem}
        onPress={handleProfilePress}
      >
        <User size={24} color={(isActive('Reminders') || isActive('ProfileVideoFeed')) ? Colors.primary : Colors.gray} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#F9FAFB',
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.02,
    shadowRadius: 7.5,
    elevation: 5,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  plusButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -48,
    shadowColor: '#2948FF',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
  },
});

export default FinanceBottomNav;
