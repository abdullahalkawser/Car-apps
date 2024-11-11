import { onboarding } from '@/constants';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';

const Welcome = () => {

  const swiperRef = useRef<Swiper>(null)

  const [actveindex,setactiveindex]= useState(0)
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        className="flex w-full justify-end items-end bg-whit p-5"
        onPress={() => {
          router.replace( "/(auth)/sign-up");
        }}
      >
        <Text className='text-black text-lg font-semibold'>Skip</Text>
      </TouchableOpacity>

      <Swiper
      ref={swiperRef}
      loop ={false}
      dot= {<View className='w-[32px] h-[4] mx-1 bg-[#E2E8F0] rounded-full'/>}
      activeDot= {<View className='w-[32px] h-[4] mx-1 bg-[#0286FF] rounded-full'/>}
      onIndexChanged={(index)=> setactiveindex(index)}
      >

{
  onboarding.map((item, index) => (
    <View key={index} className="flex justify-center items-center">
      <Image
        source={item.image}
        className="w-full h-[300px]" // Adjust width and height as needed
        resizeMode="contain"
      />
    <View className='flex flex-row items-center justify-center w-full mt-10'>
    <Text className="text-4xl font-bold mx-10 text-center ">{item.title}</Text>
    </View>

    <View className=''>
    <Text className="text-xl font-semibold text-center  mx-10 mt-4 text-gray-500 ">{item.description}</Text>
    </View>
    </View>
  ))
}
      </Swiper>


    </SafeAreaView>
  );
};

export default Welcome;
