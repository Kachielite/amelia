import {useState} from "react";
import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";


import {icons} from "../constants";
import moment from "moment";

const DatePicker = ({handleChangeText}) => {
    const [selectedDate, setSelectedDate] = useState()
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setSelectedDate(date)
        hideDatePicker();
    };
    return (
        <View className="flex flex-col justify-start items-start space-y-[10px] border-b-[1px] border-secondary w-full mb-[24px]">
            <Text className="text-white font-ubold text-[16px]">Date of birth</Text>
            <TouchableOpacity onPress={showDatePicker} className="w-full flex flex-row justify-between py-[12.5px]">
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                    isDarkModeEnabled={false}
                />
                <TextInput
                    className="w-[90%] text-white text-[18px] font-usemibold"
                    value={moment(selectedDate).format("DD/MM/YYYY")}
                    onChangeText={handleChangeText}
                />
                <Image source={icons.calendar} resizeMode="contain" className="h-[23px] w-[23px]"/>
            </TouchableOpacity>
        </View>
    )
}

export default DatePicker;