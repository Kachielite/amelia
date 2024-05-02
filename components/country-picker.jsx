import {Image, Text, View} from "react-native";
import {useRef} from "react";

import {icons} from "../constants";
import PhoneInput from "react-native-phone-number-input";


const CountryPickerField = ({ formik}) => {
    const phoneInput = useRef(null);


    return(
        <View className="flex flex-col justify-start items-start space-y-[10px] border-b-[1px] border-secondary w-full mb-[24px]">
            <Text className="text-white font-ubold text-[16px]">Phone Number</Text>
            <View className="w-full flex flex-row justify-between  py-[8.5px]">
                <View className="w-[90%] text-white text-[18px] font-usemibold">
                    <PhoneInput
                        containerStyle={{backgroundColor : "#181A20"}}
                        textContainerStyle={{backgroundColor : "#181A20", }}
                        textInputStyle={{color: "white"}}
                        codeTextStyle={{color: "white"}}
                        ref={phoneInput}
                        defaultValue={formik.values.phone_number}
                        defaultCode="US"
                        layout="first"
                        onChangeFormattedText={(text) => {
                            formik.setFieldValue('phone_number', text);
                        }}
                        placeholder="Phone Number"
                        placeholderTextColor="#35383F"
                        withDarkTheme
                        renderDropdownImage={<Image source={icons.chevrondown} resizeMode="contain" className="h-[15px] w-[15px]"/>}
                    />
                </View>
                <Image source={icons.phone} resizeMode="contain" className="h-[23px] w-[23px] mt-4"/>
            </View>
        </View>
    )
}

export default CountryPickerField;