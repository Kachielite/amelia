import {useState} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {useAuthContext} from "../../context/authContext";
import {createUser} from "../../lib/appwrite";
import {router} from "expo-router";
import { useToast } from "react-native-toast-notifications";



const useSignUp = () => {
    const toast = useToast();
    const {setUser, setIsLoggedIn} = useAuthContext();
    const [isSigningUp, setSigningUp] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            tos: false,
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Please provide a valid email address")
                .required("Email is required."),
            password: Yup.string().required("Password is required"),
            tos: Yup.bool()
        }),
        onSubmit: async (values) => {
            setSigningUp(true);
            try {
                const result = await createUser(
                    values.email,
                    values.password,
                );
                setUser(result);
                setIsLoggedIn(true);
                router.push('/complete-profile')

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
                setSigningUp(false);

            }
        },
    });



    return {formik, isSigningUp, setSigningUp}
}

export default useSignUp;