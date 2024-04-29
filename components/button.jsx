import {TouchableOpacity, Text} from "react-native";

const Button = ({label, type, otherStyles, onPress}) => {
    return(
        <TouchableOpacity
            onPress={onPress}
            className={`${type === "primary" ? "bg-[#35383F]": "bg-secondary"} px-[18px] py-[16] ${otherStyles} rounded-[100px] flex justify-center items-center w-full`}
        >
            <Text className="text-white font-ubold text-[18px]">
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default Button;