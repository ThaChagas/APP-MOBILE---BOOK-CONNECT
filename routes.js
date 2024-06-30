import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import Lojas from "./src/screens/Lojas";
import Config from "./src/screens/Config";
import Usuario from "./src/screens/Usuario";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Foundation from '@expo/vector-icons/Foundation';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



export const StackNavigate = () => {

    return (

        <Stack.Navigator initialRouteName="Login">

            <Stack.Screen 
                name="Login"
                component={ Login }
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen 
                name="Home"
                component={ TabNavigate }
                options={{
                    headerShown: false
                }}
            />

        </Stack.Navigator>
    )
}

export const TabNavigate = () => {

    return (

        <Tab.Navigator initialRouteName="Home"
        >
        <Tab.Screen
            name="Home"
            component={ Home }
            options={{
                tabBarIcon: () => (
                    <Foundation name="home" size={26} color="#788896" />
                ),
                tabBarActiveTintColor: '#e8833a',
                tabBarInactiveTintColor: '#788896',
                tabBarActiveBackgroundColor: '#FAE6D8',
                tabBarInactiveBackgroundColor: '#e8833a',
                headerTintColor: '#788896',
                headerStyle: {
                    backgroundColor: '#e8833a',
                  },
                  headerTitleStyle: {
                    justifyContent: 'center',
                   
                  },
            }}
        />

        <Tab.Screen
            name="Usuário"
            component={ Usuario }
            options={{
                tabBarIcon: () => (
                    <FontAwesome5 name="user-alt" size={26} color="#788896" />
                ),
                tabBarActiveTintColor: '#e8833a',
                tabBarInactiveTintColor: '#788896',
                tabBarActiveBackgroundColor: '#FAE6D8',
                tabBarInactiveBackgroundColor: '#e8833a',
                headerTintColor: '#788896',
                headerStyle: {
                    backgroundColor: '#e8833a',
                  },
                  headerTitleStyle: {
                    justifyContent: 'center',
                
                  },
            }}
        />

         <Tab.Screen
            name="Configurações"
            component={ Config }
            options={{
                tabBarIcon: () => (
                    <MaterialIcons name="settings" size={26} color="#788896" />
                ),
                tabBarActiveTintColor: '#e8833a',
                tabBarInactiveTintColor: '#788896',
                tabBarActiveBackgroundColor: '#FAE6D8',
                tabBarInactiveBackgroundColor: '#e8833a',
                headerTintColor: '#788896',
                headerStyle: {
                    backgroundColor: '#e8833a',
                  },
                  headerTitleStyle: {
                    justifyContent: 'center',
                  },
            }}
        />  

        <Tab.Screen
            name="Lojas"
            component={ Lojas }
            options={{
                tabBarIcon: () => (
                    <FontAwesome6 name="location-dot" size={26} color="#788896" />
                ),
                tabBarActiveTintColor: '#e8833a',
                tabBarInactiveTintColor: '#788896',
                tabBarActiveBackgroundColor: '#FAE6D8',
                tabBarInactiveBackgroundColor: '#e8833a',
                headerTintColor: '#788896',
                headerStyle: {
                    backgroundColor: '#e8833a',
                  },
                  headerTitleStyle: {
                    justifyContent: 'center',
                    
                  },
            }}
        /> 


         </Tab.Navigator>

    )
    
}