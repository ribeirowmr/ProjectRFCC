import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { css } from './assets/css/Css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Login, Exames, Bazar, Pedidos, Local } from './views';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#ffb2c1" },
        headerTintColor: "#fffbff",
        headerTitleStyle: { fontWeight: 'bold' },
        headerTitleAlign: 'center' // Centraliza o título
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={Home} 
        options={{ title: "Início" }} 
      />
      <Drawer.Screen 
        name="Login" 
        component={Login} 
        options={{ title: "Login" }} 
      />
      <Drawer.Screen 
        name="Exames" 
        component={Exames} 
        options={{ title: "Exames" }} 
      />
      <Drawer.Screen 
        name="Bazar" 
        component={Bazar} 
        options={{ title: "Bazar" }} 
      />
      <Drawer.Screen 
        name="Pedidos" 
        component={Pedidos} 
        options={{ title: "Pedidos" }} 
      />
      <Drawer.Screen 
        name="Local" 
        component={Local} 
        options={{ title: "Local" }} 
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Drawer" 
          component={DrawerNavigator} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
