import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Sliders from '../../../assets/Icon/Sliders';

const Filters = () => {
  const [activeTab, setActiveTab] = useState('Filters');

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false} // Hide scroll indicator
        contentContainerStyle={styles.scrollContainer} // Style for the inner content
      >
        <TouchableOpacity
          style={[
            styles.tabItem,
            activeTab === 'Filters' ? styles.activeTab : styles.inactiveTab,
          ]}
          onPress={() => handleTabPress('Filters')}>
          {/* Conditionally render icon for active tab */}
          {activeTab === 'Filters' && (
             <Sliders/>
          )}
          <Text
            style={
              activeTab === 'Filters' ? styles.activeText : styles.inactiveText
            }>
            Filters
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabItem,
            activeTab === 'Popularity' ? styles.activeTab : styles.inactiveTab,
          ]}
          onPress={() => handleTabPress('Popularity')}>
          {activeTab === 'Popularity' && (
             <Sliders/>
          )}
          <Text
            style={
              activeTab === 'Popularity'
                ? styles.activeText
                : styles.inactiveText
            }>
            Popularity
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabItem,
            activeTab === 'Newest' ? styles.activeTab : styles.inactiveTab,
          ]}
          onPress={() => handleTabPress('Newest')}>
          {activeTab === 'Newest' && (
             <Sliders/>
          )}
          <Text
            style={
              activeTab === 'Newest' ? styles.activeText : styles.inactiveText
            }>
            Newest
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabItem,
            activeTab === 'Most Experience'
              ? styles.activeTab
              : styles.inactiveTab,
          ]}
          onPress={() => handleTabPress('Most Experience')}>
          {activeTab === 'Most Experience' && (
             <Sliders/>
          )}
          <Text
            style={
              activeTab === 'Most Experience'
                ? styles.activeText
                : styles.inactiveText
            }>
            Most Experience
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 41,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10, // Add padding for better spacing
  },
  tabItem: {
    height: 35,
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 5,
    flexDirection: 'row', // Make sure the text and icon align horizontally
    alignItems: 'center',  // Align the icon and text vertically
  },
  activeTab: {
    backgroundColor: '#fff',
    borderWidth:1,

  },
  inactiveTab: {
    backgroundColor: 'transparent', // No background for inactive tabs
  },
  activeText: {
    color: '#000', // White text for active tab
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 5, // Add space between icon and text
  },
  inactiveText: {
    color: '#000', // Gray text for inactive tabs
    fontSize: 14,
  },
  icon: {
    marginRight: 5, // Add space between the icon and the text
  },
});
