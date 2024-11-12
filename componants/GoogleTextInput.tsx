import { GoogleInputProps } from "@/types/type";
import { View,  Text } from "react-native";


const GoogleTextInput = ({
    icon,containerStyle
}:GoogleInputProps) => {
  return (
    <View
      className={`flex flex-row items-center justify-center relative z-50 rounded-xl bg-slate-200`}
    >
    <Text> search</Text>
    </View>
  );
};

export default GoogleTextInput;