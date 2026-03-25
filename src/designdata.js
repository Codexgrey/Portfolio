/**
 * How do I display images from Google Drive & dropbox on a react front-end website?

    - Obtain the public link of your uploaded google drive image:
      e.g https://drive.google.com/file/d/1JP0HZf4Gd5d9ohXX6rVyuMwuZJ-369Bl/view?usp=sharing

    - Extract the id from the link: id = 1JP0HZf4Gd5d9ohXX6rVyuMwuZJ-369Bl

    - use react url = "https://drive.google.com/uc?export=view&id=INSERT_HERE_YOUR_GOOGLE_DRIVE_IMAGE_ID"

    - DROPBOX change end of link from "dl=0" to "raw=1"
 */
import DescomeMockUp from "./img/6Descome MockUp 2.jpg";
import MusicAppMockUp from "./img/9Music App MockUp.jpg";
import FoodAppMockUp from "./img/7Food App MockUp.jpg";
import WebPractice from "./img/11Web Practice.png";
import MusicLabelWebpage from "./img/10Music Label Webpage.png";
import MobileDesign from "./img/8Mobile design.png";


export const designs = [
    {
      id: 1,
      img: DescomeMockUp,
      link: "https://dribbble.com/codexgrey",
    },

    {
      id: 2,
      img: MusicAppMockUp,
      link: "https://dribbble.com/codexgrey",
    },

    {
      id: 3,
      img: FoodAppMockUp,
      link: "https://dribbble.com/codexgrey",
    },

    {
      id: 4,
      img: WebPractice,
      link: "https://dribbble.com/codexgrey",
    },

    {
      id: 5,
      img: MusicLabelWebpage,
      link: "https://dribbble.com/codexgrey",
    },

    {
      id: 6,
      img: MobileDesign,
      link: "https://dribbble.com/codexgrey",
    },
];