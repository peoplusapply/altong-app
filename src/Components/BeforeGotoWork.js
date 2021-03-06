import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default class BeforeGotoWork extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, workplace, onPress } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.textBold}>{name}</Text>
            <Text style={styles.text}>님</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Text style={styles.textBold}>{workplace}</Text>
          </View>
          <Text style={styles.text}>출근전이에요.</Text>
          <TouchableOpacity
            style={{
              marginTop: 40
            }}
            onPress={onPress}
          >
            <Text style={styles.gotoWorkBtn}>출근하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ffffff"
  },
  content: {
    height: 450,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 24
  },
  textBold: {
    fontSize: 34,
    color: "#3250AE", // identity color
    fontFamily: "noto-sans-bold"
  },
  text: {
    color: "#333",
    fontFamily: "noto-sans",
    fontSize: 34
  },
  gotoWorkBtn: {
    fontSize: 34,
    padding: 5,
    color: "#3250AE",
    fontFamily: "noto-sans-bold"
  }
});
