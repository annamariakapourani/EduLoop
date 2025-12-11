import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
    const [loaded] = useFonts({
      "M-Bold": require("@/fonts/Montserrat-Bold.otf"),
      "M-Medium": require("@/fonts/Montserrat-Medium.otf"),
    })

    if(!loaded) return null;

  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/signup" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/forgotPassword" options={{ headerShown: false }} />
        <Stack.Screen
          name="(auth)/starterScreen"
          options={{ headerShown: false }}
        />
      </Stack>
    </>
  );
}
