import BannerBottom from "@/components/Banner/BannerBottom";
import Banner from "@/components/Banner/Banner";

const slides = [
  {
    image: "/images/bannerImgOne.jpg",
    title: "Slide 1 Title",
    description: "This is the description for slide 1.",
  },
  {
    image: "/images/bannerImgTwo.jpg",
    title: "Slide 2 Title",
    description: "This is the description for slide 2.",
  },
  {
    image: "/images/bannerImgThree.jpg",
    title: "Slide 3 Title",
    description: "This is the description for slide 3.",
  },
  {
    image: "/images/bannerImgFour.jpg",
    title: "Slide 4 Title",
    description: "This is the description for slide 4.",
  },
];

export default function Home() {
  return (
    <div>
      <Banner slides={slides} />
    </div>
  );
}
