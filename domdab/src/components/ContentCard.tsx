import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import CarouselComponent from "./Carousel";
import { type ContentDetail } from "@/data/utils";

const ContentCard = ({ name, description, images, logo }: ContentDetail) => {
  return (
    <Card className="mt-5 items-center flex-row justify-between px-20">
      <div>
        {images ? (
          <CarouselComponent images={images} />
        ) : (
          <CardContent>
            <div className="h-50 w-50 flex items-center">
              <img src={logo} />
            </div>
          </CardContent>
        )}
      </div>
      <CardHeader className="flex flex-col w-[30%] items-center">
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ContentCard;
