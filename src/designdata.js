/**
 * How do I display images from Google Drive & dropbox on a react front-end website?

    - Obtain the public link of your uploaded google drive image:
      e.g https://drive.google.com/file/d/1JP0HZf4Gd5d9ohXX6rVyuMwuZJ-369Bl/view?usp=sharing

    - Extract the id from the link: id = 1JP0HZf4Gd5d9ohXX6rVyuMwuZJ-369Bl

    - use react url = "https://drive.google.com/uc?export=view&id=INSERT_HERE_YOUR_GOOGLE_DRIVE_IMAGE_ID"

    - DROPBOX change end of link from "dl=0" to "raw=1"
 */


export const designs = [
    {
      id: 1,
      img: "https://www.dropbox.com/s/hpx5jtlk2ivuvch/Descome%20MockUp%202.jpg?raw=1",
      link: "https://dribbble.com/codexgrey",
    },

    {
      id: 2,
      img: "https://www.dropbox.com/s/m7vilfqrhxpwjg5/Music%20App%20MockUp%202.jpg?raw=1",
      link: "https://dribbble.com/codexgrey",
    },

    {
      id: 3,
      img: "https://www.dropbox.com/s/7y7m4ytygansedr/Food%20App%20MockUp.jpg?raw=1",
      link: "https://dribbble.com/codexgrey",
    },

    {
      id: 4,
      img: "https://www.dropbox.com/s/uv97exumga0o6nk/Web%20Practice.png?raw=1",
      link: "https://dribbble.com/codexgrey",
    },

    {
      id: 5,
      img: "https://www.dropbox.com/s/5f9v5mrey7qpx8z/Music%20Label%20Webpage.png?raw=1",
      link: "https://dribbble.com/codexgrey",
    },

    {
      id: 6,
      img: "https://www.dropbox.com/s/qvlqb9lsgr1utgt/Mobile%20design.png?raw=1",
      link: "https://dribbble.com/codexgrey",
    },
];