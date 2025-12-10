import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { authStyles } from "@/styles/auth.style";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from 'expo-router'


const Signup = () => {
  const styles = authStyles();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.logInText}>Create your account</Text>
        <Text style={{ marginTop: 10 }}>
          Welcome back! Please fill in the details to get started.
        </Text>
      </View>

      {/* NAME INPUT */}
      <View style={styles.inputContainer}>
        {/* NAME */}
        <View style={styles.nameInputs}>
          <View>
            <Text style={styles.labels}>First Name</Text>
            <TextInput
              style={styles.nameInput}
              value={firstName}
              onChangeText={setFirstName}
              keyboardType="email-address"
              placeholderTextColor={"#696969"}
              autoCapitalize="none"
            />
          </View>
          {/* SURNAME */}
          <View>
            <Text style={styles.labels}>Last Name</Text>
            <TextInput
              style={styles.nameInput}
              value={lastName}
              onChangeText={setLastName}
              keyboardType="email-address"
              placeholderTextColor={"#696969"}
              autoCapitalize="none"
            />
          </View>
        </View>
      </View>

      {/* EMAIL INPUT */}
      <View style={styles.inputSignUpContainer}>
        <Text style={styles.labels}>Email</Text>
        <TextInput
          style={styles.emailInput}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor={"#696969"}
          autoCapitalize="none"
        />
      </View>
      {/* PASSWORD INPUT */}
      <View style={styles.inputSignUpContainer}>
        <Text style={styles.labels}>Password</Text>
        <View style={styles.inputWithIcon} pointerEvents="box-none">
          <TextInput
            style={styles.passwordInput}
            value={password}
            onChangeText={setPassword}
            keyboardType="email-address"
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            placeholderTextColor={"#696969"}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye" : "eye-off"}
              size={20}
              color="#666"
            />
          </TouchableOpacity>
        </View>
      </View>

        {/* SIGN IN BUTTON */}
        <View style={styles.buttonSignUpContainer}>
          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.buttonText}>Sign In</Text>
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

        {/* OTHER SIGN IN OPTIONS */}
        <View style={styles.signInOptions}>
          <TouchableOpacity style={styles.otherButtons}>
            <Ionicons name="logo-apple" size={15} />
            <Text>Apple</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.otherButtons}>
            <Ionicons name="logo-google" size={15} />
            <Text>Google</Text>
          </TouchableOpacity>
        </View>

        {/* SIGN UP OPTION */}
        <View style={styles.signUpOption}>
          <Text>Do have an account?</Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
            <Text style={{ color: "#7F3F92", fontWeight: "500" }}>Sign In</Text>
          </TouchableOpacity>
        </View>
        
    </SafeAreaView>
  );
};

export default Signup;
