import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";

export default function App() {
    return (
        <SafeAreaView>
            <Text className="text-3xl text-red-500 font-ubold">Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

