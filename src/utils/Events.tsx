import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Plant from "../../public/event/plant.png";
import Image from "next/image";

const Events = () => {
  const event = [
    {
      event: "Felicitation",
      description: "Felicitation Ceremony: Honoring Excellence.",
      image: "hero/events/falicitation.png",
    },
    {
      event: "Children's Day",
      description: "Children's Day Celebration: Nurturing Joy and Creativity.",
      image: "hero/events/children.png",
    },
    {
      event: "Garba Night",
      description:
        "Garba Night: A Colorful Celebration of Culture and Community.",
      image: "hero/events/garba.png",
    },
    {
      event: "Picnic",
      description:
        "Annual School Picnic: Adventure, Bonding, and Fun Beyond the Classroom.",
      image: "hero/events/picnic.png",
    },
    {
      event: "Diwali",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print mockups.",
      image: "hero/events/diwali.png",
    },
    {
      event: "Farewell",
      description:
        "Farewell: Celebrating Achievements, Embracing New Beginnings.",
      image: "hero/events/farewell.png",
    },
  ];

  return (
    <section id="event" className="section-width poppins-bold mb-16 space-y-4">
      <Title title="Our Event" className="" />
      <div className="flex items-center gap-12">
        <p className="text-md poppins-medium my-10 max-w-4xl text-gray-600">
          Beyond Textbooks: Celebrating Growth, Culture, and Community Through
          Unforgettable Events That Enrich the Learning Journey.
        </p>
        <Image
          src={Plant}
          alt="Plant"
          className="hidden lg:flex "
          width={90}
          height={50}
        />
      </div>
      <div className="ml-0 flex flex-col items-center justify-center md:ml-4">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3   ">
            {event.map((item, index) => (
              <div
                key={index}
                className="roboto-medium mx-2  my-4 h-[400px] w-[320px] rounded-xl bg-white text-center md:h-[426px]  md:w-[360px] lg:h-[426px] lg:w-[360px]"
                style={{
                  borderLeft: "1px solid #02B3E4",
                  borderRight: "1px solid #02B3E4",
                }}
              >
                <img
                  src={item.image}
                  alt={item.event}
                  style={{
                    borderLeft: "1px solid #02B3E4",
                    borderRight: "1px solid #02B3E4",
                  }}
                  className=" mb-4 h-[227px] w-[360px] rounded-t-xl object-cover"
                />
                <h3 className="px-4 text-left  text-2xl font-bold">
                  {item.event}
                </h3>
                <p className="my-2 px-4 text-left text-sm text-gray-400">
                  At Gour's Educare Plus,
                </p>
                <p className="poppins-medium w-[321px]  px-3 text-left text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="lg:ml-18 ml-0 mt-16 flex items-center justify-center md:ml-4 md:justify-between lg:justify-between xl:justify-between">
            <a
              href="#"
              className="inter-bold mx-2 hidden whitespace-nowrap text-2xl text-bgcust md:block md:text-xl lg:block"
            >
              View All Events
            </a>
            <div className="mx-3 hidden h-[2px] w-[44vw] bg-gray-600 md:block md:text-xl lg:block"></div>
            <button className="inter-medium mx-2 w-full rounded-full border-2 border-bgcust p-4 text-sm text-bgcust md:mr-10 md:w-36 lg:mr-10 lg:w-36">
              All Events <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
