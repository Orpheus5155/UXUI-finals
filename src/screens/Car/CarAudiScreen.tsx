import React from 'react';
import { useNavigation } from '@react-navigation/native';

import CarHomeLayout from '../../components/CarHomeLayout';

const CARS = [
  {
    id: 'audi-r18',
    title: 'Audi R18',
    price: '$310',
    image: 'https://www.figma.com/api/mcp/asset/8ee8bf5d-4138-40a3-81d4-460a3e2f6dab',
  },
  {
    id: 'audi-mighty',
    title: 'Audi Blue Mighty F5',
    price: '$220',
    image: 'https://www.figma.com/api/mcp/asset/51494054-4c21-43f0-b82f-53108dfb0672',
  },
];

const CarAudiScreen = () => {
  const navigation = useNavigation();

  const handleSelectBrand = (key: 'all' | 'lambo' | 'bugatti' | 'audi') => {
    if (key === 'all') navigation.navigate('CarHome' as never);
    if (key === 'lambo') navigation.navigate('CarLambo' as never);
    if (key === 'bugatti') navigation.navigate('CarBugatti' as never);
  };

  return (
    <CarHomeLayout
      activeBrand="audi"
      cards={CARS}
      onSelectBrand={handleSelectBrand}
      onCardPress={() => navigation.navigate('CarDetail' as never)}
      onSearchPress={() => navigation.navigate('CarGet' as never)}
      backgroundImage="https://www.figma.com/api/mcp/asset/51494054-4c21-43f0-b82f-53108dfb0672"
    />
  );
};

export default CarAudiScreen;
