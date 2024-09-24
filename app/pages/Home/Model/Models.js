import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import { Text } from '@rneui/themed';

const Models = () => {
    const [activeTab, setActiveTab] = useState('Headphone');

  // Function to change the active tab
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

export default Models;

const styles = StyleSheet.create({
    selector: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#F8F9FC',
      },
      tabItem: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 25,
        marginHorizontal: 5,
      },
      activeTab: {
        backgroundColor: '#0ACF83', // Green background for active tab
      },
      inactiveTab: {
        backgroundColor: 'transparent', // No background for inactive tabs
      },
      activeText: {
        color: '#fff', // White text for active tab
        fontWeight: 'bold',
      },
      inactiveText: {
        color: '#9E9E9E', // Gray text for inactive tabs
      },
});
