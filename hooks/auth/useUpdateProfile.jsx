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
            setShowModal(true);
            try {
                const fileResponse = await storeFile(values.profile_image);
                if (fileResponse?.name) {
                    await updateUser(
                        user.$id,
                        values.full_name,
                        fileResponse.name,
                        values.phone_number,
                        values.gender,
                        values.dob
                    );
                    router.push('/welcome');
                } else {
                    throw new Error("File upload failed or response invalid");
                }
            } catch (error) {
                console.error("Submission error:", error);
                toast.show("Something went wrong during submission", {
                    type: "danger",
                    placement: "bottom",
                    duration: 4000,
                    offset: 30,
                    animationType: "slide-in",
                });
            } finally {
                setShowModal(false);
            }
        }
,
    });


    return {formik, showModal,}
}

export default useUpdateProfile;