import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const notifications = [
    {
      id: '1',
      title: '"Project 1: Evaluation – Group Report" due on Sunday, March 9, 2025 11:59 PM MDT.',
      subtitle: 'March 7, 2025 at 11:02 PM | Winter 2025 Emerging Trends in Software Development (INTP-302-G)',
      color: '#008B8B',
      icon: 'file-download',
    },
    {
      id: '2',
      title: '"Lab 3: Abstract Data Types - Part 1" due on Friday, March 7, 2025 11:59 PM MST.',
      subtitle: 'March 6, 2025 at 12:02 AM | Winter 2025 Object-Oriented Programming 3 (CPRG-304-C)',
      color: '#DC1470',
      icon: 'file-download',
    },
    {
      id: '3',
      title: 'Mar 4 2025 - CPRG307 Section E - Class Notes created',
      subtitle: 'March 4, 2025 at 5:01 PM | Winter 2025 Database Programming (CPRG-307-E)',
      color: '#008B8B',
      icon: 'file-download',
    },
    {
      id: '4',
      title: 'Unit 7 - Lecture Code - Main Exception Blocks created',
      subtitle: 'March 4, 2025 at 4:07 PM | Winter 2025 Database Programming (CPRG-307-E)',
      color: '#008B8B',
      icon: 'file-download',
    },
    {
      id: '5',
      title: '"Project Phase 2: App Architecture" due on Wednesday, March 5, 2025 11:59 PM MST.',
      subtitle: 'March 4, 2025 at 12:00 AM | Winter 2025 Mobile Application Development (CPRG-303-E)',
      color: '#008B8B',
      icon: 'file-download',
    },
  ] as const;

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
          <Text style={styles.title}>Notifications</Text>
        </View>

        <View style={styles.rightContainer}></View>
      </View>

      <View style={styles.tabs}>
        <Text style={[styles.tabText, styles.activeTab]}>Updates</Text>
        <Text style={styles.tabText}>Subscriptions</Text>
      </View>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationItem}>
            <View style={[styles.sideBar, { backgroundColor: item.color }]} />
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>{item.title}</Text>
              <Text style={styles.notificationSubtitle}>{item.subtitle}</Text>
            </View>
            <MaterialIcons name={item.icon} size={24} color={item.color} style={styles.icon} />
          </View>
        )}
      />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 40 },

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

  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  sideBar: {
    width: 5,
    height: '100%',
    marginRight: 10,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  notificationSubtitle: {
    fontSize: 12,
    color: 'gray',
  },
  icon: {
    marginLeft: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: 'gray',
  },
  activeNav: {
    color: '#008B8B',
  },
});
