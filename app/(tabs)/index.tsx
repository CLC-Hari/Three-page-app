import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

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
          <Text style={styles.title}>This Week</Text>
        </View>

        <View style={styles.rightContainer}></View>
      </View>

      <View style={styles.tabs}>
        <Text style={[styles.tabText, styles.activeTab]}>Work To Do</Text>
        <Text style={styles.tabText}>Events</Text>
        <Text style={styles.tabText}>All</Text>
      </View>

      <View style={styles.calendar}>
        <View style={styles.calendarSection}>
          <Text style={styles.calendarSectionText}>SUN</Text>
          <Text style={styles.calendarSectionText}>12</Text>
        </View>
        <View style={styles.calendarSection}>
          <Text style={styles.calendarSectionText}>MON</Text>
          <Text style={[styles.calendarSectionText, styles.calendarSectionTextActive]}>13</Text>
        </View>
        <View style={styles.calendarSection}>
          <Text style={styles.calendarSectionText}>TUE</Text>
          <Text style={styles.calendarSectionText}>14</Text>
        </View>
        <View style={styles.calendarSection}>
          <Text style={styles.calendarSectionText}>WED</Text>
          <Text style={styles.calendarSectionText}>15</Text>
        </View>
        <View style={styles.calendarSection}>
          <Text style={styles.calendarSectionText}>THU</Text>
          <Text style={styles.calendarSectionText}>16</Text>
        </View>
        <View style={styles.calendarSection}>
          <Text style={styles.calendarSectionText}>FRI</Text>
          <Text style={styles.calendarSectionText}>17</Text>
        </View>
        <View style={styles.calendarSection}>
          <Text style={styles.calendarSectionText}>SAT</Text>
          <Text style={styles.calendarSectionText}>18</Text>
        </View>
      </View>

      <View style={styles.dayChanger}>
        <SimpleLineIcons name="arrow-left" size={14} color="black"/>
        <Text style={styles.dayChangerText}>Monday, March 13, 2025</Text>
        <SimpleLineIcons name="arrow-right" size={14} color="black"/>
      </View>

      <View style={styles.upcoming}>
        <Text style={styles.upcomingText}>Nothing going on right now...</Text>
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
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  tabText: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: "gray",
    textAlign: "center",
    flex: 1,
  },
  activeTab: {
    color: "#008B8B",
    borderBottomWidth: 2,
    borderBottomColor: "#008B8B",
  },
  calendar: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderColor: "#ddd",
    borderWidth: 1,
  },
  calendarSection: {
    width: "14.28%",
    padding: 10,
    borderColor: "#ddd",
    borderWidth: 1,
    minHeight: 250,
  },
  calendarSectionText: {
    fontSize: 11,
    textAlign: "center",
    fontWeight: "bold",
  },
  calendarSectionTextActive: {
    backgroundColor: "#008B8B",
    color: "#fff",
    borderRadius: 50,
  },
  dayChanger: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderColor: "#ddd",
    borderBottomWidth: 1,
  },
  dayChangerText: {
    fontSize: 14,
    fontWeight: "semibold",
  },
  upcoming: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  upcomingText: {
    fontSize: 16,
    color: "gray",
  },
});
