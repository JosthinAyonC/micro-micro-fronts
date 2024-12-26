import React from 'react';

interface MicroPageTestProps {
  label: string;
}

const MicroPageTest: React.FC<MicroPageTestProps> = ({ label }) => {
  return <div className="bg-primary-light w-[50%] h-[50%] flex items-center justify-center">{label}</div>;
};

export default MicroPageTest;
