import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Breath from '../pages/Breath/Breath';
import Settings from '../pages/Settings/Settings';



const Stack = createNativeStackNavigator();

const screens: any[] = [
    { name: 'Breath', component: Breath, options: { headerShown: false } },
    { name: 'Settings', component: Settings, options: { headerShown: false } }
];

const Router: React.FC = () => {

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Breath">
                    {screens?.map((screen) => (
                        <Stack.Screen
                            key={screen.name}
                            name={screen.name}
                            component={screen.component}
                            options={screen.options}
                        />
                    ))}
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default Router