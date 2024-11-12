import { Image, Text, View } from "react-native";
import { Ride } from "@/types/type";
import { icons } from "@/constants";
import { formatDate, formatTime } from "@/lib/utils"; // Ensure formatDate and formatTime are defined properly

const RideCard = ({ ride }: { ride: Ride }) => {
    const { origin_address, destination_address, driver, ride_time, created_at, destination_longitude, destination_latitude } = ride;

    return (
        <View className="flex flex-row items-center justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 mb-3">
            <View className="flex flex-col items-start justify-center p-3">
                <View className="flex flex-row items-center justify-between w-full">
                    {/* Driver's profile image */}
                    <Image
                        source={{
                            uri: `https://www.gt-rider.com/se-asia-motorcycling/attachments/upload_2020-2-13_23-0-30-png.134387/`
                            

                                // uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat${destination_longitude},${destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`
                            ,
                        }}
                        className="w-[80px] h-[90px] rounded-lg"
                    />

                    <View className="flex flex-1 flex-col mx-5 gap-y-5">
                        <View className="flex flex-1 flex-row items-center gap-x-5">
                            <Image source={icons.to} className="w-5 h-5" />
                            <Text className="mt-2 text-sm text-gray-600">{origin_address}</Text>
                        </View>

                        <View className="flex flex-1 flex-row items-center gap-x-5">
                            <Image source={icons.point} className="w-5 h-5" />
                            <Text className="mt-2 text-sm text-gray-600" numberOfLines={1}>
                                {destination_address}
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Another section */}
                <View className="flex flex-col w-full mt-5 bg-general-500 rounded-lg p-3 items-start justify-center">
                    <View className="flex flex-row items-center w-full justify-between mb-5">
                        <Text className="text-md font-JakartaMedium text-gray-500">
                            Date & Time
                        </Text>
                        <Text className="text-md font-JakartaBold" numberOfLines={1}>
                            {formatDate(ride.created_at)}, {formatTime(ride.ride_time)}
                        </Text>
                    </View>
                </View>

                <View className="flex flex-row items-center w-full justify-between mb-5">
            <Text className="text-md font-JakartaMedium text-gray-500">
              Driver
            </Text>
            <Text className="text-md font-JakartaBold">
              {ride.driver.first_name} {ride.driver.last_name}
            </Text>
          </View>

          <View className="flex flex-row items-center w-full justify-between mb-5">
            <Text className="text-md font-JakartaMedium text-gray-500">
              Car Seats
            </Text>
            <Text className="text-md font-JakartaBold">
              {ride.driver.car_seats}
            </Text>
          </View>

          <View className="flex flex-row items-center w-full justify-between">
            <Text className="text-md font-JakartaMedium text-gray-500">
              Payment Status
            </Text>
            <Text
              className={`text-md capitalize font-JakartaBold ${ride.payment_status === "paid" ? "text-green-500" : "text-red-500"}`}
            >
              {ride.payment_status}
            </Text>
          </View>
            </View>
        </View>
    );
};

export default RideCard;
