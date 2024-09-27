import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Badge = () => {
  const [activeTab, setActiveTab] = useState('Headphone');
  const handleTabPress = tab => {
    setActiveTab(tab);
  };
  return (
    <View style={styles.selector}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          style={[
            styles.tabItem,
            activeTab === 'Headphone' ? styles.activeTab : styles.inactiveTab,
          ]}
          onPress={() => handleTabPress('Headphone')}>
          <Text
            style={
              activeTab === 'Headphone'
                ? styles.activeText
                : styles.inactiveText
            }>
            Headphone
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabItem,
            activeTab === 'Headband' ? styles.activeTab : styles.inactiveTab,
          ]}
          onPress={() => handleTabPress('Headband')}>
          <Text
            style={
              activeTab === 'Headband' ? styles.activeText : styles.inactiveText
            }>
            Headband
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabItem,
            activeTab === 'Earpads' ? styles.activeTab : styles.inactiveTab,
          ]}
          onPress={() => handleTabPress('Earpads')}>
          <Text
            style={
              activeTab === 'Earpads' ? styles.activeText : styles.inactiveText
            }>
            Earpads
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabItem,
            activeTab === 'Cable' ? styles.activeTab : styles.inactiveTab,
          ]}
          onPress={() => handleTabPress('Cable')}>
          <Text
            style={
              activeTab === 'Cable' ? styles.activeText : styles.inactiveText
            }>
            Cable
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  selector: {
    width: '100%',
    height: 26,
    marginTop: 20,
    marginBottom: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabItem: {
    height: 25,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  activeTab: {
    backgroundColor: '#0ACF83',
    justifyContent: 'center',
  },
  inactiveTab: {
    backgroundColor: 'transparent', // No background for inactive tabs
  },
  activeText: {
    color: '#fff', // White text for active tab
    fontWeight: 'bold',
    fontSize: 14,
  },
  inactiveText: {
    color: '#9E9E9E', // Gray text for inactive tabs
    fontSize: 14,
  },
});
