import {StatusBar} from "react-native";
import {Redirect, router} from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import Onboarding from "react-native-onboarding-swiper";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {images} from '../constants'
import OnboardingImage from "../components/onboardingImage";
import {useAuthContext} from "../context/authContext";
import {useEffect} from "react";


export default function App() {
    const {isLoading, isLoggedIn,} = useAuthContext();

    if (!isLoading && isLoggedIn) return <Redirect href="/complete-profile" />;

    const completingOnboarding = async () => {
        await AsyncStorage.setItem('isFirstTimeOpen', 'false');
        router.push("/welcome")
    }

    useEffect(() => {
        async function checkFirstTimer() {
            const isFirstTimeOpen = await AsyncStorage.getItem("isFirstTimeOpen");
            if (isFirstTimeOpen === 'false') {
                router.push("/complete-profile")
            }
        }
        checkFirstTimer();

    }, []);
  return (
    <SafeAreaView className="bg-[#181A20] h-full flex justify-start">
        <Onboarding
            onSkip={completingOnboarding}
            onDone={completingOnboarding}
            bottomBarColor="#181A20"
            pages={[
                {
                    backgroundColor: '#181A20',
                    title: "",
                    subtitle: "",
                    image: <OnboardingImage image={images.onboarding1} title="The best AI Chatbot app in this century" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."/>,
                },
                {
                    backgroundColor: '#181A20',
                    title: "",
                    subtitle: "",
                    image: <OnboardingImage image={images.onboarding2} title="Various AI Assistants to help you more" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..." />,
                },
                {
                    backgroundColor: '#181A20',
                    title: "",
                    subtitle: "",
                    image: <OnboardingImage image={images.onboarding3} title="Try premium for your unlimited usage" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..." />,
                }
            ]}
        />
        <StatusBar backgroundColor="#181A20" style="light" />
    </SafeAreaView>
  );
}
