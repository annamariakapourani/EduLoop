import { View, Text } from "react-native";
import React from "react";
import { tabsStyles } from "@/styles/tabs.style.timer";
import Svg, { Circle } from "react-native-svg";

type Props = {
  minutes: number;
  seconds: number;
  progress: number;
};

const Timer = ({ minutes, seconds, progress }: Props) => {
  const styles = tabsStyles();
  const width = 250;
  const height = 250;

  return (
    <View style={styles.timerContainer}>
      <Svg width={width} height={height}>
        <Circle
          cx={120}
          cy={120}
          r={113}
          fill="none"
          stroke="rgba(0,0,0,0.1)"
          strokeWidth={14}
        />
        <Circle
          cx={120}
          cy={120}
          r={113}
          fill="none"
          stroke="#6366F1"
          strokeWidth={14}
          strokeLinecap="round"
          strokeDasharray={710}
          strokeDashoffset={180}
          rotation={-90}
          originX={120}
          originY={120}
        />
      </Svg>

      <View style={{position: "absolute", alignItems: "center"}}>
        <Text style={{fontSize: 50, fontFamily: "M-Regular"}}>25:00</Text>
      </View>
    </View>
  );
};

export default Timer;
