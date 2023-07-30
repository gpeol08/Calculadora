import { Dimensions, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Actions } from "./Actions";
export default ButtonsOptions = ({
  text,
  valorPantalla,
  setValorPantalla,
  action,
}) => {
  const onAction = () => {
    switch (action) {
      case Actions.numero:
        setValorPantalla({
          ...valorPantalla,
          pantalla: valorPantalla.pantalla + "" + text,
        });
        break;
      case Actions.limpiarpantall:
        setValorPantalla({
          ...valorPantalla,
          pantalla: "",
        });
        break;
      case Actions.limpiarestado:
        setValorPantalla({
          ...valorPantalla,
          pantalla: "",
          memoria: "",
        });
        break;
      case Actions.abs:
        setValorPantalla({
          ...valorPantalla,
          pantalla: Number(valorPantalla.pantalla * -1),
        });
        break;
      case Actions.punto:
        if (
          valorPantalla.pantalla === undefined ||
          valorPantalla.pantalla === ""
        ) {
          setValorPantalla({
            ...valorPantalla,
            pantalla: "0.",
          });
          return;
        }
        if (valorPantalla.pantalla.toString().includes(".")) return;
        setValorPantalla({
          ...valorPantalla,
          pantalla: valorPantalla.pantalla + ".",
        });
        break;
      case Actions.igual:
        var pantalla = 0;
        switch (valorPantalla.action) {
          case Actions.suma:
            pantalla =
              Number(valorPantalla.pantalla) + Number(valorPantalla.memoria);
            break;
          case Actions.resta:
            pantalla =
              Number(valorPantalla.pantalla) - Number(valorPantalla.memoria);
            break;
          case Actions.division:
            pantalla =
              Number(valorPantalla.pantalla) / Number(valorPantalla.memoria);
            break;
          case Actions.multiplicacion:
            pantalla =
              Number(valorPantalla.pantalla) * Number(valorPantalla.memoria);
            break;
        }
        setValorPantalla({
          ...valorPantalla,
          action: {},
          memoria: "",
          pantalla,
        });
        break;
      case Actions.suma:
        setValorPantalla({
          ...valorPantalla,
          action: Actions.suma,
          pantalla: "",
          memoria:
            Number(valorPantalla.pantalla) + Number(valorPantalla.memoria),
        });
        break;
      case Actions.resta:
        setValorPantalla({
          ...valorPantalla,
          action: Actions.resta,
          pantalla: "",
          memoria:
            Number(valorPantalla.pantalla) - Number(valorPantalla.memoria),
        });
        break;
      case Actions.multiplicacion:
        console.log(valorPantalla);
        setValorPantalla({
          ...valorPantalla,
          action: Actions.multiplicacion,
          pantalla: "",
          memoria:
            Number(valorPantalla.pantalla) *
            (valorPantalla.memoria === undefined ||
            valorPantalla.memoria === null ||
            valorPantalla.memoria === "" ||
            valorPantalla.memoria === 0
              ? 1
              : Number(valorPantalla.memoria)),
        });
        break;
      case Actions.division:
        var memoria = valorPantalla.memoria;
        if (
          valorPantalla.memoria === undefined ||
          valorPantalla.memoria === null ||
          valorPantalla.memoria === "" ||
          valorPantalla.memoria == "0"
        ) {
          if (
            valorPantalla.pantalla === undefined ||
            valorPantalla.pantalla === null ||
            valorPantalla === "" ||
            valorPantalla == "0"
          ) {
            memoria = "";
          } else {
            memoria = valorPantalla.pantalla;
          }
        } else {
          if (
            valorPantalla.pantalla === undefined ||
            valorPantalla.pantalla === null ||
            valorPantalla === "" ||
            valorPantalla == "0"
          ) {
          } else {
            memoria =
               Number(valorPantalla.pantalla) / Number(valorPantalla.memoria);
          }
        }
        setValorPantalla({
          ...valorPantalla,
          action: Actions.division,
          pantalla: "",
          memoria,
        });
        break;
      case Actions.raizcuadrada:
        // setValorPantalla({
        //   ...valorPantalla,
        //   action: Actions.raizcuadrada,
        // });
        break;
      default:
        break;
    }
  };
  return (
    <TouchableOpacity style={styles.number} onPress={() => onAction()}>
      <View
        style={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          height: 40,
        }}
      >
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
const windowWidth = Dimensions.get("window").width;
const styles = {
  number: {
    backgroundColor: "white",
    width: windowWidth * 0.23,
    height: 40,
    margin: 2,
    borderRadius: 4,
  },
};
