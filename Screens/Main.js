import { createStackNavigator } from "@react-navigation/stack";
import Calculadora from "./Calculadora/Calculadora";
import { Text, View } from "react-native";
import Otro from "./Calculadora/Otro";

const Stack = createStackNavigator();
export default function Main() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Principal"
        component={Calculadora}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "tomato" },
        }}
      />
      <Stack.Screen
        name="Calculadora"
        component={Otro}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "tomato" },
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <Stack.Screen name="Profile s" component={Otro} />
      <Stack.Screen name="Settings" component={Calculadora} />
    </Stack.Navigator>
  );
}
const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };