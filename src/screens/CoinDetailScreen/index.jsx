import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Coin from "../../../assets/data/crypto.json";
import CoinDetailHeader from "./Components/CoinDetailHeader";
import styles from "./styles";

const CoinDetailsScreen = () => {
  const {
    image: { small },
    name,
    symbol,
    market_data: { market_cap_rank, current_price },
  } = Coin;

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <CoinDetailHeader
        image={small}
        name={name}
        symbol={symbol}
        marketCapRank={market_cap_rank}
      />
      <View style={{ padding: 20 }}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.currentPrice}>${current_price.usd}</Text>
      </View>
    </View>
  );
};

export default CoinDetailsScreen;
