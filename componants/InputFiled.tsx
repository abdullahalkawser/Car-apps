import React from "react";
import {
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";

import { InputFieldProps } from "@/types/type";

const InputField = ({
  label,
  icon,
  secureTextEntry = false,
  labelStyle,
  containerStyle,
  inputStyle,
  iconStyle,
  ...props
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          {/* Label */}
          {label && (
            <Text className={`text-lg font-medium mb-2 ${labelStyle}`}>
              {label}
            </Text>
          )}
          {/* Input Container */}
          <View className={`flex flex-row items-center bg-neutral-100 rounded-full border border-neutral-100 px-3 ${containerStyle}`}>
            {icon && (
              <Image source={icon} className={`w-4 h-6 mr-2 ${iconStyle}`} />
            )}
            <TextInput
              className={`flex-1 py-3 px-2 text-base font-bold ${inputStyle}`}
              secureTextEntry={secureTextEntry}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
