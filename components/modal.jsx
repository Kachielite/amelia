import {View, Image, Text} from "react-native";
import Modal from "react-native-modal";

import {icons} from '../constants'

const ModalComponent = ({title, isVisible}) => {

    return(
        <View>
            <Modal
                isVisible={isVisible}
                animationIn="slideInUp"
                animationInTiming={300} animationOut="slideOutDown"
                animationOutTiming={300}
                avoidKeyboard={true}
                coverScreen={true}
            >
                <View className="bg-[#1F222A] w-[340px] h-[482px] mx-auto rounded-[40px] flex flex-col space-y-[32px] justify-center items-center ">
                    <Image source={icons.success} resizeMode="contain" width={185} height={180}/>
                    <View className="flex flex-col items-center space-y-[16px]">
                        <Text className="text-secondary font-ubold text-[24px]">{title}</Text>
                        <View className="flex flex-col items-center">
                            <Text className="text-white font-uregular text-[16px]">Please wait...</Text>
                            <Text className="text-white font-uregular text-[16px]">You will be directed to the homepage.</Text>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ModalComponent;