import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import { tabsStyles } from "@/styles/tabs.style.home";

const TaskFolder = () => {
    const styles = tabsStyles();
  return (
    <View style={{marginTop: 40}}>
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
              marginTop: 10,
            }}
          >
            <Image style={styles.folderImage} />
            <Text style={styles.folderName}>Maths</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default TaskFolder;
