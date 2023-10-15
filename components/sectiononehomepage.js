import { FaHashtag } from "react-icons/fa";
import Image from "next/image";
import Image1 from "../public/image_01-6.jpg";
import Image2 from "../public/image_01-5.jpg";
import Image3 from "../public/palio1.jpeg";
import Image4 from "../public/palio2.jpeg";
import Image5 from "../public/palio3.jpeg";
const Contents = () => {
  return (
    <div className="container mx-auto py-24  space-y-20 w-full">
      {/* <div className=" lg:flex lg:flex-row justify-center px-12">
        <div>
          <Image src={Image1} alt="Picture of the author" />
        </div>
        <div className="mt-12">
          <Image src={Image2} alt="Picture of the author" />
        </div>
      </div>
      <div className="px-12 flex flex-col justify-center items-center text-center space-y-6">
        <FaHashtag className="w-12 h-12 text-amber-600  p-1" />
        <p className="text-3xl font-light text-gray-600">
          I invite you to try our service and I personally guarantee you will
          <br />
          have a fully satisfied experience.
        </p>
        <p className="text-xl text-gray-500">ANDRO Tomas - CHAIRMAN CEO</p>
      </div> */}

      <div className="col-span-1 space-y-6 py-12 text-center px-8">
        <p className="text-3xl font-medium text-gray-600">
          Serviço excepcional
        </p>
        <p className="text-2xl font-light text-gray-500">
          Por oferecer um serviço de extrema qualidade, estamos crescendo exponencialmente através de indicações.
        </p>
        <button
          type="button"
          className="text-white  bg-amber-600 hover:bg-amber-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
        >
          Entrar em contato
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-1 row-span-1">
          <Image src={Image3} alt="Começo de uma pintura automotiva" />
        </div>
        <div className="col-span-1 row-span-1">
          <Image src={Image4} alt="Serviço em andamento" />
        </div>
        <div className="col-span-1 row-span-1">
          <Image src={Image5} alt="Pintura automotiva de qualidade" />
        </div>
      </div>
    </div>
  );
};
export default Contents;
