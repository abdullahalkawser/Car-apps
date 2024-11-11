import React from "react";
import { TouchableOpacity, Text, ViewStyle, TextStyle } from "react-native";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const CustomButton = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: "#1E90FF",
          padding: 15,
          borderRadius: 25,
          alignItems: "center",
          justifyContent: "center",
        },
        buttonStyle,
      ]}
    >
      <Text style={[{ color: "#FFFFFF", fontSize: 16, fontWeight: "bold" }, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
