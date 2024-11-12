import { GoogleInputProps } from "@/types/type";
import { View, TextInput, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // assuming you're using Expo icons

const GoogleTextInput = ({ icon, containerStyle }: GoogleInputProps) => {
  return (
    <View className={`flex flex-row items-center px-4 py-2 rounded-xl bg-slate-100 shadow-md ${containerStyle}`}>
      {/* Icon */}
      <FontAwesome name="search" size={20} color="gray" className="mr-2" />

      {/* Text Input */}
      <TextInput
        placeholder="Search here..."
        placeholderTextColor="gray"
        className="flex-1 text-base text-gray-800"
      />

      {/* Optional button or clear text, depending on your design */}
      <Text className="text-sm text-blue-500">Clear</Text>
    </View>
  );
};

export default GoogleTextInput;
