import React from 'react';
import {render} from '@testing-library/react-native';
import {StarRating} from '../StarRating';

describe('StarRating', () => {
  test('the component did render', () => {
    render(<StarRating rating={{average: 7}} />);
  });
});
