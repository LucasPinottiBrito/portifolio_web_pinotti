
import React from 'react';
import { Navbar as CustomNavbar } from './ui/custom-navbar';

interface NavbarProps {
  name: string;
}

export function Navbar({ name }: NavbarProps) {
  return <CustomNavbar name={name} />;
}
