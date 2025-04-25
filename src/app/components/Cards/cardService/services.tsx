import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Cardlove = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <motion.div 
      className="service-card bg-black/20 border border-gray-800 rounded-xl p-6 h-full"
      whileHover={{ 
        y: -8,
        boxShadow: '0 10px 30px rgba(237, 242, 82, 0.1)'
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div 
        className="service-icon mb-6 bg-omegon-dark/80 w-16 h-16 rounded-full flex items-center justify-center"
        whileHover={{ rotate: 5, scale: 1.1 }}
      >
        {icon}
      </motion.div>
      
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
      
      <motion.div 
        className="mt-6 w-12 h-0.5 bg-omegon-yellow"
        whileHover={{ width: 80 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default Cardlove;