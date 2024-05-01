import {useState} from "react";
import {Dropdown} from "react-native-element-dropdown";
import {Image, Text, View, StyleSheet} from "react-native";


import {icons} from "../constants";

const GenderOption = () => {
    const data = [
        {value: "male", label: "Male"},
        {value: "female", label: "Female"}
    ]
    const [selectedGender, setSelectedGender] = useState("Male")
    return(
        <View className="flex flex-col justify-start items-start space-y-[10px] border-b-[1px] border-secondary w-full mb-[24px]">
            <Text className="text-white font-ubold text-[16px]">Gender</Text>
            <View className="w-full flex flex-row justify-between py-[12.5px] relative">
                <Dropdown
                    mode="modal"
                    renderLeftIcon={() => null }
                    activeColor="#181A20"
                    placeholderStyle={styles.placeholderStyle}
                    containerStyle={styles.containerStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    electedStyle={styles.selectedStyle}
                    itemTextStyle={styles.itemTextStyle}
                    itemContainerStyle={styles.itemContainerStyle}
                    data={data}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    onChange={item => {
                        setSelectedGender(item.value);
                    }}
                    value={selectedGender}
                    className="w-[100%] text-white text-[18px] font-usemibold placeholder:text-[#35383F]"
                />
                <Image source={icons.chevrondown} resizeMode="contain" className="h-[20px] w-[20px] absolute z-40 right-0 top-5"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    placeholderStyle: {
        color: "#35383F"
    },
    containerStyle: {
        backgroundColor: "#181A20",
        borderColor: "none"
    },
    selectedTextStyle: {
        color: "white",
    },
    selectedStyle: {
        backgroundColor: "red",
        borderColor: "none"
    },
    itemTextStyle: {
        color: "white",
    },
    itemContainerStyle: {
        backgroundColor: "#181A20",
        borderColor: "none"
    }
})

export default GenderOption;