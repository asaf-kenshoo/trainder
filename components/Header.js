import React from 'react';
import styles from '../assets/styles';

import { Text, TouchableOpacity } from 'react-native';
import Icon from './Icon';

const Header = () => {
  return (
    <TouchableOpacity style={styles.header}>
      <Text style={styles.filtersText}>
        <Icon name="filter" /> Filters
      </Text>
    </TouchableOpacity>
  );
};

export default Header;
