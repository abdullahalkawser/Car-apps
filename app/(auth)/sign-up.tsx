import React, { useState } from "react";
import { ScrollView, View, Text, Image } from "react-native";

import { icons, images } from "@/constants";
import InputField from "@/componants/InputFiled";
import CustomButton from "@/componants/CustomBtn";
import { Link } from "expo-router";
import OAuth from "@/componants/Oath";

const SignUpScreen = () => {
  // Initialize form state with useState
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <ScrollView className="flex-1 bg-white">
    <View className="flex-1 bg-white">
      <View className="relative w-full h-[250px]">
        <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
        <Text className="text-2xl text-black font-semibold absolute bottom-5 left-5">
          Create Your Account
        </Text>
      </View>
      <View className="p-5">
        <InputField
          label="Name"
          placeholder="Enter name"
          icon={icons.person}
          value={form.name}
          onChangeText={(value) => setForm({ ...form, name: value })}
        />
        <InputField
          label="Email"
          placeholder="Enter email"
          icon={icons.email}
          textContentType="emailAddress"
          value={form.email}
          onChangeText={(value) => setForm({ ...form, email: value })}
        />
        <InputField
          label="Password"
          placeholder="Enter password"
          icon={icons.lock}
          secureTextEntry={true}
          textContentType="password"
          value={form.password}
          onChangeText={(value) => setForm({ ...form, password: value })}
        />
  
        {/* Updated Custom Button */}
        <CustomButton
            title="Sign Up"
            // onPress={handleSignUp}
            buttonStyle={{ marginTop: 20 }} onPress={function (): void {
              throw new Error("Function not implemented.");
            } }        />

<OAuth/>

          <Link
            href="/sign-in"
            className="text-lg text-center text-general-200 mt-10"
          >
            Already have an account?{" "}
            <Text className="text-blue-600">Log In</Text>
          </Link>
      </View>
    </View>
  </ScrollView>
  );
};

export default SignUpScreen;
