import React, { useCallback, useState } from "react";
import { ScrollView, View, Text, Image } from "react-native";

import { icons, images } from "@/constants";

import { Link, useRouter } from "expo-router";

import { useSignIn } from "@clerk/clerk-expo";
import InputField from "@/componants/InputFiled";
import CustomButton from "@/componants/CustomBtn";
import OAuth from "@/componants/Oath";

const SignUpScreen = () => {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSignInPress = useCallback(async () => {
    if (!isLoaded) return;

    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password: form.password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        console.error("Sign-in incomplete:", JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      console.error("Sign-in error:", JSON.stringify(err, null, 2));
    }
  }, [isLoaded, form.email, form.password]);

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-semibold absolute bottom-5 left-5">
            Welcome 🤚
          </Text>
        </View>
        <View className="p-5">
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

          <CustomButton
            title="Sign In"
            onPress={onSignInPress}
            buttonStyle={{ marginTop: 20 }}
          />

          <OAuth />

          <Link href="/sign-up" className="text-lg text-center text-general-200 mt-10">
            Don't have an account?{" "}
            <Text className="text-blue-600">Create an Account</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
