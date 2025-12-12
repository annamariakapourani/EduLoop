import { StyleSheet } from "react-native";

export const tabsStyles = () => {
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
    profileSection: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: -20,

      justifyContent: "space-between",
    },
    profileImage: {
      width: 45,
      height: 45,
      borderRadius: 40,
      backgroundColor: "#000",
    },
    greetingText: {
      fontSize: 15,
      color: "#6e6868ff",
      fontFamily: "M-Regular",
    },
    nameText: {
      fontSize: 17,
      fontFamily: "M-Bold",
    },

    // PROGRESS TRACKING CARD
    activityContainer: {
      justifyContent: "center",
      flex: 1,
    },
    header: {
      marginBottom: 20,
      fontSize: 20,
      fontFamily: "M-Bold",
    },
    topRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
    },
    activityCard: {
      backgroundColor: "#f6dbdbff",
      width: "100%",
      borderRadius: 40,
      padding: 20,
      flexDirection: "column",
    },
    activityIcon: {
      width: 50,
      height: 50,
    },
    activityPercentage: {
      fontSize: 20,
      marginBottom: 5,
      fontFamily: "M-Bold",
    },
    activitySecondContainer: {
      marginTop: "auto",
    },
    secondCard: {
      backgroundColor: "#e6c9c9ff",
      width: "100%",
      borderRadius: 40,
      alignSelf: "flex-end",
      padding: 20,
    },
    smallCards: {
      backgroundColor: "#fff6f6ff",
      width: "45%",
      borderRadius: 12,
      padding: 20,
    },

    // Folders
    folders: {
      backgroundColor: "#d4c2efff",
      width: "100%",
      borderRadius: 12,
      height: "auto",
      overflow: "hidden",
      marginBottom: 20,
    },
    cardBg: {
      padding: 20,
      flex: 1,
      justifyContent: "center",
    },
    cardImage: {
      opacity: 0.25,
    },
    folderImage: {
      width: 45,
      height: 45,
      borderRadius: 40,
      backgroundColor: "#000",
    },
    folderName: {
      marginLeft: 20,
      fontFamily: "M-Bold",
      fontSize: 25,
    },

    // Events
    eventRow: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: 10,
    },
    eventTime: {
      padding: 8,
      alignItems: "flex-end",
      marginTop: -4,
    },
    eventCard: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: "rgba(255,255,255,0.4)",
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderRadius: 12,
      height: 50,
    },
    colorBar: {
      width: 4,
      borderRadius: 999,
      marginRight: 10,
    },
    eventContent: {
      flex: 1,
      justifyContent: "center",
    },
    iconContainer: {
      width: 50,
      height: 50,
      borderRadius: 40,
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
    },
  });
};
