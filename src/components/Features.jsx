import {
  BoltIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Sito Web - Le basi della tua visibilità online.",
    description:
      "Sviluppiamo il tuo sito da zero o aggiorniamo quello che hai già.",
    icon: GlobeAltIcon,
  },
  {
    name: "Social Media - La tua vetrina a portata di click",
    description:
      "Creiamo e miglioriamo la tua presenza su Facebook e Instagram.",
    icon: ScaleIcon,
  },
  {
    name: "Copywriting - Una voce chiara che parla ai tuoi clienti.",
    description: "Costruiamo e ottimizziamo la tua comunicazione online.",
    icon: BoltIcon,
  },
  {
    name: "Web App - Lo strumento PRO per distinguerti",
    description: "Sviluppiamo l'app per gestire la tua attività.",
    icon: DevicePhoneMobileIcon,
  },
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-3x1 sm:text-4xl font-semibold leading-8 text-indigo-600">
            COME?
          </h2>

          {/* <h2 className="text-lg font-semibold leading-8 text-indigo-600">
            Come
          </h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A better way to send money
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">
                    {feature.name}
                  </p>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
