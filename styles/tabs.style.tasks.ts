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
    icon: {
      width: 45,
      height: 45,
      borderRadius: 40,
      backgroundColor: "#000",
    },
    taskTitle: {
      fontSize: 15,
      color: "#6e6868ff",
      fontFamily: "M-Regular",
    },
    titleText: {
      fontSize: 25,
      fontFamily: "M-Bold",
    },
    iconContainer: {
      width: 50,
      height: 50,
      borderRadius: 40,
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
    },
    addContainer: {
        width: "100%",
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    addButtons: {
      backgroundColor: "#fff",
      width: 150,
      height: 40,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonText:{
        fontFamily: "M-Bold",
    }
  });
};
