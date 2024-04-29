import {Image, Text, View} from "react-native";

const OnboardingImage = ({image, title, subtitle}) => {
    return(
        <View className="h-[500px] w-[100vw] relative">
            <Image
                source={image}
                resizeMode="contain"
                className="h-[581.11px] w-[400px] absolute -top-[80px] -right-[2px]"
            />
            <View
                className="h-full w-full px-[24px] pt-[32px] pb-[40px] bg-primary flex flex-col justify-start items-center absolute top-[340px]"
            >
                <Text className="text-white text-[32px] text-center font-ubold leading-[50px]">{title}</Text>
                <Text className="text-white font-uregular text-center pt-[20px] leading-[25px] px-10">{subtitle}</Text>
            </View>
        </View>
    )
}

export default OnboardingImage