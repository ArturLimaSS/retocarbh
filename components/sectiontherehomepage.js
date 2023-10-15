import Image from "next/image";
//import Image1 from "../public/img23.jpg";

const ContentThere = () => {
  return (
    <div className="flex flex-col space-y-12 items-center justify-center  w-full py-12">
      <div className="text-center space-y-3 ">
        <p className="text-xl font-medium text-amber-600">Porque nos escolher?</p>
        <p className="text-4xl font-light text-gray-600">
          Referência em serviços de qualidade há mais de 20 anos no mercado.
        </p>
      </div>
      <div className="">
        {/* <Image src={Image1} alt="Picture of the author" /> */}
      </div>
    </div>
  );
};
export default ContentThere;
