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
  StyleSheet,
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
        <View style={styles.wrapper}>
          {/* Label */}
          {label && (
            <Text style={[styles.label, labelStyle]}>{label}</Text>
          )}
          {/* Input Container */}
          <View style={[styles.inputContainer, containerStyle]}>
            {icon && (
              <Image source={icon} style={[styles.icon, iconStyle]} />
            )}
            <TextInput
              style={[styles.input, inputStyle]}
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

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 8,
    width: "100%",
  },
  label: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5", // Equivalent to `bg-neutral-100`
    borderRadius: 50, // Equivalent to `rounded-full`
    borderWidth: 1,
    borderColor: "#f5f5f5",
    paddingHorizontal: 12,
  },
  icon: {
    width: 16, // Equivalent to `w-4`
    height: 24, // Equivalent to `h-6`
    marginRight: 8, // Equivalent to `mr-2`
  },
  input: {
    flex: 1,
    paddingVertical: 12, // Equivalent to `py-3`
    paddingHorizontal: 8, // Equivalent to `px-2`
    fontSize: 16, // Equivalent to `text-base`
    fontWeight: "bold",
  },
});
