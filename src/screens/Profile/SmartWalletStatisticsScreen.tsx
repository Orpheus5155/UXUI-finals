import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, Bell, ArrowDown, ArrowUp } from 'lucide-react-native';
import { Colors } from '../../theme/colors';

const SmartWalletStatisticsScreen = () => {
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
          <Text style={styles.titleText}>Statistic</Text>
        </View>
      </View>

      <View style={styles.mainContent}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }}>
          
          <Text style={styles.balanceLabel}>Total Balance</Text>
          <Text style={styles.balanceAmount}>$332234.923949</Text>

          <View style={styles.overviewHeader}>
            <Text style={styles.overviewTitle}>Overview</Text>
            <TouchableOpacity style={styles.monthButton}>
              <Text style={styles.monthText}>Month</Text>
            </TouchableOpacity>
          </View>

          {/* Faux Chart Area */}
          <View style={styles.chartContainer}>
            {/* Chart Y-Axis Lines */}
            <View style={styles.chartLinesContainer}>
              {[40, 30, 20, 10, 0].map((val, idx) => (
                <View key={idx} style={styles.chartLineRow}>
                  <Text style={styles.chartYLabel}>{val}k</Text>
                  <View style={styles.chartDashedLine} />
                </View>
              ))}
            </View>

            {/* Chart Bars */}
            <View style={styles.barsContainer}>
              <ChartBarGroup label="Jan" incomeHeight="45%" expenseHeight="85%" />
              <ChartBarGroup label="Feb" incomeHeight="25%" expenseHeight="42%" />
              <ChartBarGroup label="Mar" incomeHeight="95%" expenseHeight="55%" />
              <ChartBarGroup label="Apr" incomeHeight="12%" expenseHeight="85%" />
              <ChartBarGroup label="Jun" incomeHeight="100%" expenseHeight="18%" />
              <ChartBarGroup label="Jul" incomeHeight="58%" expenseHeight="85%" />
              <ChartBarGroup label="Aug" incomeHeight="70%" expenseHeight="85%" />
            </View>
          </View>

          {/* Chart Legend */}
          <View style={styles.legendContainer}>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#4A8EED' }]} />
              <Text style={[styles.legendText, { color: '#4A8EED' }]}>Income</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#8EADC8' }]} />
              <Text style={[styles.legendText, { color: '#8EADC8' }]}>Expense</Text>
            </View>
          </View>

          {/* Summary Cards */}
          <View style={styles.summaryCardsRow}>
            
            {/* Income Card */}
            <View style={[styles.summaryCard, { backgroundColor: '#4A8EED' }]}>
              <View style={styles.cardIconWrapper}>
                <ArrowDown size={20} color="black" />
              </View>
              <View style={styles.cardTextWrapper}>
                <Text style={styles.cardLabel}>Income</Text>
                <Text style={styles.cardValue}>$12312.12312</Text>
              </View>
              {/* Background Graphic */}
              <View style={styles.bgGraphicCircle}>
                <ArrowDown size={80} color="rgba(255,255,255,0.1)" strokeWidth={1} />
              </View>
            </View>

            {/* Expense Card */}
            <View style={[styles.summaryCard, { backgroundColor: '#8EADC8' }]}>
              <View style={styles.cardIconWrapper}>
                <ArrowUp size={20} color="black" />
              </View>
              <View style={styles.cardTextWrapper}>
                <Text style={styles.cardLabel}>Expense</Text>
                <Text style={styles.cardValue}>$12312.12312</Text>
              </View>
              {/* Background Graphic */}
              <View style={styles.bgGraphicCircle}>
                <ArrowUp size={80} color="rgba(255,255,255,0.1)" strokeWidth={1} />
              </View>
            </View>

          </View>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const ChartBarGroup = ({ label, incomeHeight, expenseHeight }: any) => (
  <View style={styles.barGroup}>
    <View style={styles.barsWrapper}>
      <View style={styles.barTrack}>
        <View style={[styles.barFill, { height: incomeHeight, backgroundColor: '#4A8EED' }]} />
      </View>
      <View style={styles.barTrack}>
        <View style={[styles.barFill, { height: expenseHeight, backgroundColor: '#8EADC8' }]} />
      </View>
    </View>
    <Text style={styles.barLabel}>{label}</Text>
  </View>
);


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

  balanceLabel: { fontSize: 18, color: '#B8B8B8', marginBottom: 5 },
  balanceAmount: { fontSize: 36, fontWeight: 'bold', color: Colors.black, marginBottom: 20 },

  overviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  overviewTitle: { fontSize: 20, fontWeight: 'bold', color: Colors.black },
  monthButton: {
    borderWidth: 1,
    borderColor: '#EAEAEA',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  monthText: { fontSize: 14, color: Colors.black },

  chartContainer: {
    height: 200,
    position: 'relative',
    marginTop: 10,
  },
  chartLinesContainer: {
    position: 'absolute',
    top: 0,
    bottom: 30,
    left: 0,
    right: 0,
    justifyContent: 'space-between',
  },
  chartLineRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chartYLabel: {
    width: 30,
    fontSize: 12,
    color: '#B8B8B8',
  },
  chartDashedLine: {
    flex: 1,
    height: 1,
    borderBottomWidth: 1,
    borderColor: '#EAEAEA',
    borderStyle: 'dashed',
    marginLeft: 10,
  },
  barsContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 40,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  
  barGroup: {
    alignItems: 'center',
    width: 35,
  },
  barsWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    paddingBottom: 30, // Space for labels
  },
  barTrack: {
    width: 10,
    height: '100%',
    justifyContent: 'flex-end',
    marginHorizontal: 2,
  },
  barFill: {
    width: '100%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  barLabel: {
    position: 'absolute',
    bottom: 0,
    fontSize: 12,
    color: '#B8B8B8',
  },

  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
  },

  summaryCardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryCard: {
    width: '48%',
    height: 160,
    borderRadius: 30,
    padding: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  cardIconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  cardTextWrapper: {
    zIndex: 2,
  },
  cardLabel: {
    fontSize: 14,
    color: 'white',
    opacity: 0.9,
    marginBottom: 4,
  },
  cardValue: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  bgGraphicCircle: {
    position: 'absolute',
    right: -20,
    bottom: -20,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SmartWalletStatisticsScreen;
