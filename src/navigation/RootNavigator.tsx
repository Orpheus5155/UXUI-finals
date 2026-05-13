import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { Home, PieChart, Grid, BarChart3, User } from 'lucide-react-native';

import SplashScreen from '../screens/Splash/SplashScreen';
import OnboardingScreen from '../screens/Splash/OnboardingScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import CreateAccountScreen from '../screens/Auth/CreateAccountScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import AllUtilitiesScreen from '../screens/Profile/AllUtilitiesScreen';
import ProfileDetailScreen from '../screens/Profile/ProfileDetailScreen';
import EditProfileScreen from '../screens/Profile/EditProfileScreen';
import SmartWalletScreen from '../screens/Profile/SmartWalletScreen';
import SendMoneyScreen from '../screens/Profile/SendMoneyScreen';
import SendMoneyAmountScreen from '../screens/Profile/SendMoneyAmountScreen';
import SendMoneySuccessScreen from '../screens/Profile/SendMoneySuccessScreen';
import SmartWalletHistoryScreen from '../screens/Profile/SmartWalletHistoryScreen';
import TransactionDetailScreen from '../screens/Profile/TransactionDetailScreen';
import SmartWalletStatisticsScreen from '../screens/Profile/SmartWalletStatisticsScreen';

import FastFoodScreen from '../screens/FastFood/FastFoodScreen';
import FoodSearchScreen from '../screens/FastFood/FoodSearchScreen';

import OverviewScreen from '../screens/Finance/OverviewScreen';
import TotalExpenseSpendScreen from '../screens/Finance/TotalExpenseSpendScreen';
import TotalExpenseCategoriesScreen from '../screens/Finance/TotalExpenseCategoriesScreen';
import AddSelectScreen from '../screens/Finance/AddSelectScreen';
import AddIncomeScreen from '../screens/Finance/AddIncomeScreen';
import AddExpenseScreen from '../screens/Finance/AddExpenseScreen';
import SavingsScreen from '../screens/Finance/SavingsScreen';
import YourGoalsScreen from '../screens/Finance/YourGoalsScreen';
import AddGoalScreen from '../screens/Finance/AddGoalScreen';
import RemindersScreen from '../screens/Finance/RemindersScreen';
import SetRemindersScreen from '../screens/Finance/SetRemindersScreen';
import NotificationsScreen from '../screens/Finance/NotificationsScreen';

import ProfileEditScreen from '../screens/Social/ProfileEditScreen';
import ProfileVideoFeedScreen from '../screens/Social/ProfileVideoFeedScreen';
import MainVideoFeedScreen from '../screens/Social/MainVideoFeedScreen';
import MainVideoAddScreen from '../screens/Social/MainVideoAddScreen';

import MessageMainScreen from '../screens/Messaging/MessageMainScreen';
import MessageNewScreen from '../screens/Messaging/MessageNewScreen';
import MessageTextScreen from '../screens/Messaging/MessageTextScreen';
import MessageCameraScreen from '../screens/Messaging/MessageCameraScreen';
import MessageVideoScreen from '../screens/Messaging/MessageVideoScreen';
import MessageCallScreen from '../screens/Messaging/MessageCallScreen';
import MessageUploadScreen from '../screens/Messaging/MessageUploadScreen';

import RestaurantDetailScreen from '../screens/FastFood/RestaurantDetailScreen';
import FoodDetailScreen from '../screens/FastFood/FoodDetailScreen';
import CartScreen from '../screens/FastFood/CartScreen';
import CheckoutScreen from '../screens/FastFood/CheckoutScreen';
import VerifyPinScreen from '../screens/FastFood/VerifyPinScreen';
import PaymentSuccessScreen from '../screens/FastFood/PaymentSuccessScreen';
import CinemaScreen from '../screens/Cinema/CinemaScreen';
import ExploreMovieScreen from '../screens/Cinema/ExploreMovieScreen';

import SmartBikeHomeScreen from '../screens/SmartBike/SmartBikeHomeScreen';
import SmartBikeProductScreen from '../screens/SmartBike/SmartBikeProductScreen';
import SmartBikeProductDescScreen from '../screens/SmartBike/SmartBikeProductDescScreen';
import SmartBikeCartScreen from '../screens/SmartBike/SmartBikeCartScreen';
import SmartBikeCartCouponScreen from '../screens/SmartBike/SmartBikeCartCouponScreen';
import SmartBikeCartCouponAppliedScreen from '../screens/SmartBike/SmartBikeCartCouponAppliedScreen';
import SmartBikeCartCouponCheckoutSwipedScreen from '../screens/SmartBike/SmartBikeCartCouponCheckoutSwipedScreen';
import SmartBikeCheckoutScreen from '../screens/SmartBike/SmartBikeCheckoutScreen';
import SmartBikeCheckoutPinScreen from '../screens/SmartBike/SmartBikeCheckoutPinScreen';
import SmartBikePaymentSuccessScreen from '../screens/SmartBike/SmartBikePaymentSuccessScreen';

import BusHomePageScreen from '../screens/Bus/BusHomePageScreen';
import BusBookingPageScreen from '../screens/Bus/BusBookingPageScreen';
import BusSeatSelectionScreen from '../screens/Bus/BusSeatSelectionScreen';
import BusBoardingDropDetailsScreen from '../screens/Bus/BusBoardingDropDetailsScreen';
import BusGuestDetailsScreen from '../screens/Bus/BusGuestDetailsScreen';
import BusPaymentScreen from '../screens/Bus/BusPaymentScreen';
import BusVerifyPinScreen from '../screens/Bus/BusVerifyPinScreen';
import BusPaymentSuccessScreen from '../screens/Bus/BusPaymentSuccessScreen';

import CarHomeScreen from '../screens/Car/CarHomeScreen';
import CarLamboScreen from '../screens/Car/CarLamboScreen';
import CarBugattiScreen from '../screens/Car/CarBugattiScreen';
import CarAudiScreen from '../screens/Car/CarAudiScreen';
import CarGetScreen from '../screens/Car/CarGetScreen';
import CarDetailScreen from '../screens/Car/CarDetailScreen';
import CarPaymentScreen from '../screens/Car/CarPaymentScreen';
import CarVerifyPinScreen from '../screens/Car/CarVerifyPinScreen';
import CarPaymentSuccessScreen from '../screens/Car/CarPaymentSuccessScreen';

import { Colors } from '../theme/colors';

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Login: undefined;
  CreateAccount: undefined;
  MainTabs: undefined;
  FastFood: undefined;
  FoodSearch: undefined;
  RestaurantDetail: { id?: string; name?: string };
  FoodDetail: { name?: string; restaurant?: string; rating?: string; price?: string; image?: string };
  Cart: undefined;
  Checkout: undefined;
  VerifyPin: undefined;
  PaymentSuccess: undefined;
  Cinema: undefined;
  ExploreMovie: undefined;
  EditProfile: undefined;
  AllUtilities: undefined;
  Overview: undefined;
  TotalExpenseSpend: undefined;
  TotalExpenseCategories: undefined;
  AddSelect: undefined;
  AddIncome: undefined;
  AddExpense: undefined;
  Savings: undefined;
  YourGoals: undefined;
  AddGoal: undefined;
  Reminders: undefined;
  SetReminders: undefined;
  Notifications: undefined;
  ProfileVideoFeed: undefined;
  MainVideoFeed: undefined;
  MainVideoAdd: undefined;
  ProfileEdit: undefined;
  MessageMain: undefined;
  MessageNew: undefined;
  MessageText: undefined;
  MessageCamera: undefined;
  MessageVideo: undefined;
  MessageCall: undefined;
  MessageUpload: undefined;
  SmartBikeHome: undefined;
  SmartBikeProduct: undefined;
  SmartBikeProductDesc: undefined;
  SmartBikeCart: undefined;
  SmartBikeCartCoupon: undefined;
  SmartBikeCartCouponApplied: undefined;
  SmartBikeCartCouponCheckoutSwiped: undefined;
  SmartBikeCheckout: undefined;
  SmartBikeCheckoutPin: undefined;
  SmartBikePaymentSuccess: undefined;
  BusHome: undefined;
  BusBooking: undefined;
  BusSeatSelection: undefined;
  BusBoardingDrop: undefined;
  BusGuestDetails: undefined;
  BusPayment: undefined;
  BusVerifyPin: undefined;
  BusPaymentSuccess: undefined;
  CarHome: undefined;
  CarLambo: undefined;
  CarBugatti: undefined;
  CarAudi: undefined;
  CarGet: undefined;
  CarDetail: undefined;
  CarPayment: undefined;
  CarVerifyPin: undefined;
  CarPaymentSuccess: undefined;
};

export type TabParamList = {
  HomeTab: undefined;
  Portfolio: undefined;
  More: undefined;
  Market: undefined;
  ProfileTab: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const PlaceholderScreen = () => <View style={{ flex: 1, backgroundColor: Colors.white }} />;

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size }) => {
        if (route.name === 'HomeTab') return <Home size={size} color={color} />;
        if (route.name === 'Portfolio') return <PieChart size={size} color={color} />;
        if (route.name === 'More') return <Grid size={size} color={color} />;
        if (route.name === 'Market') return <BarChart3 size={size} color={color} />;
        if (route.name === 'ProfileTab') return <User size={size} color={color} />;
      },
      tabBarActiveTintColor: '#2D62DF',
      tabBarInactiveTintColor: '#999',
      tabBarStyle: { 
        height: 70, 
        paddingBottom: 12, 
        backgroundColor: 'white', 
        borderTopWidth: 1, 
        borderTopColor: '#F0F0F0' 
      },
      tabBarLabelStyle: { fontSize: 10, fontWeight: '500' },
    })}
  >
    <Tab.Screen name="HomeTab" component={HomeScreen} options={{ title: 'Home' }} />
    <Tab.Screen name="Portfolio" component={PlaceholderScreen} />
    <Tab.Screen name="More" component={PlaceholderScreen} />
    <Tab.Screen name="Market" component={PlaceholderScreen} />
    <Tab.Screen name="ProfileTab" component={ProfileScreen} options={{ title: 'Profile' }} />
  </Tab.Navigator>
);

const RootNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen name="FastFood" component={FastFoodScreen} />
      <Stack.Screen name="FoodSearch" component={FoodSearchScreen} />
      <Stack.Screen name="RestaurantDetail" component={RestaurantDetailScreen} />
      <Stack.Screen name="FoodDetail" component={FoodDetailScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="VerifyPin" component={VerifyPinScreen} />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccessScreen} />
      <Stack.Screen name="Cinema" component={CinemaScreen} />
      <Stack.Screen name="ExploreMovie" component={ExploreMovieScreen} />
      <Stack.Screen name="ProfileDetail" component={ProfileDetailScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="AllUtilities" component={AllUtilitiesScreen} />
      <Stack.Screen name="SmartWallet" component={SmartWalletScreen} />
      <Stack.Screen name="SendMoney" component={SendMoneyScreen} />
      <Stack.Screen name="SendMoneyAmount" component={SendMoneyAmountScreen} />
      <Stack.Screen name="SendMoneySuccess" component={SendMoneySuccessScreen} />
      <Stack.Screen name="SmartWalletHistory" component={SmartWalletHistoryScreen} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} />
      <Stack.Screen name="SmartWalletStatistics" component={SmartWalletStatisticsScreen} />
      
      <Stack.Screen name="Overview" component={OverviewScreen} />
      <Stack.Screen name="TotalExpenseSpend" component={TotalExpenseSpendScreen} />
      <Stack.Screen name="TotalExpenseCategories" component={TotalExpenseCategoriesScreen} />
      <Stack.Screen name="AddSelect" component={AddSelectScreen} />
      <Stack.Screen name="AddIncome" component={AddIncomeScreen} />
      <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
      <Stack.Screen name="Savings" component={SavingsScreen} />
      <Stack.Screen name="YourGoals" component={YourGoalsScreen} />
      <Stack.Screen name="AddGoal" component={AddGoalScreen} />
      <Stack.Screen name="Reminders" component={RemindersScreen} />
      <Stack.Screen name="SetReminders" component={SetRemindersScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />

      <Stack.Screen name="ProfileVideoFeed" component={ProfileVideoFeedScreen} />
      <Stack.Screen name="MainVideoFeed" component={MainVideoFeedScreen} />
      <Stack.Screen name="MainVideoAdd" component={MainVideoAddScreen} />
      <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} />
      <Stack.Screen name="MessageMain" component={MessageMainScreen} />
      <Stack.Screen name="MessageNew" component={MessageNewScreen} />
      <Stack.Screen name="MessageText" component={MessageTextScreen} />
      <Stack.Screen name="MessageCamera" component={MessageCameraScreen} />
      <Stack.Screen name="MessageVideo" component={MessageVideoScreen} />
      <Stack.Screen name="MessageCall" component={MessageCallScreen} />
      <Stack.Screen name="MessageUpload" component={MessageUploadScreen} />
      <Stack.Screen name="SmartBikeHome" component={SmartBikeHomeScreen} />
      <Stack.Screen name="SmartBikeProduct" component={SmartBikeProductScreen} />
      <Stack.Screen name="SmartBikeProductDesc" component={SmartBikeProductDescScreen} />
      <Stack.Screen name="SmartBikeCart" component={SmartBikeCartScreen} />
      <Stack.Screen name="SmartBikeCartCoupon" component={SmartBikeCartCouponScreen} />
      <Stack.Screen name="SmartBikeCartCouponApplied" component={SmartBikeCartCouponAppliedScreen} />
      <Stack.Screen name="SmartBikeCartCouponCheckoutSwiped" component={SmartBikeCartCouponCheckoutSwipedScreen} />
      <Stack.Screen name="SmartBikeCheckout" component={SmartBikeCheckoutScreen} />
      <Stack.Screen name="SmartBikeCheckoutPin" component={SmartBikeCheckoutPinScreen} />
      <Stack.Screen name="SmartBikePaymentSuccess" component={SmartBikePaymentSuccessScreen} />
      <Stack.Screen name="BusHome" component={BusHomePageScreen} />
      <Stack.Screen name="BusBooking" component={BusBookingPageScreen} />
      <Stack.Screen name="BusSeatSelection" component={BusSeatSelectionScreen} />
      <Stack.Screen name="BusBoardingDrop" component={BusBoardingDropDetailsScreen} />
      <Stack.Screen name="BusGuestDetails" component={BusGuestDetailsScreen} />
      <Stack.Screen name="BusPayment" component={BusPaymentScreen} />
      <Stack.Screen name="BusVerifyPin" component={BusVerifyPinScreen} />
      <Stack.Screen name="BusPaymentSuccess" component={BusPaymentSuccessScreen} />
      <Stack.Screen name="CarHome" component={CarHomeScreen} />
      <Stack.Screen name="CarLambo" component={CarLamboScreen} />
      <Stack.Screen name="CarBugatti" component={CarBugattiScreen} />
      <Stack.Screen name="CarAudi" component={CarAudiScreen} />
      <Stack.Screen name="CarGet" component={CarGetScreen} />
      <Stack.Screen name="CarDetail" component={CarDetailScreen} />
      <Stack.Screen name="CarPayment" component={CarPaymentScreen} />
      <Stack.Screen name="CarVerifyPin" component={CarVerifyPinScreen} />
      <Stack.Screen name="CarPaymentSuccess" component={CarPaymentSuccessScreen} />
    </Stack.Navigator>






  </NavigationContainer>
);

export default RootNavigator;
