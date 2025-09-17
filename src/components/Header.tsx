import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import Toast from "./ui/toast";

export function Header() {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleAddToCart = (name: string) => {
    setToastMessage(`Has pulsado en ${name}, Proximamente` );
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl text-black tracking-tight">FitSport</h1>
          </div>
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleAddToCart("Novedades");
              }}
            >
              Novedades
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleAddToCart("Hombre");
              }}
            >
              Hombre
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleAddToCart("Mujer");
              }}
            >
              Mujer
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleAddToCart("Unisex");
              }}
            >
              Unisex
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleAddToCart("Actividades");
              }}
            >
              Actividades
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleAddToCart("Accesorios");
              }}
            >
              Accesorios
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 transition-colors text-red-600"
              onClick={(e) => {
                e.preventDefault();
                handleAddToCart("Outlet");
              }}
            >
              Outlet
            </a>
          </nav>

          {/* Toast */}
          <Toast message={toastMessage} visible={toastVisible} />

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex"
              onClick={() => handleAddToCart("Buscar")}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleAddToCart("Usuario")}
            >
              <User className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="relative"
              onClick={() => handleAddToCart("Carrito")}
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => handleAddToCart("Menú")}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
