import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import JobCard from './JobCard';

const jobs = [
  { title: 'Software Engineer', company: 'Google', location: 'Mountain View, CA', type: 'Full-Time' },
  { title: 'Product Manager', company: 'Facebook', location: 'Menlo Park, CA', type: 'Full-Time' },
  // Add more job objects
];

function Home() {
  const route = useRoute();
  const { name, email } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {name}</Text>
      <Text style={styles.subtitle}>Email: {email}</Text>
      <Text style={styles.sectionTitle}>Jobs</Text>
      <FlatList
        data={jobs}
        renderItem={({ item }) => <JobCard {...item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 20,
  },
});

export default Home;
