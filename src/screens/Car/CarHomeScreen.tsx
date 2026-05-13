import React from 'react';
import { useNavigation } from '@react-navigation/native';

import CarHomeLayout from '../../components/CarHomeLayout';

const CARS = [
  {
    id: 'ferrari-280',
    title: 'Ferrari 280 Special',
    price: '$450',
    image: 'https://www.figma.com/api/mcp/asset/2ea12a7c-a043-4572-862a-5e8ad9e3c0a9',
    showTrend: true,
  },
  {
    id: 'benz-thunder',
    title: 'Benz Thunder R',
    price: '$520',
    image: 'https://www.figma.com/api/mcp/asset/d2d8f74d-7611-4307-88b1-ebf9c72daaae',
  },
];

const CarHomeScreen = () => {
  const navigation = useNavigation();

  const handleSelectBrand = (key: 'all' | 'lambo' | 'bugatti' | 'audi') => {
    if (key === 'lambo') navigation.navigate('CarLambo' as never);
    if (key === 'bugatti') navigation.navigate('CarBugatti' as never);
    if (key === 'audi') navigation.navigate('CarAudi' as never);
  };

  return (
    <CarHomeLayout
      activeBrand="all"
      cards={CARS}
      onSelectBrand={handleSelectBrand}
      onCardPress={() => navigation.navigate('CarDetail' as never)}
      onSearchPress={() => navigation.navigate('CarGet' as never)}
    />
  );
};

export default CarHomeScreen;
