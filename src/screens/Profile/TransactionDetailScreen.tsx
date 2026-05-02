import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, Bell } from 'lucide-react-native';
import { Colors } from '../../theme/colors';

const TransactionDetailScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image 
          source={require('../../../assets/images/appicon.png')} 
          style={styles.backgroundImage}
          resizeMode="cover"
        />
        
        {/* Back Button Row */}
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <ArrowLeft size={28} color={Colors.white} />
          </TouchableOpacity>
        </View>

        {/* User Info Row */}
        <View style={styles.userRow}>
          <View style={styles.avatarWrapper}>
            <Image 
              source={{uri: 'https://cdn-icons-png.flaticon.com/512/6840/6840478.png'}} 
              style={styles.avatarImage} 
            />
          </View>
          <Text style={styles.greetingText}>Hello, Romina!!</Text>
          <TouchableOpacity style={styles.bellButton}>
            <Bell size={24} color={Colors.white} />
          </TouchableOpacity>
        </View>

        <View style={styles.titleSection}>
          <Text style={styles.titleText}>Your transactions history</Text>
        </View>
      </View>

      <View style={styles.mainContent}>
        <Text style={styles.sectionTitle}>Transaction detail</Text>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }}>
          
          <View style={styles.detailCard}>
            
            {/* Top Green Header */}
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeaderTitle}>Transaction successfully</Text>
              <Text style={styles.cardHeaderSubtitle}>#12356q435094skigh</Text>
            </View>

            {/* White Body */}
            <View style={styles.cardBody}>
              
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Service</Text>
                <Text style={styles.detailValue}>MMSQ21PAY</Text>
              </View>

              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Order number</Text>
                <Text style={styles.detailValueMultiline}>
                  09i5ito-92384u-892u10ahdf-{"\n"}9q283u9
                </Text>
              </View>

              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Content</Text>
                <Text style={styles.detailValue}>SMart Pay</Text>
              </View>

              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Amout</Text>
                <Text style={styles.detailValue}>$20.00</Text>
              </View>

              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Bill Number</Text>
                <Text style={styles.detailValueMultiline}>
                  MMSQ21PAYU12984398sa{"\n"}98svijabidbf82ubiahbv87utb
                </Text>
              </View>

              <View style={styles.divider} />

              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Fee</Text>
                <Text style={styles.detailValue}>$0.001</Text>
              </View>

              <View style={styles.divider} />

              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Total Amount</Text>
                <Text style={styles.detailValue}>$20.001</Text>
              </View>

            </View>

            {/* Bottom Green Footer */}
            <TouchableOpacity style={styles.cardFooter}>
              <Text style={styles.cardFooterText}>Any problem ? Ask our team</Text>
            </TouchableOpacity>

          </View>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2D62DF' },
  headerContainer: {
    backgroundColor: '#2D62DF',
    height: 220,
    paddingTop: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  backgroundImage: {
    position: 'absolute',
    width: '150%',
    height: '150%',
    top: '-20%',
    left: '-20%',
    opacity: 0.1,
  },
  topRow: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  backButton: { padding: 5, alignSelf: 'flex-start' },
  userRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  avatarWrapper: {
    width: 60, height: 60, borderRadius: 30, backgroundColor: '#FFB6C1',
    justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: 'white',
  },
  avatarImage: { width: 56, height: 56, borderRadius: 28 },
  greetingText: { fontSize: 24, fontWeight: 'bold', color: 'white', flex: 1, textAlign: 'center' },
  bellButton: { padding: 5 },
  
  titleSection: { alignItems: 'center', marginTop: 20 },
  titleText: { fontSize: 20, color: 'white' },

  mainContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 25,
    paddingTop: 30,
  },
  sectionTitle: { fontSize: 22, color: '#4271E2', marginBottom: 20 },

  detailCard: {
    backgroundColor: 'white',
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
    marginBottom: 30,
  },
  cardHeader: {
    backgroundColor: '#7FF2B8',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    alignItems: 'center',
  },
  cardHeaderTitle: {
    fontSize: 20,
    color: '#4271E2',
    marginBottom: 5,
  },
  cardHeaderSubtitle: {
    fontSize: 14,
    color: '#4271E2',
  },
  
  cardBody: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: 'white',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  detailLabel: {
    fontSize: 14,
    color: '#4271E2',
    flex: 1,
  },
  detailValue: {
    fontSize: 14,
    color: '#4271E2',
    textAlign: 'right',
  },
  detailValueMultiline: {
    fontSize: 14,
    color: '#4271E2',
    textAlign: 'right',
    flex: 2,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.black,
    marginVertical: 15,
  },

  cardFooter: {
    backgroundColor: '#7FF2B8',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingVertical: 20,
    alignItems: 'center',
  },
  cardFooterText: {
    fontSize: 18,
    color: '#4271E2',
  },
});

export default TransactionDetailScreen;
