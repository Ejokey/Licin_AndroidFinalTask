import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Button } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const MapScreen = () => {
  const [region, setRegion] = useState({
    latitude: 56.838011,
    longitude: 60.597465,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const ecoRouteCoordinates = [
    { latitude: 56.79133, longitude: 60.54664 }, // Точка 1
    { latitude: 56.79731, longitude: 60.55146 }, // Точка 2
    { latitude: 56.80191, longitude: 60.53885 }, // Точка 3
    { latitude: 56.80171, longitude: 60.53110 }, // Точка 4
    { latitude: 56.79708, longitude: 60.53099 }  // Точка 1
  ];

  const importantPlaces = [
    { coordinate: { latitude: 56.812216, longitude: 60.646762 }, title: "Парк Маяковского", description: "Большой парк для прогулок и отдыха" },
    { coordinate: { latitude: 56.821868, longitude: 60.620103 }, title: "Эко-магазин 'Зелёный Мир'", description: "Магазин экологически чистых продуктов" },
    { coordinate: { latitude: 56.79133, longitude: 60.54664 }, title: "Велосипедный маршрут", description: "Популярный маршрут для велосипедистов" },
    { coordinate: { latitude: 56.79708, longitude: 60.53099 }, title: "Велосипедный маршрут", description: "Популярный маршрут для велосипедистов" },
  ];

  const zoomIn = () => {
    setRegion({
      ...region,
      latitudeDelta: region.latitudeDelta / 2,
      longitudeDelta: region.longitudeDelta / 2,
    });
  };

  const zoomOut = () => {
    setRegion({
      ...region,
      latitudeDelta: region.latitudeDelta * 2,
      longitudeDelta: region.longitudeDelta * 2,
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
      >
        {importantPlaces.map((place, index) => (
          <Marker
            key={index}
            coordinate={place.coordinate}
            title={place.title}
            description={place.description}
          />
        ))}
        <Polyline
          coordinates={ecoRouteCoordinates}
          strokeColor="#00FF00" // Зеленый цвет для эко-маршрута
          strokeWidth={4}
        />
      </MapView>
      <View style={styles.zoomButtonContainer}>
        <Button title="+" onPress={zoomIn} />
        <Button title="-" onPress={zoomOut} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  zoomButtonContainer: {
    position: 'absolute',
    bottom: 50,
    right: 20,
    flexDirection: 'column',
  },
});

export default MapScreen;
