import {SafeAreaView} from "react-native-safe-area-context";
import {View, Text, TouchableOpacity} from "react-native";
import Checkbox from 'expo-checkbox';
import BackButton from "../../components/back-button";
import Field from "../../components/field";

import {icons} from '../../constants'
import Button from "../../components/button";
import {router} from "expo-router";
import {useState} from "react";

const SignIn = () => {
    const [checked, setChecked] = useState(false);
    return(
        <SafeAreaView className="bg-primary h-full">
            <View className="py-[16px] px-[24px] flex flex-col justify-between items-start h-full w-[100vw] ">
                <BackButton/>
                <View className="flex flex-col justify-between items-start space-y-[32px]">
                    <View className="flex flex-col justify-start items-start space-y-[16px]">
                        <Text className="text-white text-[32px] font-ubold">Hello there 👋</Text>
                        <Text className="text-white text-[18px] font-uregular">Please enter your email & password to create an account.</Text>
                    </View>
                    <View className="flex flex-col justify-start items-start space-y-[20px]">
                        <Field placeholder="Email" name="Email" icon={icons.email}/>
                        <Field placeholder="Password" name="Password" icon={icons.email}/>
                        <View className="w-full flex flex-row justify-start items-center space-x-[14px] border-b-[1px] border-dark pb-[44px]">
                            <Checkbox
                                value={checked}
                                onValueChange={setChecked}
                                color={checked ? '#17CE92' : undefined}
                                className="border-[3px] rounded-[8px] border-secondary w-[24px] h-[24px]"
                            />
                            <View className="flex flex-row justify-start items-center space-x-[15px]">
                                <Text className="text-white text-[16px] font-usemibold">I agree to AmeliaAI <Text className="text-secondary text-[16px] font-usemibold">Public Agreement, Terms, & Privacy Policy.</Text></Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View className="w-full flex flex-row justify-center items-center space-x-[8px]">
                    <Text className="text-white text-[16px] font-usemibold">Already have an account?</Text>
                    <TouchableOpacity onPress={() => router.push('/sign-up')} className="text-secondary text-[16px] font-usemibold"><Text className="text-secondary text-[16px] font-usemibold">Log in</Text></TouchableOpacity>
                </View>
                <Button label="Continue"/>
            </View>
        </SafeAreaView>
    )
}

export default SignIn;