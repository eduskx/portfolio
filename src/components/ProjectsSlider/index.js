import projects from "@/lib/projects";
import ProjectCard from "../ProjectCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ProjectSlider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1201 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1200, min: 1025 },
      items: 4,
    },
    laptop: {
      breakpoint: { max: 1024, min: 769 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 481 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel responsive={responsive}>
        <div>test</div>
      </Carousel>
    </>
  );
}
