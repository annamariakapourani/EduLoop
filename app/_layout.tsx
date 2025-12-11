import { Stack } from "expo-router";

export default function RootLayout() {
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
