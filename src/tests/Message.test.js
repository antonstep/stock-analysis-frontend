import React from 'react';
import { render, screen } from '@testing-library/react';
import Message from '../components/Message';

describe('Message Component', () => {
  test('displays the correct text', () => {
    render(<Message text="Hello, World!" />);
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
  });
});