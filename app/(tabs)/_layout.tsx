import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import TabBar from "@/components/TabBar";

const Layout = () => {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Tabs.Screen
        name="home"
      />
      <Tabs.Screen
        name="tasks"
      />
      <Tabs.Screen
        name="timer"
      />
      <Tabs.Screen
        name="studentforum"
      />
    </Tabs>
  );
};

export default Layout;
