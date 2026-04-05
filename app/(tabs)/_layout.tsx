import { Tabs } from "expo-router";

// Here i have used parenthesis instead of curly braces because the parenthesis means it auto returns. with curly braces we need to manually return.
const TabLayout = () => (
  <Tabs screenOptions={{ headerShown: false }}>
    <Tabs.Screen name="index" options={{ title: "Home" }} />
    <Tabs.Screen name="subscriptions" options={{ title: "Subscriptions" }} />
    <Tabs.Screen name="insights" options={{ title: "Insights" }} />
    <Tabs.Screen name="settings" options={{ title: "Settings" }} />
    <Tabs.Screen name="subscriptions/[id]" options={{ href: null }} />
  </Tabs>
);

export default TabLayout;
