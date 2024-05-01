import {Stack} from "expo-router";
import {StatusBar} from "react-native";

const AuthLayout = () => {
    return(
        <>
            <Stack>
                <Stack.Screen
                    name='welcome'
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='sign-in'
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='sign-up'
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='complete-profile'
                    options={{
                        headerShown: false
                    }}
                />
            </Stack>
            <StatusBar backgroundColor="#181A20" style="light" />
        </>
    )
}

export default AuthLayout;