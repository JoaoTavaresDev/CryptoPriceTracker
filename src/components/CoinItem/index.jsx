import { Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./style";
import React from "react";

const CoinItem = ({ marketCoin }) => {
  const {
    name,
    image,
    market_cap_rank,
    symbol,
    current_price,
    price_change_percentage_24h,
    market_cap,
  } = marketCoin;

  return (
    <View style={styles.coinContainer}>
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: 35,
          height: 35,
          marginRight: 10,
          alignSelf: "center",
        }}
      />
      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.rank}>{market_cap_rank}</Text>
          <Text style={styles.text}>{symbol.toUpperCase()}</Text>
          <AntDesign
            name="caretdown"
            size={14}
            color="white"
            style={{ alignSelf: "center", marginRight: 5 }}
          />
          <Text style={styles.text}>
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: "auto" }}>
        <Text style={styles.title}>{current_price}</Text>
        <Text style={styles.text}>MCap {market_cap} T</Text>
      </View>
    </View>
  );
};

export default CoinItem;
