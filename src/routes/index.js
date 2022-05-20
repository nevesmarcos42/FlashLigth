import { createNativeStackNavigator } from '@react-navigation/native-stack';

import flashLigth from '../pages/FlashLigth'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="FashLigth"
                component={flashLigth}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}