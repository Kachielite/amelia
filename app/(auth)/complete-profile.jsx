import {SafeAreaView} from "react-native-safe-area-context";
import {ScrollView, Text, View} from "react-native";
import BackButton from "../../components/back-button";
import Field from "../../components/field";
import Button from "../../components/button";
import ProfileImage from "../../components/image-picker";
import CountryPickerField from "../../components/country-picker";
import Dropdown from "../../components/dropdown";
import DatePicker from "../../components/date-picker";
import ModalComponent from "../../components/modal";
import useUpdateProfile from "../../hooks/auth/useUpdateProfile";

const CompleteProfile = () => {
    const {formik, showModal} = useUpdateProfile();
    return(
        <SafeAreaView className="bg-primary h-full">
            <ModalComponent isVisible={showModal} title="Sign up Successful!"/>
            <View className="py-[16px] px-[24px] flex flex-col justify-between items-start h-full w-[100vw]">
                <BackButton/>
                <ScrollView className="mt-[24px] w-full" showsVerticalScrollIndicator={false}>
                    <View className="flex flex-col justify-between items-start space-y-[32px] w-full">
                        <View className="flex flex-col justify-start items-start space-y-[16px]">
                            <Text className="text-white text-[31px] font-ubold">Complete your profile 📋</Text>
                            <Text className="text-white text-[18px] font-uregular">Please enter your profile. Don't worry, only you can see your personal data. No one else will be able to see it. Or you can skip it for now.</Text>
                        </View>
                        <View className="flex flex-col justify-start items-start space-y-[16px] w-full">
                            <ProfileImage formik={formik}/>
                            <Field placeholder="Full Name" name="Full Name" id="full_name" formik={formik}/>
                            <CountryPickerField formik={formik}/>
                            <Dropdown formik={formik}/>
                            <DatePicker formik={formik}/>
                        </View>
                    </View>
                </ScrollView>
                <View className="w-full flex flex-row justify-between items-center pt-[24px] pb-[36px] border-t-[1px] border-dark">
                    <View className="w-[46%]">
                        <Button label="Skip" type="primary"/>
                    </View>
                    <View className="w-[46%]">
                        <Button label="Continue" onPress={() => formik.handleSubmit()} />
                    </View>
                </View>
            </View>
        </SafeAreaView>

    )
}

export default CompleteProfile;