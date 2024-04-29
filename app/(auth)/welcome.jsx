import {SafeAreaView} from "react-native-safe-area-context";
import {Image, Text, View} from "react-native";

import {images} from '../../constants'
import Button from "../../components/button";
import {router} from "expo-router";

const Welcome = () => {
    return(
        <SafeAreaView className="bg-primary h-full">
            <View className="flex flex-col justify-center items-center space-y-[77.6px] h-full">
                <Image source={images.logo} resizeMode="contain" className="h-[140px] w-[140px]"/>
                <View>
                    <Text className="font-ubold text-white text-[40px]">Welcome to</Text>
                    <Text className="font-ubold text-secondary text-[40px] mt-4">AmeIia AI 👋</Text>
                </View>
                <View className="w-[335px] h-[130px] flex flex-col justify-between items-center">
                    <Button label="Log in" onPress={() => router.push("/sign-in")}/>
                    <Button label="Sign up" type="primary" onPress={() => router.push("/sign-up")}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Welcome;