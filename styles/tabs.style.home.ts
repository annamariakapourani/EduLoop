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
      justifyContent: "space-between",
      alignItems: 'center'
    },
    profileImage: {
      width: 60, 
      height: 60,
      borderRadius: 40,
      backgroundColor: "#000"
    },
    profileText: {
      fontSize: 25,
      fontWeight: "500"
    },
  });
};
