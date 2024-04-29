import {Image, TouchableOpacity} from "react-native";
import {router} from "expo-router";

import {icons} from "../constants"

const BackButton = () => {
    return(
        <TouchableOpacity onPress={() => router.back()}>
            <Image source={icons.BackIcon} resizeMode="contain" className="w-[28px] h-[28px]" />
        </TouchableOpacity>
    )
}

export default BackButton;