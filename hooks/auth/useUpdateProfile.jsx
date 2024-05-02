import {useState} from "react";
import { useFormik } from "formik";
import {useAuthContext} from "../../context/authContext";
import {storeFile, updateUser} from "../../lib/appwrite";
import {router} from "expo-router";
import { useToast } from "react-native-toast-notifications";
import moment from "moment/moment";


const useUpdateProfile = () => {
    const toast = useToast();
    const {user} = useAuthContext();
    const [showModal,setShowModal] = useState(false);

    const formik = useFormik({
        initialValues: {
            full_name: "",
            profile_image: "",
            phone_number: "",
            gender: "Male",
            dob: moment()
        },
        onSubmit: async (values) => {
            setShowModal(true)
            try {
                const profileImage = await storeFile(values.profile_image, user.email);
                try{
                     await updateUser(
                        user.$id,
                        values.full_name,
                        profileImage,
                        values.phone_number,
                        values.gender,
                        values.dob
                    );
                    router.push('/welcome')
                } catch (e) {
                    throw e;
                }

            } catch (error) {
                console.error(error.message)
                toast.show("Something wrong happened!!", {
                    type: "danger",
                    placement: "bottom",
                    duration: 4000,
                    offset: 30,
                    animationType: "slide-in",
                })
            } finally {
                setShowModal(false);

            }
        },
    });


    console.info("values", formik.values.gender)

    return {formik, showModal,}
}

export default useUpdateProfile;