import { useState } from 'react';

export const useModalOpen = (initialValue) => {
  const [isModalOpen, setIsModalOpen] = useState(initialValue);
  return [isModalOpen, (value) => setIsModalOpen(value)];
};
