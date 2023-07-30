import { Button, Image, ImageBackground, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function Calculadora({ navigation }) {
  
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("Calculadora")}
      >
        <Image
          style={{
            flex: 1,
            width: undefined,
            height: undefined,
          }}
          source={require("../../assets/pngwing.com.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 5,
    borderRadius: 10,

  },
};
