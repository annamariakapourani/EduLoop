import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { tabsStyles } from "@/styles/tabs.style.home";

const Activity = () => {
  const styles = tabsStyles();

  return (
    <SafeAreaView style={styles.activityContainer}>
      {/* PROGRESS TRACKING */}
      <Text style={styles.activityHeader}>Your Activity</Text>
      <View style={styles.activityCard}>
        <View style={styles.topRow}>
          <Image
            source={require("@/assets/images/progress.png")}
            style={styles.activityIcon}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={styles.activityPercentage}>64%</Text>
            <Text style={{ fontFamily: "M-Medium", color: "#6e6868ff" }}>
              Average Progress
            </Text>
          </View>
        </View>
        
        <View style={styles.activitySecondContainer}>
          <View style={styles.secondCard}>
            <Text style={styles.activityPercentage}>85%</Text>
            <Text style={{ fontFamily: "M-Medium", color: "#6e6868ff" }}>
              Tasks Completed
            </Text>

            <View style={{marginTop: 20, flexDirection: "row", justifyContent: "space-between",}}>
                <View style={styles.smallCards}>
                    <Text style={{ fontFamily: 'M-Bold', marginBottom: 5 }}>85%</Text>
                    <Text style={{ fontSize: 10 }}>Task Completed</Text>
                </View>
                <View style={styles.smallCards}>
                    <Text style={{ fontFamily: 'M-Bold', marginBottom: 5 }}>65%</Text>
                    <Text style={{ fontSize: 10 }}>Task Remaining</Text>
                </View>
            </View>

          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Activity;
