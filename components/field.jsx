import {Image, TextInput, TouchableOpacity, View, Text} from "react-native";
import {useState} from "react";

import {icons} from '../constants'

const Field = ({name, placeholder, icon, value, handleChangeText}) => {
    const [showPassword, setShowPassword] = useState(false)
    return(
        <View className="flex flex-col justify-start items-start space-y-[10px] border-b-[1px] border-secondary w-full mb-[24px]">
            <Text className="text-white font-ubold text-[16px]">{name}</Text>
            <View className="w-full flex flex-row justify-between  px-[10px] py-[12.5px]">
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor="#35383F"
                    className="w-[90%] text-white text-[18px] font-usemibold"
                    value={value}
                    onChangeText={handleChangeText}
                    secureTextEntry={name === "Password" && !showPassword}
                />
                {name !== "Password" ?
                    <Image source={icon} resizeMode="contain" className="h-[23px] w-[23px]"/>:
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image
                            source={showPassword ? icons.eye : icons.eyeHide}
                            className="h-[23px] w-[23px]"
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                }

            </View>
        </View>
    )
}

export default Field;