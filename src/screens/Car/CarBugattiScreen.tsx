import React from 'react';
import { useNavigation } from '@react-navigation/native';

import CarHomeLayout from '../../components/CarHomeLayout';

const CARS = [
  {
    id: 'bugatti-xlr8',
    title: 'Bugatti XLR8',
    price: '$650',
    image: 'https://www.figma.com/api/mcp/asset/92256b41-3cf5-4195-95bc-df505ca43041',
  },
  {
    id: 'bugatti-realx',
    title: 'Bugatti RealX',
    price: '$970',
    image: 'https://www.figma.com/api/mcp/asset/f239c078-1423-4810-8472-998e54089c95',
  },
];

const CarBugattiScreen = () => {
  const navigation = useNavigation();

  const handleSelectBrand = (key: 'all' | 'lambo' | 'bugatti' | 'audi') => {
    if (key === 'all') navigation.navigate('CarHome' as never);
    if (key === 'lambo') navigation.navigate('CarLambo' as never);
    if (key === 'audi') navigation.navigate('CarAudi' as never);
  };

  return (
    <CarHomeLayout
      activeBrand="bugatti"
      cards={CARS}
      onSelectBrand={handleSelectBrand}
      onCardPress={() => navigation.navigate('CarDetail' as never)}
      onSearchPress={() => navigation.navigate('CarGet' as never)}
    />
  );
};

export default CarBugattiScreen;
