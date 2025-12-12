import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { tabsStyles } from "@/styles/tabs.style.tasks";
import Ionicons from "@expo/vector-icons/Ionicons";
import TaskFolder from "@/components/TaskFolder";

const Tasks = () => {
  const styles = tabsStyles();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        {/* HEADER */}
        <View style={styles.header}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.iconContainer}>
              <Image
                source={require("@/assets/images/tasks.png")}
                style={{ width: 30, height: 30 }}
              />
            </View>

            <View style={{ marginLeft: 10 }}>
              <Text style={styles.titleText}>Tasks</Text>
              <Text style={styles.taskTitle}>8 Tasks Today</Text>
            </View>
          </View>

          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <Ionicons name="search-sharp" size={25} />
            </TouchableOpacity>
          </View>
        </View>

        {/* ADD FOLDER/TASK */}
        <View style={styles.addContainer}>
          <TouchableOpacity style={styles.addButtons}>
            <Text style={styles.buttonText}>+ Add Folder</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.addButtons}>
            <Text style={styles.buttonText}>+ Add Task</Text>
          </TouchableOpacity>
          
        </View>

        {/* TESTING PURPOSES */}
        <TaskFolder/>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Tasks;
