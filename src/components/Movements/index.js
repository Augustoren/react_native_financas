import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function Movements({ data, visibility }) {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{data.date}</Text>
      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>
        {visibility ? (
          <Text style={data.type == 1 ? styles.income : styles.expenses}>
            {data.type == 1 ? `R$ ${data.value}` : `-R$ ${data.value}`}
          </Text>
        ) : (
          <View style={styles.skeleton}></View>
        )}
      </View>
    </View>
  );
}

