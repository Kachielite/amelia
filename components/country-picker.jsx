import {Image, Text, TextInput, View} from "react-native";
import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal'
import {useState} from "react";

import {icons} from "../constants";


const CountryPickerField = ({handleChangeText, value=""}) => {
    const [callingCode, setCallingCode] = useState("")

    const onSelect = (country) => {
        setCallingCode(country.callingCode)
    }



    return(
        <View className="flex flex-col justify-start items-start space-y-[10px] border-b-[1px] border-secondary w-full mb-[24px]">
            <Text className="text-white font-ubold text-[16px]">Phone Number</Text>
            <View className="w-full flex flex-row justify-between  py-[12.5px]">
                <CountryPicker
                    theme={DARK_THEME}
                    countryCode={"US"}
                    onSelect={onSelect}
                    withFilter={true}
                    withCallingCode
                />
                <TextInput
                    placeholder="+1000000000"
                    placeholderTextColor="#35383F"
                    className="w-[70%] text-white text-[18px] font-usemibold"
                    value={callingCode + value}
                    onChangeText={handleChangeText}
                />
                <Image source={icons.phone} resizeMode="contain" className="h-[23px] w-[23px]"/>
            </View>
        </View>
    )
}

export default CountryPickerField;