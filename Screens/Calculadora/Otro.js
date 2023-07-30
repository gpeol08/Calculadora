import { Text, View } from "react-native";
import ButtonsOptions from "./ButtonsOptions";
import { useState } from "react";
import { Actions } from "./Actions";

export default function Otro() {
  const [valorPantalla, setValorPantalla] = useState({
    pantalla: "",
    memoria: "",
    action: "",
  });
  return (
    <View style={styles.main}>
      <View style={styles.text}>
        <Text>{valorPantalla.memoria}</Text>
        <Text>{valorPantalla.pantalla}</Text>
      </View>
      <View style={styles.viewNumbers}>
        <ButtonsOptions
          text={"C"}
          valorPantalla={valorPantalla}
          setValorPantalla={setValorPantalla}
          action={Actions.limpiarpantall}
        />
        <ButtonsOptions
          text={"CE"}
          valorPantalla={valorPantalla}
          setValorPantalla={setValorPantalla}
          action={Actions.limpiarestado}
        />
        <ButtonsOptions
          text={"+/-"}
          valorPantalla={valorPantalla}
          setValorPantalla={setValorPantalla}
          action={Actions.abs}
        />
        <ButtonsOptions
          text={""}
          valorPantalla={valorPantalla}
          setValorPantalla={setValorPantalla}
          action={Actions.raizcuadrada}
        />
        <ButtonsOptions
          text={7}
          valorPantalla={valorPantalla}
          setValorPantalla={setValorPantalla}
          action={Actions.numero}
        />
        <ButtonsOptions
          text={8}
          valorPantalla={valorPantalla}
          setValorPantalla={setValorPantalla}
          action={Actions.numero}
        />
        <ButtonsOptions
          text={9}
          valorPantalla={valorPantalla}
          setValorPantalla={setValorPantalla}
          action={Actions.numero}
        />
        <ButtonsOptions
          text={"/"}
          valorPantalla={valorPantalla}
          setValorPantalla={setValorPantalla}
          action={Actions.division}
        />
        <ButtonsOptions
          text={4}
          valorPantalla={valorPantalla}
          setValorPantalla={setValorPantalla}
          action={Actions.numero}
        />
        <ButtonsOptions
          text={5}
          valorPantalla={valorPantalla}
          setValorPantalla={setValorPantalla}
          action={Actions.numero}
        />
        <ButtonsOptions
          text={6}
          valorPantalla={valorPantalla}
          setValorPantalla={setValorPantalla}
          action={Actions.numero}
        />
        <ButtonsOptions
          text={"*"}
          valorPantalla={valorPantalla}
          setValorPantalla={setValorPantalla}
          action={Actions.multiplicacion}
        />
        <ButtonsOptions
          text={1}
          valorPantalla={valorPantalla}
          setValorPantalla={setValorPantalla}
          action={Actions.numero}
        />
        <ButtonsOptions
          text={2}
          valorPantalla={valorPantalla}
          setValorPantalla={setValorPantalla}
          action={Actions.numero}
        />
        <ButtonsOptions
          text={3}
          valorPantalla={valorPantalla}
          setValorPantalla={setValorPantalla}
          action={Actions.numero}
        />
        <ButtonsOptions
          text={"-"}
          valorPantalla={valorPantalla}
          setValorPantalla={setValorPantalla}
          action={Actions.resta}
        />
        <ButtonsOptions
          text={0}
          valorPantalla={valorPantalla}
          setValorPantalla={setValorPantalla}
          action={Actions.numero}
        />
        <ButtonsOptions
          text={"."}
          valorPantalla={valorPantalla}
          setValorPantalla={setValorPantalla}
          action={Actions.punto}
        />
        <ButtonsOptions
          text={"="}
          valorPantalla={valorPantalla}
          setValorPantalla={setValorPantalla}
          action={Actions.igual}
        />
        <ButtonsOptions
          text={"+"}
          valorPantalla={valorPantalla}
          setValorPantalla={setValorPantalla}
          action={Actions.suma}
        />
      </View>
    </View>
  );
}

const styles = {
  text: {
    backgroundColor: "#fff",
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 5,
    height: 80,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: 15,
    paddingBottom: 5,
  },
  main: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 8,
  },
  viewNumbers: {
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    paddingLeft: 3,
  },
};
