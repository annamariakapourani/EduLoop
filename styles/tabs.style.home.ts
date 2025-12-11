import { StyleSheet } from "react-native";

export const tabsStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start",
      padding: 20,
      backgroundColor: "#F9FAFB",
    },
    section: {
      justifyContent: "center",
      alignItems: "center",
    },
    profileSection: {
      flexDirection: "row",
      alignItems: 'center',
      marginBottom: -20
    },
    profileImage: {
      width: 45, 
      height: 45,
      borderRadius: 40,
      backgroundColor: "#000"
    },
    greetingText: {
      fontSize: 15,
      color: "#6e6868ff",
      fontFamily: 'M-Regular'
    },
    nameText: {
      fontSize: 17,
      fontFamily: 'M-Bold'
    },

    // PROGRESS TRACKING CARD
    activityContainer: {
      justifyContent: 'center',
      flex: 1,
    },
    activityHeader: {
      marginBottom: 20,
      fontSize: 20,
      fontFamily: 'M-Bold'
    },
    topRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20
    },
    activityCard: {
      backgroundColor: "#f6dbdbff",
      width: "100%",
      borderRadius: 40,
      padding: 20,
      flexDirection: "column",
    },
    activityIcon:{
      width: 50,
      height: 50
    },
    activityPercentage: {
      fontSize: 20,
      marginBottom: 5,
      fontFamily: 'M-Bold',
    },
    activitySecondContainer: {
      marginTop: "auto"
    },
    secondCard:{
      backgroundColor: "#e6c9c9ff",
      width: "100%",
      borderRadius: 40,
      alignSelf: "flex-end",
      padding: 20
    },
    smallCards: {
      backgroundColor: "#fff6f6ff",
      width: "45%",
      borderRadius: 12,
      padding: 20,
    }
    
  });
};
