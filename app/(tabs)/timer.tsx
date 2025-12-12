import { View, Text, Image, TouchableOpacity, Modal, Pressable, ImageBackground } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { tabsStyles } from "@/styles/tabs.style.timer";
import Timer from "@/components/Timer";
import Ionicons from "@expo/vector-icons/Ionicons";

const timer = () => {
  const styles = tabsStyles();
  const [settingsOpen, setSettingsOpen] = useState(false);

  const pomodoroMinutes = ["25", "35", "45"]
  const breakMinutes = ["5", "15", "20"]

  const [selectPomodoro, setSelectPomodoro] = useState("25")
  const [selectBreak, setSelectBreak] = useState("5")


  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.iconContainer}>
            <Image
              source={require("@/assets/images/timer.png")}
              style={{ width: 30, height: 30 }}
            />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.titleText}>Pomodoro Timer</Text>
          </View>
        </View>
      </View>

      {/* TIMER */}
      <View>
        <Timer />

        {/* BUTTONS */}
        <View style={styles.timerOptions}>
          <TouchableOpacity style={styles.startButton}>
            <Text style={{fontSize: 25, fontFamily: "M-Bold"}}>start</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="refresh-sharp" size={25} />
          </TouchableOpacity>

            <TouchableOpacity onPress={() => setSettingsOpen(true)}>
              <Ionicons name="settings-outline" size={25} />
            </TouchableOpacity>
        </View>
      </View>

      {/* SETTINGS MODAL */}
      <Modal visible={settingsOpen} transparent animationType="fade" onRequestClose={() => setSettingsOpen(false)}>
        {/* click outside closes */}
        <Pressable style={styles.modal} onPress={() => setSettingsOpen(false)}>
        {/* click inside does not close */}
          <Pressable style={styles.modalCard} onPress={() => setSettingsOpen(true)}>
            {/* modal title */}
            <ImageBackground
          source={require("@/assets/images/pattern.jpg")}
          style={styles.cardBg}
          imageStyle={styles.cardImage}
        >

            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 30, fontFamily: "M-Bold"}}>Timer Settings</Text>
            </View>

            {/* labels */}
            <View style={styles.optionField}>
              <Text style={styles.optionText}>Pomodoro</Text>
              <View style={{flexDirection: "row", gap: 20}}>
                {pomodoroMinutes.map((minutes) => (
                  <TouchableOpacity key={minutes} style={[styles.minutesButtons, selectPomodoro === minutes && styles.buttonSelected]} onPress={() => setSelectPomodoro(minutes)}>
                    <Text style={styles.minutesButtonText}>{minutes}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

              <View style={styles.optionField}>
                <Text style={styles.optionText}>Break</Text>
                <View style={{flexDirection: "row", gap: 20}}>
                  {breakMinutes.map((minutes) => (
                    <TouchableOpacity key={minutes} style={[styles.minutesButtons, selectBreak === minutes && styles.buttonSelected]} onPress={() => setSelectBreak(minutes)}>
                      <Text style={styles.minutesButtonText}>{minutes}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
            </View>

            {/* save button */}
            <View style={styles.saveButtonContainer}>
              <TouchableOpacity style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>

</ImageBackground>
          </Pressable>
        </Pressable>

        
      </Modal>

    </SafeAreaView>
  );
};

export default timer;
