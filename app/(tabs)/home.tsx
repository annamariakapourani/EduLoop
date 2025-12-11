import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { tabsStyles } from "@/styles/tabs.style.home";

const Home = () => {
  const styles = tabsStyles();

  return (
    <SafeAreaView style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.profileSection}>
        <Text style={styles.profileText}>Hello, username</Text>
        <Image
          style={styles.profileImage}
        />
      </View>


    </SafeAreaView>
  );
};

export default Home;
