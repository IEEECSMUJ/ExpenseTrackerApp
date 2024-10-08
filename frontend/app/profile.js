import { View, Image, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import {getUserData, setToken} from "../utils/userdata";
import {router, useLocalSearchParams} from "expo-router";
import ProfileButton from "../components/ProfileButton";
import icons from "../constants/icons";
import {service} from "../utils/service";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [mine, setMine] = useState(false);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    service.get(`/user/${id}`).then((res) => {
      setUserData(res.data);
    });

    getUserData().then((data) => {
      if (data.id === id) {
        setMine(true);
      }
    });
  }, []);

  const logout = async () => {
    await setUserData({});
    await setToken('');
    router.replace("/");
  }
  return (
    <SafeAreaView className="flex-1">
      <View className="flex justify-start bg-primary w-full h-full">
        <View className="relative w-full h-[53%]">
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
            style={{ position: 'absolute', top: 20, left: 20, zIndex: 10 }}
          >
            <View className="bg-darkgray p-2 rounded-full">
              <Image
                source={icons.leftArrow}
                className="w-8 h-8 rounded-full"
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
          <Image
            className="w-full h-full"
            resizeMode="cover"
            source={{ uri: userData.pfp }}
          />
          <LinearGradient
            colors={["transparent", "rgb(21,21,21)"]}
            className="absolute w-full h-[15%] bottom-0"
          />
        </View>
        <View className="mx-8 my-5 flex flex-col">
          <View className="flex flex-col">
            <View className="flex flex-row">
              <Text className="text-white font-extrabold text-4xl">
                {userData.name}
              </Text>
              <View className="border-2 rounded-full px-4 py-1 mx-3 border-secondary">
                <Text className="text-secondary font-bold">{userData.role}</Text>
              </View>
            </View>
            <View>
              <Text className="text-gray text-lg">@{userData.username}</Text>
              <Text className="text-secondary text-lg">{userData.post}</Text>
            </View>
          </View>
          {mine ? <View className="flex justify-center items-center mt-8">
            <ProfileButton icon={icons.profile_password} value="Change Password" />
            <ProfileButton icon={icons.invoice} value="My Invoices" />
            <ProfileButton icon={icons.logOut} value="Logout" handlePress={logout} />
          </View> : null}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
