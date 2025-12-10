import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { authStyles } from '@/styles/auth.style'
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import Header from '@/components/Header';

const Login = () => {
    const styles = authStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);


  return (
    <SafeAreaView style={styles.container}>
       <Header/>
       
        {/* EMAIL AND PASSWORD INPUTS */}
        <View style={styles.inputContainer}>
            <Text style={styles.labels}>Email</Text>
            <TextInput
                style={styles.emailInput}
                value={email}
                placeholder='Your Email Address'
                onChangeText={setEmail}
                keyboardType='email-address'
                placeholderTextColor={'#696969'}
                autoCapitalize='none'
            />
        </View>

        <View style={{marginTop: 30}}>
            <Text style={styles.labels}>Password</Text>
            <View style={styles.inputWithIcon} pointerEvents='box-none'>
            <TextInput
                style={styles.passwordInput}
                value={password}
                onChangeText={setPassword}
                keyboardType='email-address'
                placeholder="********"
                secureTextEntry={!showPassword}
                autoCapitalize='none'
                placeholderTextColor={'#696969'}
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
        
        {/* FORGOT PASSWORD */}
        <View style={styles.forgotPassword}>
            <TouchableOpacity>
                <Text>Forgot Password?</Text>
            </TouchableOpacity>
        </View>

        {/* SIGN IN BUTTON */}
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.signInButton}>
                <Text style={styles.signInButtonText}>Sign In</Text>
            </TouchableOpacity>
        </View>

        {/* SIGN UP OPTION */}
        <View style={styles.signUpOption}>
            <Text>Don&apos;t have an account?</Text>
            <TouchableOpacity onPress={() => router.push("/(auth)/signup")}>
                <Text style={{color: "#7F3F92", fontWeight: "500"}}>Register</Text>
            </TouchableOpacity>
        </View>

    </SafeAreaView>
  )
}

export default Login