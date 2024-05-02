import {Image, TextInput, TouchableOpacity, View, Text} from "react-native";
import {useState} from "react";

import {icons} from '../constants'
import {isLoading} from "expo-font";

const Field = ({name, placeholder, icon, formik, id}) => {
    const [showPassword, setShowPassword] = useState(false)
    return(
        <View className={`flex flex-col justify-start items-start space-y-[10px] ${formik.errors[id] && formik.touched[id] ? 'border-red-500' : 'border-secondary'} border-b-[1px]  w-full mb-[24px]`}>
            <Text className={`${formik.errors[id] && formik.touched[id] ? 'text-red-500':'text-white' }  font-ubold text-[16px]`}>{formik.errors[id] && formik.touched[id] ? formik.errors[id] : name}</Text>
            <View className="w-full flex flex-row justify-between py-[12.5px]">
                <TextInput
                    id={id}
                    placeholder={placeholder}
                    placeholderTextColor="#35383F"
                    className="w-[90%] text-white text-[18px] font-usemibold"
                    value={formik.values[id]}
                    onChangeText={formik.handleChange(id)}
                    onBlur={formik.handleBlur(id)}
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