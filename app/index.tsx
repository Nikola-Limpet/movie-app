import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl font-bold text-teal-400">Movie App</Text>
      <Link className="m-4 text-2xl font-bold underline text-teal-800" href="/onboarding">Go to Onboarding</Link>
      <Link className="m-4 text-2xl font-bold underline text-teal-800" href="/movie/1">Go to Movie</Link>
    </View>
  );
}
