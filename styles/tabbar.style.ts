import { StyleSheet } from "react-native";

export const tabsStyles = () => {
  return StyleSheet.create({
    tabBar: {
        position: "absolute",
        bottom: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        marginHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 25,
        borderCurve: 'continuous',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 10},
        shadowRadius: 10,
        shadowOpacity: 0.1
    },
    tabbarItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4
    }
  })}