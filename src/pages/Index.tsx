
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CareerTestChat } from '@/components/CareerTestChat';
import { LandingPage } from '@/components/LandingPage';

const Index = () => {
  const [showTest, setShowTest] = useState(false);

  if (showTest) {
    return <CareerTestChat onBack={() => setShowTest(false)} />;
  }

  return <LandingPage onStartTest={() => setShowTest(true)} />;
};

export default Index;
