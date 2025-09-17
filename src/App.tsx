import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ActivityCard } from "./components/ActivityCard";
import { FilterSection } from "./components/FilterSection";
import { ProductCard } from "./components/ProductCard";
import { CartSidebar } from "./components/CartSidebar";
import { SizeGuideModal } from "./components/SizeGuideModal";
import { Button } from "./components/ui/button";
import { Truck, Shield, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export default function App() {
  // Mensaje genérico al click
  const handleClick = (name: string) => {
    toast.message(name);
  };

  const handleSubscribe = () => {
    const trimmed = email.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);

    if (!trimmed) {
      toast.error("Por favor ingresa tu email");
      return;
    }
    if (!isValid) {
      toast.error("Revisa que el email sea válido");
      return;
    }

    toast.success("¡Gracias por suscribirte! 🎉", {
      description: "Te estaremos enviando novedades y ofertas. 💌",
      duration: 3000,
    });

    // Limpia el campo
    setEmail("");
  };

  const handleAddToCart = (productName: string) => {
    toast.success(`${productName} añadido al carrito`, {
      description: "Cambios gratis 30 días. Entrega estimada: 2–4 días.",
      action: {
        label: "Ver carrito",
        onClick: () => console.log("Opening cart"),
      },
    });
  };

  // Nuevo estado para manejar el valor del input del newsletter
  const [email, setEmail] = useState("");

  const featuredProducts = [
    {
      id: "1",
      name: "Camiseta Running Pro - Secado Rápido",
      price: 45000,
      originalPrice: 65000,
      imageUrl:
        "https://images.unsplash.com/photo-1679769706345-da57a319c25f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHNwb3J0c3dlYXIlMjBydW5uaW5nfGVufDF8fHx8MTc1ODEzNTcyNXww&ixlib=rb-4.1.0&q=80&w=400",
      rating: 4.8,
      reviewCount: 324,
      features: ["Secado rápido", "Transpirable", "Antibacterial"],
    },
    {
      id: "2",
      name: "Short Compresión Elite - Training",
      price: 38000,
      imageUrl:
        "https://images.unsplash.com/photo-1657888409157-faf9fa8d9464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwY2xvdGhpbmd8ZW58MXx8fHwxNzU4MTM1NzI4fDA&ixlib=rb-4.1.0&q=80&w=400",
      rating: 4.7,
      reviewCount: 198,
      features: ["Compresión alta", "Secado rápido", "Anti-rozaduras"],
    },
    {
      id: "3",
      name: "Set Yoga Completo - Mujer",
      price: 85000,
      imageUrl:
        "https://images.unsplash.com/photo-1640692323394-a52addbe2d09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwYWN0aXZld2VhcnxlbnwxfHx8fDE3NTgxMzU3MzF8MA&ixlib=rb-4.1.0&q=80&w=400",
      rating: 4.9,
      reviewCount: 156,
      features: ["Tela bambú", "Flexibilidad total", "Suave al tacto"],
    },
    {
      id: "4",
      name: "Chaqueta Outdoor Pro - Impermeable",
      price: 120000,
      imageUrl:
        "https://images.unsplash.com/photo-1679769706345-da57a319c25f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHNwb3J0c3dlYXIlMjBydW5uaW5nfGVufDF8fHx8MTc1ODEzNTcyNXww&ixlib=rb-4.1.0&q=80&w=400",
      rating: 4.6,
      reviewCount: 89,
      features: ["Impermeable", "Transpirable", "Capucha desmontable"],
    },
  ];

  const activities = [
    {
      title: "Running",
      description: "Equipamiento técnico para tus entrenamientos y carreras",
      imageUrl:
        "https://images.unsplash.com/photo-1679769706345-da57a319c25f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHNwb3J0c3dlYXIlMjBydW5uaW5nfGVufDF8fHx8MTc1ODEzNTcyNXww&ixlib=rb-4.1.0&q=80&w=600",
      action: "Ver running",
    },
    {
      title: "Gym & Training",
      description: "Ropa técnica para maximizar tu rendimiento",
      imageUrl:
        "https://images.unsplash.com/photo-1657888409157-faf9fa8d9464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwY2xvdGhpbmd8ZW58MXx8fHwxNzU4MTM1NzI4fDA&ixlib=rb-4.1.0&q=80&w=600",
      action: "Ver gym",
    },
    {
      title: "Yoga & Wellness",
      description: "Comodidad y flexibilidad en cada movimiento",
      imageUrl:
        "https://images.unsplash.com/photo-1640692323394-a52addbe2d09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwYWN0aXZld2VhcnxlbnwxfHx8fDE3NTgxMzU3MzF8MA&ixlib=rb-4.1.0&q=80&w=600",
      action: "Ver yoga",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header con carrito */}
      <div className="relative">
        <Header />
        <div className="absolute top-4 right-20">
          <CartSidebar />
        </div>
      </div>

      <HeroSection />

      {/* Activities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Elige por tu actividad</h2>
            <p className="text-lg text-gray-600">
              Encuentra el equipamiento perfecto para tu deporte
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                onClick={() => handleClick(activity.title)}
                className="cursor-pointer"
              >
                <ActivityCard {...activity} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FilterSection />

      {/* Productos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl mb-2">Productos destacados</h2>
              <p className="text-gray-600">
                Las mejores opciones para entrenar
              </p>
            </div>
            <SizeGuideModal />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onClick={() => handleAddToCart(product.name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Señales confianza */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Truck className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="mb-2">Envío rápido</h3>
              <p className="text-gray-600">Entrega en 2-4 días laborables</p>
            </div>
            <div className="flex flex-col items-center">
              <RotateCcw className="h-8 w-8 text-green-600 mb-3" />
              <h3 className="mb-2">Cambios gratis</h3>
              <p className="text-gray-600">
                30 días para cambios y devoluciones
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="mb-2">Compra segura</h3>
              <p className="text-gray-600">Protección total en tu compra</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">¡Sé el primero en enterarte!</h2>
          <p className="text-xl mb-8 opacity-90">
            Novedades, ofertas exclusivas y tips de entrenamiento
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-4 py-3 rounded-lg text-black bg-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSubscribe();
              }}
            />
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={handleSubscribe}
            >
              Suscribirme
            </Button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Tips para cuidar tu prenda técnica incluidos
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl mb-4 text-white">FitSport</h3>
              <p className="text-gray-400">
                Equipamiento deportivo técnico para tu mejor rendimiento
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-white">Productos</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick("Running");
                    }}
                  >
                    Running
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick("Gym & Training");
                    }}
                  >
                    Gym & Training
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick("Yoga");
                    }}
                  >
                    Yoga
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick("Outdoor");
                    }}
                  >
                    Outdoor
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-white">Ayuda</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Guía de tallas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Envíos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cambios y devoluciones
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-white">Mi cuenta</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Mis pedidos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Favoritos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Mi perfil
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 FitSport. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
