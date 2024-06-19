import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function JobCard({ title, company, location, type }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text>{company}</Text>
      <Text>{location}</Text>
      <Text>{type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default JobCard;
