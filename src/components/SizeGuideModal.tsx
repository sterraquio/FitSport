import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Badge } from "./ui/badge";

export function SizeGuideModal() {
  const sizeChart = [
    { size: "XS", chest: "86-91", waist: "71-76", hip: "91-96" },
    { size: "S", chest: "91-96", waist: "76-81", hip: "96-101" },
    { size: "M", chest: "96-101", waist: "81-86", hip: "101-106" },
    { size: "L", chest: "101-106", waist: "86-91", hip: "106-111" },
    { size: "XL", chest: "106-111", waist: "91-96", hip: "111-116" },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Ver guía de tallas
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Guía de tallas</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Helpful tips */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="mb-2 text-blue-900">Consejos de talla</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>• ¿Entre dos tallas? Si buscas compresión, elige la menor.</li>
              <li>• Para uso casual, elige tu talla habitual o la mayor.</li>
              <li>• Las medidas están en centímetros.</li>
            </ul>
          </div>

          {/* Size Chart */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 p-3 text-left">Talla</th>
                  <th className="border border-gray-300 p-3 text-left">Pecho (cm)</th>
                  <th className="border border-gray-300 p-3 text-left">Cintura (cm)</th>
                  <th className="border border-gray-300 p-3 text-left">Cadera (cm)</th>
                </tr>
              </thead>
              <tbody>
                {sizeChart.map((row) => (
                  <tr key={row.size}>
                    <td className="border border-gray-300 p-3">
                      <Badge variant="outline">{row.size}</Badge>
                    </td>
                    <td className="border border-gray-300 p-3">{row.chest}</td>
                    <td className="border border-gray-300 p-3">{row.waist}</td>
                    <td className="border border-gray-300 p-3">{row.hip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* How to measure */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="mb-2">Cómo medir</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>Pecho:</strong> Mide la parte más ancha del pecho</p>
              <p><strong>Cintura:</strong> Mide la parte más estrecha del torso</p>
              <p><strong>Cadera:</strong> Mide la parte más ancha de las caderas</p>
            </div>
          </div>

          {/* Fit types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-3 border border-gray-200 rounded-lg">
              <h4 className="mb-1">Ajuste holgado</h4>
              <p className="text-sm text-gray-600">Comodidad máxima</p>
            </div>
            <div className="text-center p-3 border border-gray-200 rounded-lg">
              <h4 className="mb-1">Ajuste regular</h4>
              <p className="text-sm text-gray-600">Equilibrio perfecto</p>
            </div>
            <div className="text-center p-3 border border-gray-200 rounded-lg">
              <h4 className="mb-1">Ajuste compresivo</h4>
              <p className="text-sm text-gray-600">Máximo rendimiento</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}