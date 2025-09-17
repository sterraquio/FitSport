import { Button } from "./ui/button";
import Toast from "./ui/toast";
import { useState } from "react";


export function HeroSection() {
  const [toastVisible, setToastVisible] = useState(false);

  const handleAddToCart = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  return (
    <div
      className="relative h-[600px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1679769706345-da57a319c25f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHNwb3J0c3dlYXIlMjBydW5uaW5nfGVufDF8fHx8MTc1ODEzNTcyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
      }}
    >
      <div className="text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl mb-6 text-white">
          Equípate para tu mejor marca
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white opacity-90">
          Rinde más, compra fácil
        </p>
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
          onClick={handleAddToCart}
        >
          Click aquí para descubrir más!
        </Button>
        <Toast
          message="Próximamente esto estará disponible. 😊"
          visible={toastVisible}
        />
      </div>
    </div>
  );
}
