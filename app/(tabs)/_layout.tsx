import { View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const Layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false,tabBarShowLabel: false }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: () => <Ionicons name="home" size={20} color={"#000"} />,
        }}
      />
    </Tabs>
  );
};

export default Layout;
