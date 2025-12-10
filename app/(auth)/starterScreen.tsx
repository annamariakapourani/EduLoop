import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView,  } from 'react-native-safe-area-context'
import { authStyles } from '@/styles/auth.style'
import { router } from 'expo-router'

const starterScreen = () => {
    const styles = authStyles();
    
  return (
    <SafeAreaView style={styles.welcomeContainer} edges={["left","right","bottom"]}>
        <View style={styles.shape}>
          <Image
            source={require("@/assets/images/welcome.png")}
            style={styles.image}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>EduLoop</Text>
          <Text style={styles.slogan}>Your Study Journey Starts Here!</Text>
          <TouchableOpacity style={styles.continueButton} onPress={() => router.push("/(auth)/login")}>
              <Text style={{color: "#fff", fontSize: 20}}>Continue</Text>
          </TouchableOpacity>
        </View>

          

    </SafeAreaView>
  )
}

export default starterScreen