import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {tabsStyles} from "@/styles/tabbar.style"
import Ionicons from "@expo/vector-icons/Ionicons";

const TabBar = ({ state, descriptors, navigation }) => {
    const styles = tabsStyles();

    const tabIcons = {
        home:(props) => <Ionicons name="home" size={25} color={"#000"} {...props}/>,
        tasks:(props) => <Ionicons name="add-circle-sharp" size={25} color={"#000"} {...props}/>,
        timer:(props) => <Ionicons name="hourglass-outline" size={25} color={"#000"} {...props}/>,
        studentforum:(props) => <Ionicons name="chatbubbles-sharp" size={25} color={"#000"} {...props}/>
    }

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            key={route.key}
            style={styles.tabbarItem}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {   
                // color will change depending on user color pick
                tabIcons[route.name]({
                    color: isFocused ? "#673ab7" : "#222"
                })
            }
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
