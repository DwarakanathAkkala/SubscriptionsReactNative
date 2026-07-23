import { HOME_BALANCE, HOME_USER } from "@/constants/data";
import { icons } from "@/constants/icons";
import images from "@/constants/images";
import "@/global.css";
import { formatCurrency } from "@/lib/utils";
import dayjs from "dayjs";
import { styled } from "nativewind";
import { Image, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

// Stytled Wrapped enable ClassName Support for NativeWind on Third-party Component
const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <View className="home-header">
        <View className="home-user">
          <Image source={images.avatar} className="home-avatar"></Image>
          <Text className="home-user-name">{HOME_USER.name}</Text>
        </View>

        <Image source={icons.add} className="home-add-icon"></Image>
      </View>

      <View className="home-balance-card">
        <Text className="home-balance-label">Balances</Text>

        <View className="home-balance-row">
          <Text className="home-balance-amount">
            {/* INR Currency */}
            {formatCurrency(HOME_BALANCE.amount)}
          </Text>

          <Text className="home-balance-date">
            {dayjs(HOME_BALANCE.nextRenewalDate).format("DD/MM")}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
