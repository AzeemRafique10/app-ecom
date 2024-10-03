import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ProfileSettings = () => {
  return (
    <View style={styles.general}>
          <Text style={styles.topic}>General</Text>
          <TouchableOpacity style={styles.textStyle}>
            <Text style={styles.generalText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textStyle}>
            <Text style={styles.generalText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textStyle}>
            <Text style={styles.generalText}>Wish List</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textStyle}>
            <Text style={styles.generalText}>Edit Profile</Text>
          </TouchableOpacity>

          <Text style={styles.topic}>Legal</Text>
          <TouchableOpacity style={styles.textStyle}>
            <Text style={styles.generalText}>Terms of Use</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textStyle}>
            <Text style={styles.generalText}>Privacy policy</Text>
          </TouchableOpacity>
          <Text style={styles.topic}>Personal</Text>
          <TouchableOpacity style={styles.textStyle}>
            <Text style={styles.generalText}>Report a Bug</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textStyle}>
            <Text style={styles.generalText}>Logout</Text>
          </TouchableOpacity>
        </View>
  )
}

export default ProfileSettings

const styles = StyleSheet.create({
    general: {
        // flex: 1,
        marginTop: 30,
      },
      generalText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '500',
      },
      textStyle: {
        height: 51,
        borderBottomColor: '#EDEDED',
        borderBottomWidth: 1,
        justifyContent: 'center',
        marginBottom: 10,
      },
      topic: {
        fontSize: 16,
        fontWeight: 'bold',
        height: 58,
      },
})