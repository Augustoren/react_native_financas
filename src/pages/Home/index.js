import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";
import styles from "./styles";

const list = [
  {
    id: 1,
    label: "Neo Energia",
    value: "300,90",
    date: "17/09/2023",
    type: -1,
  },
  {
    id: 2,
    label: "Pix Jose Da Silva",
    value: "2.300,50",
    date: "18/09/2023",
    type: 1,
  },
  {
    id: 3,
    label: "Deposito salario",
    value: "5.999,00",
    date: "20/09/2023",
    type: 1,
  },
  {
    id: 4,
    label: "Compra Aliexpress",
    value: "129,30",
    date: "21/09/2023",
    type: -1,
  },
  {
    id: 5,
    label: "Compra Shopee",
    value: "99,90",
    date: "21/09/2023",
    type: -1,
  },
];

export default function Home() {
  const [balanceVisibility, setBalanceVisibility] = useState(true);

  return (
    <View style={styles.container}>
      <Header name="Augusto Renan" />
      <Balance balance="9.250,90" expenses="527,00" />
      <Actions/>
      <View style={styles.titleSection}>
        <Text style={styles.title}>Ultimas movimentações</Text>
        <TouchableOpacity
          style={styles.balanceView}
          onPress={() => {
            setBalanceVisibility(!balanceVisibility);
          }}
        >
          <Feather
            name={balanceVisibility ? "eye" : "eye-off"}
            size={22}
            color={"#aaaaaa"}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Movements data={item} visibility={balanceVisibility} />
        )}
      />
    </View>
  );
}
