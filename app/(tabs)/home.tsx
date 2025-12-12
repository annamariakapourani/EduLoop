import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { tabsStyles } from "@/styles/tabs.style.home";
import Activity from "@/components/Activity";
import UpcomingEvents from "@/components/UpcomingEvents";
import Ionicons from "@expo/vector-icons/Ionicons";

const Home = () => {
  const styles = tabsStyles();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* HEADER */}
        <View style={styles.profileSection}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image style={styles.profileImage} />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.greetingText}>Hello!</Text>
              <Text style={styles.nameText}>Anna K</Text>
            </View>
          </View>
          {/* SETTINGS */}
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <Ionicons name="settings-outline" size={25} />
            </TouchableOpacity>
          </View>
        </View>

        <Activity />

        <Text style={styles.header}>Upcoming Events</Text>
        <UpcomingEvents />
        <UpcomingEvents />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
