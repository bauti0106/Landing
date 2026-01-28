import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";

const navigationItems = [
  { label: "Quienes somos", active: true },
  { label: "Servicios gestionados", active: false },
  { label: "CloudInSight", active: false },
  { label: "BlackHoleOps", active: false },
  { label: "Staff Augmentation", active: false },
];

const pillars = [
  {
    icon: "/group.png",
    text: "Excelencia Operativa",
    top: "top-[11px]",
  },
  {
    icon: "/vector-4.svg",
    text: "Seguridad",
    top: "top-[99px]",
  },
  {
    icon: "/vector-10.svg",
    text: "Confiabilidad",
    top: "top-[188px]",
  },
  {
    icon: "/vector-12.svg",
    text: "Eficiencia en el Rendimiento",
    top: "top-[283px]",
  },
  {
    icon: "/vector-13.svg",
    text: "Optimización de Costos",
    top: "top-[347px]",
  },
  {
    icon: "/vector-11.svg",
    text: "Sostenibilidad",
    top: "top-[451px]",
  },
];

export const Frame = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full min-w-[1440px] h-[2471px] relative">
      <img
        className="-top-3 w-[1440px] h-[2471px] absolute left-0"
        alt="Rectangle"
        src="/rectangle-1.svg"
      />

      <img
        className="absolute w-[36.53%] h-[36.50%] top-0 left-[-16.74%]"
        alt="Vector"
        src="/vector-14.svg"
      />

      <img
        className="absolute w-[36.53%] h-[36.50%] top-0 left-[-9.24%]"
        alt="Vector"
        src="/vector-9.svg"
      />

      <header className="absolute top-[119px] left-[23px] w-[1399px] h-[108px]">
        <Card className="top-0 w-[1393px] h-[108px] bg-white rounded-[59.52px] shadow-[0px_4.18px_4.18px_#00000040] absolute left-0 border-0" />

        <img
          className="absolute w-[11.33%] h-[31.61%] top-[36.52%] left-[2.95%]"
          alt="Group"
          src="/group-1.png"
        />

        <nav className="absolute top-[45px] left-[231px] w-[178px] h-[33px]">
          <img
            className="absolute w-[13.68%] h-[44.51%] top-[13.73%] left-0"
            alt="Vector"
            src="/vector-7.svg"
          />

          <img
            className="absolute w-[15.94%] h-[44.32%] top-[13.93%] left-[15.99%]"
            alt="Vector"
            src="/vector-8.svg"
          />

          <img
            className="absolute w-[11.27%] h-[47.73%] top-[12.45%] left-[31.73%]"
            alt="Vector"
            src="/vector.svg"
          />

          <div className="absolute w-0 h-[6.12%] top-[12.52%] left-[43.57%] [font-family:'Inter',Helvetica] font-bold text-black text-[1.8px] tracking-[0] leading-[normal] whitespace-nowrap">
            TM
          </div>

          <img
            className="absolute w-[4.65%] h-[18.32%] top-[68.86%] left-0"
            alt="Vector"
            src="/vector-1.svg"
          />

          <img
            className="absolute w-[5.36%] h-[17.44%] top-[69.64%] left-[11.37%]"
            alt="Vector"
            src="/vector-6.svg"
          />

          <img
            className="absolute w-[5.07%] h-[17.68%] top-[69.13%] left-[17.03%]"
            alt="Vector"
            src="/vector-5.svg"
          />

          <img
            className="absolute w-[4.23%] h-[18.05%] top-[68.64%] left-[6.54%]"
            alt="Vector"
            src="/vector-3.svg"
          />
        </nav>

        <nav className="flex items-center gap-4 absolute top-[37px] left-[348px]">
          {navigationItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`[font-family:'Inter',Helvetica] font-normal text-xl tracking-[0] leading-[normal] ${
                item.active ? "text-[#e61c83]" : "text-black"
              } hover:text-[#e61c83]`}
            >
              {item.label}
            </Button>
          ))}
        </nav>

        <img
          className="absolute top-[-74px] left-[1244px] w-[51px] h-[51px]"
          alt="Group"
          src="/group-5.png"
        />
      </header>

      <section className="absolute top-[331px] left-[694px]">
        <h1 className="[text-shadow:0px_4px_4px_#00000040] [font-family:'Inter',Helvetica] font-bold text-[#e61c83] text-[140px] tracking-[0] leading-[normal]">
          Quienes
          <br />
          somos
        </h1>
      </section>

      <section className="absolute top-[766px] left-[173px] w-[1097px] h-[362px]">
        <p className="absolute top-0 left-0 w-[1093px] [font-family:'Inter',Helvetica] font-normal text-white text-[35px] tracking-[0] leading-[normal]">
          <span className="[font-family:'Inter',Helvetica] font-normal text-white text-[35px] tracking-[0]">
            Somos{" "}
          </span>
          <span className="font-bold">AWS Select Consulting</span>
          <span className="[font-family:'Inter',Helvetica] font-normal text-white text-[35px] tracking-[0]">
            &nbsp;
          </span>
          <span className="font-bold">Partners</span>
          <span className="[font-family:'Inter',Helvetica] font-normal text-white text-[35px] tracking-[0]">
            {" "}
            especializados en servicios gestionados. Acompañamos a las
            organizaciones en todo su ciclo de vida en la{" "}
          </span>
          <span className="font-bold">nube.</span>
        </p>

        <p className="absolute top-[152px] left-px w-[1065px] [font-family:'Inter',Helvetica] font-normal text-white text-[35px] tracking-[0] leading-[normal]">
          <span className="font-light">
            Integramos el diseño y la gestión de infraestructura crítica con
            nuestras{" "}
          </span>
          <span className="font-light underline">soluciones exclusivas:</span>
          <span className="font-bold"> CloudInSight</span>
          <span className="font-light">
            {" "}
            para la visibilidad de costos y seguridad, y{" "}
          </span>
          <span className="font-bold">BlackHoleOps</span>
          <span className="font-light">
            {" "}
            para el control total de la operación.
          </span>
        </p>
      </section>

      <section className="absolute top-[1128px] left-[174px]">
        <p className="w-[816px] [font-family:'Inter',Helvetica] font-normal text-white text-[35px] tracking-[0] leading-[normal] whitespace-nowrap">
          <span className="[font-family:'Inter',Helvetica] font-normal text-white text-[35px] tracking-[0]">
            Nuestra{" "}
          </span>
          <span className="font-semibold">metodología</span>
          <span className="[font-family:'Inter',Helvetica] font-normal text-white text-[35px] tracking-[0]">
            {" "}
            de trabajo se rige por
          </span>
        </p>

        <div className="absolute top-[96px] left-[-10px] w-[374px] bg-[linear-gradient(171deg,rgba(230,28,131,1)_40%,rgba(128,16,73,1)_88%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] font-bold text-transparent text-[433.3px] tracking-[0] leading-[normal] whitespace-nowrap">
          6
        </div>

        <div className="absolute top-[199px] left-[285px] w-[330px] [font-family:'Inter',Helvetica] font-normal text-white text-[51.4px] tracking-[0] leading-[normal]">
          <span className="[font-family:'Inter',Helvetica] font-normal text-white text-[51.4px] tracking-[0]">
            pilares del <br />
          </span>
          <span className="font-bold">
            Well-Architected <br />
            Framework
          </span>
          <span className="[font-family:'Inter',Helvetica] font-normal text-white text-[51.4px] tracking-[0]">
            {" "}
            de AWS
          </span>
        </div>
      </section>

      <section className="absolute top-[1264px] left-[830px] w-[458px] h-[531px]">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className={`absolute ${pillar.top} left-0 flex items-center gap-[36px]`}
          >
            <img
              className="w-[58px] h-auto"
              alt={pillar.text}
              src={pillar.icon}
            />
            <span className="[font-family:'Inter',Helvetica] font-normal text-white text-[26.5px] tracking-[0] leading-[normal]">
              {pillar.text}
            </span>
          </div>
        ))}
      </section>

      <img
        className="absolute w-[119.23%] h-[53.62%] top-[52.52%] left-[12.51%]"
        alt="Vector"
        src="/vector-2.svg"
      />

      <section className="absolute top-[1929px] left-[167px]">
        <h2 className="w-[475px] [font-family:'Inter',Helvetica] font-bold text-white text-[70px] tracking-[0] leading-[normal] whitespace-nowrap">
          ¿Hablamos?
        </h2>

        <p className="absolute top-[68px] left-[33px] [font-family:'Inter',Helvetica] font-normal text-white text-[35px] tracking-[0] leading-[normal]">
          <br />
          Coordiná una sesión <br />
          de 15 min con nosotros
        </p>
      </section>

      <Button
        variant="ghost"
        className="absolute top-[1929px] left-[831px] w-[169px] h-[212px] flex flex-col gap-[13.5px] p-0 hover:bg-transparent"
      >
        <img
          className="w-[166.61px] h-[169.55px]"
          alt="Group"
          src="/group-10.png"
        />
        <span className="ml-[30px] w-[106px] h-[29px] [font-family:'Inter',Helvetica] font-normal text-white text-[25px] tracking-[0] leading-[normal] whitespace-nowrap">
          Agendar
        </span>
      </Button>

      <footer className="absolute top-[2157px] left-[258px]">
        <img className="w-64 h-[51px]" alt="Group" src="/group-11.png" />
      </footer>
    </div>
  );
};
