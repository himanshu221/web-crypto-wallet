import { CardContainer, CardItem } from "./UI/3D-card";
import platform from '@/public/heroImg.png'
import Image from "next/image";

export const HeroCard = () => {
    return (
      <CardContainer>
              <CardItem translateZ="100">
                <Image
                  src={platform}
                  alt={'platform'}
                  width={1080}
                  height={1920}
                  className="rounded-xl shadow-2xl"
                  priority={true}
                />
              </CardItem>
      </CardContainer>
    );
  };
  