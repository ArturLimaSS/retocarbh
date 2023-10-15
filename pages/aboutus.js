import Image from "next/image";
import Image1 from "../public/image_01-6.jpg";
import Image2 from "../public/image_06.jpg";
import Image3 from "../public/image_07.jpg";
import { FaCheck, FaMale, FaGlobe } from "react-icons/fa";
const AboutUs = () => {
  return (
    <div>
      {/* Content */}
      <div>
        <div
          className="bg-no-repeat bg-cover bg-center  h-72"
          style={{
            backgroundImage: `url(/heading_02.jpg)`,
          }}
        >
          <div className="bg-black   bg-opacity-50 w-full h-full  flex items-center justify-center">
            <p className="text-white text-5xl font-light  p-8">Sobre nós</p>
          </div>
        </div>
        <div className="container mx-auto lg:grid lg:grid-cols-2 gap-16 py-24 px-16">
          <div className="container mx-auto py-24 ">
            <div className="col-span-1 space-y-8 text-gray-600">
              <p className="text-xl font-medium">
                Paixão desde criança.
              </p>
              <p className="text-gray-500">
                Bem-vindo à Retocar BH! Somos uma oficina de lanternagem e pintura de veículos com uma história que remonta a gerações. Começou com Arlindo Nunes, que já naquela época tinha a paixão pelo mundo automobilístico correndo em suas veias, nossa oficina começou como um sonho de infância e se transformou em uma realidade sólida e confiável. Com o tempo, o legado foi passado para a próxima geração, Ângelo Fernandes, que começou a se envolver com automóveis aos 8 anos na oficina de nosso pai.
              </p>
              <p className="text-gray-500">
                Hoje, Ângelo Fernandes é um especialista na arte da lanternagem e pintura automotiva. Com anos de dedicação, treinamento e paixão pelo que faz, ele aprimorou suas habilidades e se tornou um mestre na restauração e reparação de veículos. Sua busca incessante pela qualidade é o que nos diferencia. Na Retocar BH, não nos contentamos com menos do que o melhor, e é por isso que nossos clientes confiam em nós para cuidar de seus veículos.
              </p>
              <p className="text-gray-500">
                Embora nossa oficina seja modesta em tamanho, temos grandes ambições. Nossa missão é proporcionar a você um serviço de qualidade excepcional, com atenção aos detalhes, dedicação e compromisso. Cada veículo que entra em nossas instalações recebe o tratamento que merece, seja para reparos de colisão, pintura personalizada ou restauração completa. Sabemos o quanto seu veículo significa para você, e estamos comprometidos em devolvê-lo à estrada com um visual impecável e um desempenho confiável.
              </p>
              <p className="text-gray-500">
                Estamos ansiosos para atendê-lo e fazer parte de sua jornada automobilística. Seja para reparos de colisão, personalização ou qualquer outra necessidade de lanternagem e pintura, a Retocar BH está aqui para ajudar. Entre em contato conosco hoje e descubra por que somos a escolha preferida de tantos amantes de carros em Belo Horizonte.
              </p>
              <p className="text-gray-500">
                Obrigado por escolher a Retocar BH!
              </p>
            </div>
          </div>

          <div className="col-span-1">
            <Image src={Image1} alt="Picture of the author" />
          </div>
        </div>
        <div className="bg-gray-100 flex items-center justify-center text-center">
          <div className="container mx-auto py-24 px-16 space-y-2">
            <p className="text-xl font-medium text-amber-600">
              COMMITMENT TO WORK
            </p>
            <p className="text-4xl font-light text-gray-600">Our Competences</p>
            <div className="grid lg:grid-cols-2 gap-12 py-8">
              <div className="col-span-1 bg-white space-y-3">
                <Image src={Image2} alt="Picture of the author" />

                <div className="space-y-5 p-8">
                  <p className="text-xl font-medium text-amber-600">
                    PROFESSIONALISM
                  </p>
                  <p className="text-gray-500">
                    Our experienced staff and highly professional chauffeurs are
                    committed to providing safe, reliable transportation,
                    exceptional customer service, and consistent pricing. We
                    provide in-house dispatchers who support our clients.
                  </p>
                </div>
              </div>
              <div className="col-span-1 bg-white space-y-3">
                <Image src={Image3} alt="Picture of the author" />

                <div className="space-y-5 p-8">
                  <p className="text-xl font-medium text-amber-600">
                    COMMITMENT
                  </p>
                  <p className="text-gray-500">
                    Our office is open twenty four hours a day, seven days a
                    week. You name the occasion – we’ll make the ride flawless.
                    Whether you require a chauffeured vehicle for business or
                    pleasure, close to home or in a new city we are always
                    there.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col items-center justify-center text-center py-24  space-y-2">
          <p className="text-xl font-medium text-amber-600">OUR FLEET</p>
          <p className="text-4xl font-light text-gray-600">Browse Our Limos</p>
          <div className="lg:grid lg:grid-cols-3 gap-12 px-4 py-24 w-full">
            <div className="col-span-1 flex flex-col space-y-3 border border-gray-300">
              <div
                className="bg-no-repeat bg-cover bg-center w-full h-64"
                style={{
                  backgroundImage: `url(/image_10-1-768x512.jpg)`,
                }}
              >
                <div className="bg-black  bg-opacity-30 w-full h-full  flex items-end justify-start">
                  <p className="text-white text-xl  p-8">Audi A8</p>
                </div>
              </div>
              <div className="py-1 flex flex-row space-x-2 items-center justify-center">
                <FaMale className="w-5 h-5 text-gray-500" />
                <p className="border rounded-full p-2 text-gray-500">4</p>
                <FaGlobe className="w-5 h-5 text-gray-500" />
                <p className="border rounded-full p-2 text-gray-500">4</p>
              </div>
            </div>
            <div className="col-span-1 flex flex-col space-y-3 border border-gray-300">
              <div
                className="bg-no-repeat bg-cover bg-center w-full h-64"
                style={{
                  backgroundImage: `url(/image_10-1-768x512.jpg)`,
                }}
              >
                <div className="bg-black  bg-opacity-30 w-full h-full  flex items-end justify-start">
                  <p className="text-white text-xl  p-8">Audi A8</p>
                </div>
              </div>
              <div className="py-1 flex flex-row space-x-2 items-center justify-center">
                <FaMale className="w-5 h-5 text-gray-500" />
                <p className="border rounded-full p-2 text-gray-500">4</p>
                <FaGlobe className="w-5 h-5 text-gray-500" />
                <p className="border rounded-full p-2 text-gray-500">4</p>
              </div>
            </div>
            <div className="col-span-1 flex flex-col space-y-3 border border-gray-300">
              <div
                className="bg-no-repeat bg-cover bg-center w-full h-64"
                style={{
                  backgroundImage: `url(/image_10-1-768x512.jpg)`,
                }}
              >
                <div className="bg-black  bg-opacity-30 w-full h-full  flex items-end justify-start">
                  <p className="text-white text-xl  p-8">Audi A8</p>
                </div>
              </div>
              <div className="py-1 flex flex-row space-x-2 items-center justify-center">
                <FaMale className="w-5 h-5 text-gray-500" />
                <p className="border rounded-full p-2 text-gray-500">4</p>
                <FaGlobe className="w-5 h-5 text-gray-500" />
                <p className="border rounded-full p-2 text-gray-500">4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Content */}
    </div>
  );
};
export default AboutUs;
