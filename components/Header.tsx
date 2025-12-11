import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { authStyles } from "@/styles/auth.style";

const Header = () => {
  const styles = authStyles();
  return (
    <View>
      <View style={styles.signIntitle}>
        <Ionicons name="book" size={25} />
        <Text style={styles.titleText}>EduLoop</Text>
      </View>

      <View style={styles.signInSlogan}>
        <Text style={{ fontSize: 35, fontWeight: "500" }}>Welcome back</Text>
        <Text style={{ fontSize: 13, color: "#7a808bff" }}>
          Please enter you details to sign in or sign up
        </Text>
      </View>

      <View style={styles.loginOptions}>
        <TouchableOpacity style={styles.otherButtons}>
          <Ionicons name="logo-apple" size={15} />
          <Text style={styles.buttonText}>Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.otherButtons}>
          <Ionicons name="logo-google" size={15} />
          <Text style={styles.buttonText}>Google</Text>
        </TouchableOpacity>
      </View>

      {/* DIVIDER */}
      <View style={styles.footer}>
        <View style={styles.divider}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>or continue with</Text>
          <View style={styles.line} />
        </View>
      </View>
    </View>
  );
};

export default Header;
