import {SafeAreaView} from "react-native-safe-area-context";
import {Text} from "react-native";
import Button from "../../components/button";
import {signOut} from "../../lib/appwrite";

const Account = () => {
    return(
        <SafeAreaView className="bg-primary h-full">
            <Text className="text-white">Account</Text>
            <Button label="Log out" onPress={signOut}/>
        </SafeAreaView>
    )
}

export default Account;