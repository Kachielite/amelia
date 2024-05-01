import {useState} from "react";
import {Image, TouchableOpacity, View} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import {icons} from '../constants'
const ProfileImage = () => {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return(
        <View className="w-full flex justify-center items-center mb-[16px]">
            <TouchableOpacity onPress={pickImage} className="w-[120px] h-[120px] rounded-full relative">
                {image ?
                    <Image source={{ uri: image }} resizeMode="fit" className="w-[120px] h-[120px] overflow-hidden rounded-full"/>
                    : <Image source={icons.profile } resizeMode="contain"
                        className="w-[120px] h-[120px]"/>}
                <Image source={icons.edit} resizeMode="contain" className="w-[30px] h-[30px] absolute bottom-0 right-0"/>
            </TouchableOpacity>
        </View>
    )
}

export default ProfileImage;