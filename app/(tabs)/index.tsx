import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          <Image
            source={require("../../assets/images/sait-logo.png")}
            style={styles.headerImage}
          />
        </View>

        <View style={styles.centerContainer}>
          <Text style={styles.title}>This Week: Mar 9 - 15</Text>
        </View>

        <View style={styles.rightContainer}></View>
      </View>

      <View style={styles.tabs}>
        <Text style={[styles.tabText, styles.activeTab]}>Work To Do</Text>
        <Text style={styles.tabText}>Events</Text>
        <Text style={styles.tabText}>All</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 40 },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  time: { fontSize: 18 },

  rightIcons: { flexDirection: "row", gap: 10 },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderColor: "#ccc",
    height: 50,
    paddingTop: 10,
  },

  leftContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },

  centerContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  rightContainer: {
    flex: 1,
    alignItems: "flex-end",
  },

  headerImage: {
    width: 38,
    height: 18,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tabText: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: 'gray',
    textAlign: 'center',
    flex: 1,
  },
  activeTab: {
    color: '#008B8B',
    borderBottomWidth: 2,
    borderBottomColor: '#008B8B',
  },

  
});
