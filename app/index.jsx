import {StatusBar} from "react-native";
import {router} from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import Onboarding from "react-native-onboarding-swiper";

import {images} from '../constants'
import OnboardingImage from "../components/onboardingImage";


export default function App() {
  return (
    <SafeAreaView className="bg-[#181A20] h-full flex justify-start">
        <Onboarding
            onSkip={() => router.push("/welcome")}
            onDone={() => router.push("/welcome")}
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
