import { useState } from "react";

import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Star, AlertTriangle } from "lucide-react";
import Toast from "./ui/toast";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  features?: string[];
  stockLevel: "high" | "low" | "out";
  stockCount?: number;
  isQuickDry?: boolean;
  compression?: string;
  fit?: string;
}

export function ProductCard({
  name,
  price,
  originalPrice,
  imageUrl,
  rating,
  reviewCount,
  features = [],
  stockLevel,
  stockCount,
  isQuickDry,
  compression,
  fit,
}: ProductCardProps) {
  const [toastVisible, setToastVisible] = useState(false);

  const formatPrice = (price: number) => `$${price.toLocaleString()}`;

  const getStockMessage = () => {
    if (stockLevel === "out") {
      return {
        text: "Agotado por ahora. Avísame cuando llegue.",
        color: "text-gray-500",
      };
    }
    if (stockLevel === "low" && stockCount) {
      return {
        text: `Quedan ${stockCount}. No te quedes sin la tuya.`,
        color: "text-red-600",
      };
    }
    return null;
  };

  const stockMessage = getStockMessage();

  const handleAddToCart = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
      {/* Image */}
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
        {originalPrice && (
          <Badge className="absolute top-3 left-3 bg-red-600 text-white">
            Oferta
          </Badge>
        )}
        {stockLevel === "low" && (
          <Badge className="absolute top-3 right-3 bg-orange-500 text-white flex items-center gap-1">
            <AlertTriangle className="h-3 w-3" />
            Últimas unidades
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Product Name */}
        <h3 className="mb-2 line-clamp-2">{name}</h3>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm">{rating}</span>
          </div>
          <span className="text-sm text-gray-500">({reviewCount} reseñas)</span>
        </div>

        {/* Features - Info mínima necesaria */}
        <div className="mb-3">
          <div className="flex flex-wrap gap-1 mb-2">
            {features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>

          {/* Technical specs */}
          <div className="text-sm text-gray-600 space-y-1">
            {isQuickDry && <p>• Secado rápido en 10 min</p>}
            {compression && <p>• Compresión {compression}</p>}
            {fit && <p>• {fit}</p>}
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg text-black">{formatPrice(price)}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>

        {/* Stock Message */}
        {stockMessage && (
          <p className={`text-sm mb-3 ${stockMessage.color}`}>
            {stockMessage.text}
          </p>
        )}

        {/* Size Guide Helper */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            ¿Entre dos tallas? Para compresión, elige la menor.
          </p>
        </div>

        {/* Action Button */}
        <Button
          className="w-full"
          disabled={stockLevel === "out"}
          variant={stockLevel === "out" ? "secondary" : "default"}
          onClick={handleAddToCart}
        >
          {stockLevel === "out" ? "Avísame cuando llegue" : "Añadir al carrito"}
        </Button>

        <Toast
          message="Producto añadido al carrito 🛒"
          visible={toastVisible}
        />

        {/* Trust signal */}
        <p className="text-xs text-gray-500 mt-2 text-center">
          Cambios gratis 30 días
        </p>
      </div>
    </div>
  );
}
