import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const MainCarousel = () => {
    return (
        <Carousel className="w-full  md:block">
            <CarouselContent>
                <CarouselItem>
                    <Image
                        src="/car1.jpg"
                        width={1920}
                        height={1280}
                        alt="logo"
                        className="rounded-lg max-h-96 object-cover"
                    />
                </CarouselItem>
                <CarouselItem>
                    <Image
                        src="/car2.jpg"
                        width={1920}
                        height={1280}
                        alt="logo"
                        className="rounded-lg max-h-96 object-cover"
                    />
                </CarouselItem>
                <CarouselItem>
                    <Image
                        src="/car3.jpg"
                        width={1920}
                        height={1280}
                        alt="logo"
                        className="rounded-lg max-h-96 object-cover"
                    />
                </CarouselItem>
                <CarouselItem>
                    <Image
                        src="/car4.jpg"
                        width={1920}
                        height={1280}
                        alt="logo"
                        className="rounded-lg max-h-96 object-cover"
                    />
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

export default MainCarousel;
