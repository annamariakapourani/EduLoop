import { StyleSheet } from "react-native";

export const tabsStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start",
      padding: 20,
      backgroundColor: "rgba(235,235,235)",
    //   backgroundColor: "rgba(243,243,243)",

    },
    section: {
      justifyContent: "center",
      alignItems: "center",
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: -20,

      justifyContent: "space-between",
    },
    titleText: {
      fontSize: 25,
      fontFamily: "M-Bold",
    },
    iconContainer: {
      width: 50,
      height: 50,
      borderRadius: 40,
      backgroundColor: "#ffffffff",
      justifyContent: "center",
      alignItems: "center",
    },
    taskTitle: {
      fontSize: 15,
      color: "#6e6868ff",
      fontFamily: "M-Regular",
    },
    timerContainer: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 150,
    },
    timerOptions: {
      flexDirection: "row",
      gap: 30,
      marginTop: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    startButton: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#ffffffff",
      borderRadius: 40,
      width: "30%",
      height: "35%",
    },
    modal: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.35)",
      alignItems: "center",
      justifyContent: "center",
    },
    modalCard: {
      width: "100%",
      maxWidth: 360,
      borderRadius: 18,
      backgroundColor: "rgba(243,243,243)",
      padding: 16,
      overflow: "hidden"
    },
    optionField: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 20,
      alignItems: "center",
    },
    optionText: {
      fontSize: 20,
      fontFamily: "M-Regular",
    },
    minutesButtons: {
      flexDirection: "row",
      backgroundColor: "#fff",
      borderRadius: 10,
      width: 60,
      height: 30,
      alignItems: "center",
      justifyContent: "center",
    },
    minutesButtonText: {
      fontSize: 17,
    },
    saveButtonContainer: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
    },
    saveButton: {
      backgroundColor: "#d1f6d6ff",
      borderRadius: 10,
      width: "40%",
      height: 32,
      alignItems: "center",
      justifyContent: "center",
    },
    saveButtonText: {
        fontSize: 20,
        fontFamily: "M-Bold"
    },
    buttonSelected: {
      backgroundColor: "#bce8b4ff"
    },
    cardBg: {
      width: "100%"
    },
    cardImage: {
      opacity: 0.25,
      borderRadius: 18,
    },
  });
};
