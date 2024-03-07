import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Chance from 'chance';
import Button from '.';
import buttonStyles from './styles';

const chance = new Chance();

test('is match with snapshot', () => {
  const component = render(<Button />);
  expect(component).toMatchSnapshot();
});

test('should display title if given', () => {
  const testText = chance.string();
  const component = render(<Button title={testText} />);

  const text = component.getByTestId('button-title').children[0];

  expect(text).toBe(testText);
});

test('should rendered with given style', () => {
  const testType = 'outline';
  const component = render(<Button type={testType} />);

  const componentStyle = component.getByTestId('button-view-container').props
    .style;

  expect(componentStyle).toMatchObject(buttonStyles[testType].container);
});

test('should not triggered when loading prop is given', () => {
  const mockFn = jest.fn();
  const component = render(<Button loading onPress={mockFn} />);

  const pressable = component.getByTestId('button-view-container');

  fireEvent.press(pressable);

  expect(mockFn).not.toBeCalled();
});

test('should not triggered when disable prop is given', () => {
  const mockFn = jest.fn();
  const component = render(<Button disable onPress={mockFn} />);

  const pressable = component.getByTestId('button-view-container');

  fireEvent.press(pressable);

  expect(mockFn).not.toBeCalled();
});

test('should set disabled style when disable prop is given', () => {
  const component = render(<Button disable />);

  const componentStyle = component.getByTestId('button-view-container').props
    .style;

  expect(componentStyle).toMatchObject(buttonStyles.disabled.container);
});
