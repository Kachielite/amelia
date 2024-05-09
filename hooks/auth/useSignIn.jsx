import {useState} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {useAuthContext} from "../../context/authContext";
import {createUser, signIn} from "../../lib/appwrite";
import {router} from "expo-router";
import { useToast } from "react-native-toast-notifications";
const useSignIn = () => {
    const toast = useToast();
    const {setUser, setIsLoggedIn} = useAuthContext();
    const [isSigningIn, setSigningIn] = useState(false);
    const [showModal,setShowModal] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Please provide a valid email address")
                .required("Email is required."),
            password: Yup.string().required("Password is required"),
        }),
        onSubmit: async (values) => {
            setShowModal(true);
            try {
                const result = await signIn(
                    values.email,
                    values.password,
                );
                setUser(result);
                setIsLoggedIn(true);
                router.push('/chat')

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



    return {formik, isSigningIn, setSigningIn, showModal}
}

export default useSignIn;