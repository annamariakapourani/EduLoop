import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { authStyles } from "@/styles/auth.style";
import Ionicons from "@expo/vector-icons/Ionicons";

const ForgotPassword = () => {
  const styles = authStyles();
  const [successfulCreation, setSuccessfulCreation] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.signIntitle}>
        <Ionicons name="book" size={25} />
        <Text style={styles.titleText}>EduLoop</Text>
      </View>

      <View style={styles.signInSlogan}>
        <Text style={{ fontSize: 35, fontWeight: "500" }}>Forgot Password</Text>
        <Text style={{ fontSize: 13, color: "#7a808bff" }}>
          Please enter the code
        </Text>
      </View>

      {!setSuccessfulCreation && (
        <>
          <View style={styles.container}>
            <View style={{ marginTop: 100 }}>
              <Text style={styles.labels}>Email</Text>
              <TextInput
                style={styles.emailInput}
                value={email}
                placeholder="Your Email Address"
                onChangeText={setEmail}
                keyboardType="email-address"
                placeholderTextColor={"#696969"}
                autoCapitalize="none"
              />
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.signInButton}>
                  <Text style={styles.signInButtonText}>Send Reset Email</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </>
      )}

      {successfulCreation && (
        <>
          <View style={styles.container}>
            <Text style={styles.labels}>Code</Text>
            <TextInput
              style={styles.emailInput}
              value={code}
              placeholder="Code"
              onChangeText={setCode}
              keyboardType="email-address"
              placeholderTextColor={"#696969"}
              autoCapitalize="none"
            />
            <Text style={styles.labels}>New Password</Text>
            <TextInput
              style={styles.emailInput}
              value={password}
              placeholder="New Password"
              onChangeText={setPassword}
              keyboardType="email-address"
              placeholderTextColor={"#696969"}
              autoCapitalize="none"
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default ForgotPassword;
