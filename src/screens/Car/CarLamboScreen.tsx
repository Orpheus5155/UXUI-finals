import React from 'react';
import { useNavigation } from '@react-navigation/native';

import CarHomeLayout from '../../components/CarHomeLayout';

const CARS = [
  {
    id: 'lambo-e21',
    title: 'Lamborghini E21',
    price: '$720',
    image: 'https://www.figma.com/api/mcp/asset/bb0d2f36-b74a-409e-b3b2-50e67c9107fe',
  },
  {
    id: 'lambo-g5',
    title: 'Lamborghini G5',
    price: '$1050',
    image: 'https://www.figma.com/api/mcp/asset/bb0d2f36-b74a-409e-b3b2-50e67c9107fe',
  },
];

const CarLamboScreen = () => {
  const navigation = useNavigation();

  const handleSelectBrand = (key: 'all' | 'lambo' | 'bugatti' | 'audi') => {
    if (key === 'all') navigation.navigate('CarHome' as never);
    if (key === 'bugatti') navigation.navigate('CarBugatti' as never);
    if (key === 'audi') navigation.navigate('CarAudi' as never);
  };

  return (
    <CarHomeLayout
      activeBrand="lambo"
      cards={CARS}
      onSelectBrand={handleSelectBrand}
      onCardPress={() => navigation.navigate('CarDetail' as never)}
      onSearchPress={() => navigation.navigate('CarGet' as never)}
      backgroundImage="https://www.figma.com/api/mcp/asset/b482e090-0c0f-4672-ab62-b743f7b51a22"
    />
  );
};

export default CarLamboScreen;
