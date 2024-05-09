import {SafeAreaView} from "react-native-safe-area-context";
import {View, Image, Text} from "react-native";

import {images} from '../../constants'
import Button from "../../components/button";
import {router} from "expo-router";

const Chat = () => {
    return(
        <SafeAreaView className="bg-primary h-full">
            <View className="flex flex-col justify-between space-y-[28px] items-center px-[24px] py-[20px] h-full w-[100vw]">
                <View className="flex flex-row justify-between items-center w-full">
                    <Image
                      source={images.logo}
                      className="w-[28px] h-[28px]"
                      resizeMode="contain"
                    />
                    <Text className="text-[24px] text-white font-ubold">AmeliaAI</Text>
                    <View className="w-[28px] h-[28px]"/>
                </View>
                <View className="flex flex-col justify-between items-center h-full pt-[41.5px]">
                    <Image source={images.logo} resizeMode="contain" className="h-[140px] w-[140px]"/>
                    <View>
                        <Text className="font-ubold text-white text-[40px]">Welcome to</Text>
                        <Text className="font-ubold text-secondary text-[40px] mt-4">AmeIia AI 👋</Text>
                    </View>
                    <View>
                        <Text className="font-uregular text-[18px] text-white text-center leading-10">Start chatting with AmeliaAI now.</Text>
                        <Text className="font-uregular text-[18px] text-white text-center">You can ask me anything.</Text>
                    </View>
                    <View className="w-[335px] h-[130px] flex flex-col justify-between items-center">
                        <Button label="Start Chat" onPress={() => router.push("/sign-in")}/>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Chat;