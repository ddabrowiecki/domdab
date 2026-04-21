import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselProps {
  images: string[];
}

const CarouselComponent = ({ images }: CarouselProps) => {
  return (
    <Carousel className="w-full max-w-[12rem] sm:max-w-s">
      <CarouselContent>
        {images.map((image: string) => (
          <CarouselItem key={image}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <img src={image} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselComponent;
