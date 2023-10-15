import { FaEnvira, FaCodepen, FaBusAlt, FaDrawPolygon, FaCar, FaClock, FaGem } from "react-icons/fa";
const Service = () => {
  return (
    <div className="container mx-auto lg:grid lg:grid-cols-12 gap-6 py-24 px-12 items-center place-content-center justify-center">
      <div className="border rounded shadow-lg p-3 col-span-4 flex flex-col space-y-4 items-center justify-center text-center">
        <FaClock className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">+ 20 anos de experiência</p>
        
      </div>
      <div className="border rounded shadow-lg p-3 col-span-4 flex flex-col space-y-4 items-center justify-center text-center">
        <FaCar className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">Serviços para todas as categorias</p>
        
      </div>
      <div className="border rounded shadow-lg p-3 col-span-4 flex flex-col space-y-4 items-center justify-center text-center">
        <FaGem className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">Qualidade Garantida</p>
        
      </div>
    </div>
  );
};
export default Service;
