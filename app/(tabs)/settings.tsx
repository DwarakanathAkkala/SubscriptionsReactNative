import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

// Stytled Wrapped enable ClassName Support for NativeWind on Third-party Component
const SafeAreaView = styled(RNSafeAreaView);

const Settings = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text>Settings</Text>
    </SafeAreaView>
  );
};

export default Settings;
