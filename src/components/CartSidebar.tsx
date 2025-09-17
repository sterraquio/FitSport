import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { ShoppingCart, Plus, Minus, X, Truck, Shield } from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  size: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export function CartSidebar() {
  const cartItems: CartItem[] = [
    {
      id: "1",
      name: "Camiseta Running Pro",
      size: "M",
      price: 45000,
      quantity: 1,
      imageUrl: "https://images.unsplash.com/photo-1679769706345-da57a319c25f?w=200"
    },
    {
      id: "2", 
      name: "Short Compresión",
      size: "L",
      price: 38000,
      quantity: 2,
      imageUrl: "https://images.unsplash.com/photo-1657888409157-faf9fa8d9464?w=200"
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 8000;
  const total = subtotal + shipping;

  const formatPrice = (price: number) => `$${price.toLocaleString()}`;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="relative">
          <ShoppingCart className="h-5 w-5" />
          <Badge className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs h-5 w-5 flex items-center justify-center rounded-full">
            {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          </Badge>
        </Button>
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader className="mb-6">
          <SheetTitle>Tu carrito</SheetTitle>
        </SheetHeader>

        {/* Cart Items */}
        <div className="flex-1 space-y-4 mb-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-3 border-b border-gray-200 pb-4">
              <img 
                src={item.imageUrl} 
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              
              <div className="flex-1">
                <h4 className="mb-1">{item.name}</h4>
                <p className="text-sm text-gray-600 mb-2">Talla: {item.size}</p>
                <p className="text-black">{formatPrice(item.price)}</p>
                
                <div className="flex items-center gap-2 mt-2">
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="text-sm w-8 text-center">{item.quantity}</span>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Trust Signals */}
        <div className="space-y-3 mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-sm">
            <Shield className="h-4 w-4 text-green-600" />
            <span>Cambios gratis 30 días</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Truck className="h-4 w-4 text-blue-600" />
            <span>Entrega estimada: 2–4 días</span>
          </div>
        </div>

        {/* Order Summary */}
        <div className="space-y-2 mb-6 p-4 border border-gray-200 rounded-lg">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Envío</span>
            <span>{formatPrice(shipping)}</span>
          </div>
          <div className="border-t border-gray-200 pt-2">
            <div className="flex justify-between">
              <span>Total</span>
              <span className="text-black">{formatPrice(total)}</span>
            </div>
          </div>
        </div>

        {/* Checkout Button */}
        <Button className="w-full" size="lg">
          Finalizar compra
        </Button>
        
        <p className="text-xs text-gray-500 text-center mt-3">
          Pago seguro con todos los métodos
        </p>
      </SheetContent>
    </Sheet>
  );
}