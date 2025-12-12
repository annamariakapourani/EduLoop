import { StyleSheet } from "react-native";

export const authStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start",
      padding: 20,
      backgroundColor: "rgba(243,243,243)",
    },
    section: {
      justifyContent: "center",
      alignItems: "center",
    },

    // STARTER PAGE

    welcomeContainer: {
      flex: 1,
      backgroundColor: "#F9FAFB",
    },
    shape: {
      backgroundColor: "#dee8f3ff",
      width: "100%",
      height: "55%",
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    },
    image: {
      width: 300,
      height: 300,
    },
    title: {
      marginTop: 50,
      fontSize: 70,
      fontWeight: "500",
    },
    slogan: {
      marginTop: 15,
      fontSize: 20,
    },
    continueButton: {
      marginTop: 100,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 8,
      width: "80%",
      height: 50,
      backgroundColor: "#7045FF",
    },

    // SIGN IN

    signIntitle: {
      flexDirection: "row",
      gap: 20,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
    },
    titleText: {
      fontSize: 20,
    },
    signInSlogan: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 40,
      gap: 6,
    },
    loginOptions: {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      gap: 20,
      marginTop: 50,
    },
    otherButtons: {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      width: "40%",
      height: 30,
      borderWidth: 1,
      borderColor: "#E5E7EB",
      borderRadius: 8,
      gap: 10,
    },
    buttonText: {
      color: "#000",
      fontSize: 14,
      fontWeight: "500",
    },
    footer: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
    },
    divider: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 32,
    },
    dividerText: {
      color: "#9ca3af",
      fontSize: 14,
      marginHorizontal: 12,
    },
    line: {
      width: "20%",
      height: 1,
      backgroundColor: "#9ca3af",
    },
    inputContainer: {
      marginTop: 20,
    },
    labels: {
      fontSize: 14,
      fontWeight: "500",
      marginBottom: 6,
    },
    emailInput: {
      borderWidth: 1,
      borderColor: "#E5E7EB",
      width: "100%",
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: 12,
      backgroundColor: "#fff",
      fontSize: 12,
    },
    inputWithIcon: {
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#E5E7EB",
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 12,
      backgroundColor: "#fff",
      fontSize: 12,
    },
    passwordInput: {
      flex: 1,
    },
    forgotPassword: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 25,
    },
    buttonContainer: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 40,
    },
    signInButton: {
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 15,
      backgroundColor: "#111827",
      width: "100%",
      height: 50,
    },
    signInButtonText: {
      color: "#fff",
      fontSize: 15,
      fontWeight: "500",
    },
    signUpOption: {
      justifyContent: "center",
      flexDirection: "row",
      marginTop: 30,
      gap: 5,
    },

    // SIGN UP

    fullNameInputs: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      gap: 25,
    },
    signUpInputContainer: {
      flex: 1,
    },
  });
};
