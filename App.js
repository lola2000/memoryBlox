import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  render() {
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>{text ? text : "Top"}</Text>
        </View>
        <View style={styles.content}>
          <TextInput
            style={{
              height: 40,
              borderColor: "#4573A2",
              borderWidth: 1,
              margin: 10,
              padding: 5
            }}
            value={text}
            onChangeText={text => this.setState({ text })}
            placeholder="Type something..."
          />
        </View>
        <View style={styles.header}>
          <Text>b zup ottom</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    flexDirection: "column",
    paddingTop: 20
  },
  content: {
    flexGrow: 1
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4573A2",
    height: 45
  },
  footer: {
    backgroundColor: "grey",
    height: 45
  },
  text: {
    color: "#fff",
    fontWeight: "bold"
  }
});
