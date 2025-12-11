import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { tabsStyles } from "@/styles/tabs.style.home";
import Activity from "@/components/Activity";

const Home = () => {
  const styles = tabsStyles();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* HEADER */}
        <View style={styles.profileSection}>
          <Image style={styles.profileImage} />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.greetingText}>Hello!</Text>
            <Text style={styles.nameText}>Anna K</Text>
          </View>
        </View>

        <Activity/>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
