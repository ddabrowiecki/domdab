import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type LanguageDetail } from "@/data/LanguageData";

const GridCard = ({ name, level, image, emoji, moreInfo }: LanguageDetail) => {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video" />
      <img
        src={image}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-90 dark:brightness-40"
      />
      <div className="h-10 mt-[-15%] z-40 flex justify-center">
        <img className="h-[150%]" src={emoji} />
      </div>
      <CardHeader>
        <CardAction></CardAction>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{level}</CardDescription>
      </CardHeader>
      <CardFooter>
        {moreInfo && <Button className="w-full">More</Button>}
      </CardFooter>
    </Card>
  );
};

export default GridCard;
