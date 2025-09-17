// src/components/ui/Toast.tsx
import React from 'react';
import { toast } from 'sonner';


interface ToastProps {
  message: string;
  visible: boolean;
}

const handleActivityClick = (activity: string) => {
  toast.info(`Has pulsado en ${activity}`, {
    description: `Te mostraremos productos de ${activity} en breve`
  });
};

const Toast: React.FC<ToastProps> = ({ message, visible }) => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: '#2c6e6c',
        color: '#fff',
        padding: '12px 20px',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.3s ease',
        zIndex: 1000,
      }}
    >
      {message}
    </div>
  );
};

export default Toast;
