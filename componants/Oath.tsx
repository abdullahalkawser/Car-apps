import { Image, Text, View } from "react-native";

import CustomButton from "./CustomBtn";
import { icons } from "@/constants";

const OAuth = () => {
  return (
    <View>
      <View className="flex-row items-center justify-center mt-4">
        <View className="flex-1 h-[1px] bg-gray-200" />
        <Text className="text-lg mx-2">Or</Text>
        <View className="flex-1 h-[1px] bg-gray-200" />
      </View>

      <CustomButton
        title="Log In with Google"
        className="mt-5 w-full shadow-none"
      >
        <View className="flex-row items-center justify-center">
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-5 h-5 mx-2 "
          />
          <Text className="text-center">Log In with Google</Text>
        </View>
      </CustomButton>
    </View>
  );
};

export default OAuth;
