import {Image, View, Text} from "react-native";
import {Tabs} from "expo-router";
import { StatusBar } from 'expo-status-bar'

import {icons} from '../../constants'


const TabIcon = ({icon, color, name, focused,}) => {
    return(
        <View className="justify-center items-center gap-2">
            <Image
                source={icon}
                className="w-[24px] h-[24px]"
                resizeMode="contain"
                tintColor={color}
            />
            <Text className={`${focused ? 'font-ubold ': 'font-umedium'} text-[10px]`} style={{color: color}}>
                {name}
            </Text>
        </View>
    )
}




const TabsLayout = () => {
    return(
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#17CE92',
                    tabBarInactiveTintColor: '#9E9E9E',
                    border: 'none',
                    tabBarStyle: {
                        backgroundColor: '#181A20',
                        height: 90,
                        borderTopColor: 'none',
                        paddingTop: 8
                    }
                }}

            >
                <Tabs.Screen
                    name="chat"
                    options={{
                        title: "Chat",
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => {
                            return(
                                <TabIcon
                                    icon={icons.chat}
                                    color={color}
                                    name="Chat"
                                    focused={focused}
                                />
                             )
                        }
                    }}
                />
                <Tabs.Screen
                    name="assistance"
                    options={{
                        title: "AI Assistance",
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => {
                            return(
                                <TabIcon
                                    icon={icons.assistance}
                                    color={color}
                                    name="AI Assistance"
                                    focused={focused}
                                />
                            )
                        }
                    }}
                />
                <Tabs.Screen
                    name="history"
                    options={{
                        title: "History",
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => {
                            return(
                                <TabIcon
                                    icon={icons.history}
                                    color={color}
                                    name="History"
                                    focused={focused}
                                />
                            )
                        }
                    }}
                />
                <Tabs.Screen
                    name="account"
                    options={{
                        title: "Account",
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => {
                            return(
                                <TabIcon
                                    icon={icons.account}
                                    color={color}
                                    name="Account"
                                    focused={focused}
                                />
                            )
                        }
                    }}
                />
            </Tabs>
            <StatusBar backgroundColor="#181A20" style="light" />
        </>
    )
}

export default TabsLayout