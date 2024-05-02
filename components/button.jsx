import {TouchableOpacity, Text, ActivityIndicator} from "react-native";

const Button = ({label, type, otherStyles, onPress, isLoading = false}) => {
    return(
        <TouchableOpacity
            disabled={isLoading}
            onPress={onPress}
            className={`${type === "primary" ? "bg-[#35383F]": "bg-secondary"} ${isLoading && 'opacity-20'}  px-[18px] py-[16] ${otherStyles} rounded-[100px] flex flex-row space-x-2 justify-center items-center w-full`}
        >
            <Text className="text-white font-ubold text-[18px]">
                {label}
            </Text>
            {isLoading && (
                <ActivityIndicator
                    animating={isLoading}
                    color="#fff"
                    size="small"
                    className="ml-2"
                />
            )}
        </TouchableOpacity>
    )
}

export default Button;