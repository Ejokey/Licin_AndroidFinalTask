import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://sneg.top/uploads/posts/2023-06/1687990849_sneg-top-p-avatarka-siluet-muzhchini-vkontakte-10.jpg' }} // Замените на фактический URL изображения профиля
        />
        <Text style={styles.profileName}>Имя Пользователя</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Информация</Text>
        <Text style={styles.sectionContent}>Электронная почта: user@example.com</Text>
        <Text style={styles.sectionContent}>Любимые маршруты: 5</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Предпочтения</Text>
        <Text style={styles.sectionContent}>Предпочитаемые виды транспорта: Велосипед, Электромобиль</Text>
        <Button title="Изменить предпочтения" onPress={() => {}} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Достижения</Text>
        <Text style={styles.sectionContent}>Эко-путешественник месяца</Text>
        <Text style={styles.sectionContent}>100 км на велосипеде</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default ProfileScreen;
