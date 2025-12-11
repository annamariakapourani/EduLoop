import { ImageBackground, Text, View, Image } from "react-native";
import React from "react";
import { tabsStyles } from "@/styles/tabs.style.home";

const UpcomingEvents = () => {
  const styles = tabsStyles();

  const eventColorBar = ["red", "blue", "green"]

  return (
    <View>
      {/* A card for each folder user creates */}
      <View style={styles.folders}>
        <ImageBackground
          source={require("@/assets/images/pattern.jpg")}
          style={styles.cardBg}
          imageStyle={styles.cardImage}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 30,
              marginTop: 10
            }}
          >
            <Image style={styles.folderImage} />
            <Text style={styles.folderName}>Maths</Text>
          </View>
            
            {/* a list of all upcoming events maybe in 5 days */}
            <View style={{ flexDirection: "row", gap: 13}}>
                {/* event time */}
                <View style={styles.eventRow}>
                    <View style={styles.eventTime}>
                        <Text style={{fontSize: 15, fontFamily: "M-Regular", marginBottom: 5}}>Start</Text>
                        <Text style={{fontSize: 15, fontFamily: "M-Regular"}}>End</Text>
                    </View>
                </View>
                {/* card with color bar */}
                <View style={styles.eventCard}>
                    <View style={[styles.colorBar, {backgroundColor: eventColorBar[Math.floor(Math.random() * eventColorBar.length)]}]}/>
                        <View style={styles.eventContent}>
                            <Text>Title</Text>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: "row", gap: 13}}>
                {/* event time */}
                <View style={styles.eventRow}>
                    <View style={styles.eventTime}>
                        <Text style={{fontSize: 15, fontFamily: "M-Regular", marginBottom: 5}}>Start</Text>
                        <Text style={{fontSize: 15, fontFamily: "M-Regular"}}>End</Text>
                    </View>
                </View>
                {/* card with color bar */}
                <View style={styles.eventCard}>
                    <View style={[styles.colorBar, {backgroundColor: eventColorBar[Math.floor(Math.random() * eventColorBar.length)]}]}/>
                        <View style={styles.eventContent}>
                            <Text>Title</Text>
                    </View>
                </View>
            </View>

        </ImageBackground>
      </View>
    </View>
  );
};

export default UpcomingEvents;
