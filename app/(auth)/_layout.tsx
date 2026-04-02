import "@/global.css";
import { Stack } from "expo-router";

export default function RootLayout() {
  // screenOptions will only hide the header which is the inner file and not the root. to remove the root header i need to use the headershown in the root _layout.tsx
  return <Stack screenOptions={{ headerShown: false }} />;
}
