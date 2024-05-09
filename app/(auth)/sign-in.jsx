import {SafeAreaView} from "react-native-safe-area-context";
import {View, Text, TouchableOpacity} from "react-native";
import Checkbox from 'expo-checkbox';
import BackButton from "../../components/back-button";
import Field from "../../components/field";

import {icons} from '../../constants'
import Button from "../../components/button";
import {router} from "expo-router";
import {useState} from "react";
import ModalComponent from "../../components/modal";
import useSignIn from "../../hooks/auth/useSignIn";

const SignIn = () => {
    const {formik, showModal} = useSignIn()
    return(
        <SafeAreaView className="bg-primary h-full">
            <ModalComponent isVisible={showModal} title="Log in Successful!"/>
            <View className="py-[16px] px-[24px] flex flex-col justify-between items-start h-full w-[100vw] ">
                <BackButton/>
                <View className="flex flex-col justify-between items-start space-y-[32px]">
                    <View className="flex flex-col justify-start items-start space-y-[16px]">
                        <Text className="text-white text-[32px] font-ubold">
                            Welcome Back 👋
                        </Text>
                        <Text className="text-white text-[18px] font-uregular">
                            Please enter your email & password to log in.
                        </Text>
                    </View>
                    <View className="flex flex-col justify-start items-start space-y-[16px]">
                        <Field placeholder="Email" name="Email" id="email" formik={formik} icon={icons.email}/>
                        <Field placeholder="Password" name="Password" id="password" formik={formik}/>
                    </View>
                </View>
                <View className="w-full flex flex-row justify-center items-center space-x-[8px]">
                    <TouchableOpacity className="text-secondary text-[16px] font-usemibold">
                        <Text className="text-secondary text-[16px] font-usemibold">
                            Forgot Password
                        </Text>
                    </TouchableOpacity>
                </View>
                <View className="w-full flex flex-row justify-center items-center space-x-[8px]">
                    <Text className="text-white text-[16px] font-usemibold">
                        Don’t have an account?
                    </Text>
                    <TouchableOpacity onPress={() => router.push('/sign-up')} className="text-secondary text-[16px] font-usemibold">
                        <Text className="text-secondary text-[16px] font-usemibold">
                            Sign up
                        </Text>
                    </TouchableOpacity>
                </View>
                <Button label="Log in" onPress={formik.handleSubmit}/>
            </View>
        </SafeAreaView>
    )
}

export default SignIn;

{/*<View className="w-full flex flex-row justify-start items-center space-x-[14px] pb-[44px]">*/}
{/*    <Checkbox*/}
{/*        value={checked}*/}
{/*        onValueChange={setChecked}*/}
{/*        color={checked ? '#17CE92' : undefined}*/}
{/*        className="border-[3px] rounded-[8px] border-secondary w-[24px] h-[24px]"*/}
{/*    />*/}
{/*    <View className="flex flex-row justify-start items-center space-x-[10px]">*/}
{/*        <Text className="text-white text-[16px] font-usemibold">Remember me</Text>*/}
{/*    </View>*/}
{/*</View>*/}