import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Filter, X } from "lucide-react";

export function FilterSection() {
  const activities = ["Running", "Gym/Training", "Outdoor", "Yoga"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const compressions = ["Baja", "Media", "Alta"];
  const materials = ["Algodón", "Poliéster", "Spandex", "Merino"];
  
  return (
    <div className="bg-white border-b border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg">Elige por tu actividad</h2>
          <Button variant="ghost" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
        </div>

        {/* Activity Pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {activities.map((activity) => (
            <Button
              key={activity}
              variant="outline"
              size="sm"
              className="rounded-full"
            >
              {activity}
            </Button>
          ))}
        </div>

        {/* Quick Filters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Talla" />
            </SelectTrigger>
            <SelectContent>
              {sizes.map((size) => (
                <SelectItem key={size} value={size}>{size}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Compresión" />
            </SelectTrigger>
            <SelectContent>
              {compressions.map((compression) => (
                <SelectItem key={compression} value={compression}>{compression}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Material" />
            </SelectTrigger>
            <SelectContent>
              {materials.map((material) => (
                <SelectItem key={material} value={material}>{material}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Precio" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Menor precio</SelectItem>
              <SelectItem value="high">Mayor precio</SelectItem>
              <SelectItem value="offers">Ofertas</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Applied Filters */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Filtros aplicados:</span>
          <Badge variant="secondary" className="flex items-center gap-1">
            Running
            <X className="h-3 w-3 cursor-pointer" />
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            Talla M
            <X className="h-3 w-3 cursor-pointer" />
          </Badge>
        </div>

        {/* Helper Text */}
        <p className="text-sm text-gray-500 mt-2">
          Añade filtros para ver mejor ajuste.
        </p>
      </div>
    </div>
  );
}