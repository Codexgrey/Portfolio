/**
 * How do I display images from Google Drive on a react front-end website?

    - Obtain the public link of your uploaded google drive image:
      e.g https://drive.google.com/file/d/1JP0HZf4Gd5d9ohXX6rVyuMwuZJ-369Bl/view?usp=sharing
      
    - Extract the id from the link: id = 1JP0HZf4Gd5d9ohXX6rVyuMwuZJ-369Bl
    
    - DROPBOX change end of link from "dl=0" to "raw=1"
    - NOW* just -> remove "&st=76ttj6qk" and set dl=1
 */


export const devworks = [
    {
        id: 1,
        title: "NASA Search App",
        img: "https://www.dropbox.com/scl/fi/zw47ijzfztnnt14fcbbi0/screencapture-codexgrey-github-io-NASA-Search.png?rlkey=7c1mg93r2dsg57zjuzpk3tvrm&st=5ol6vubl&dl=1",
        link: "https://codexgrey.github.io/NASA-Search/",
        repo: "https://github.com/Codexgrey/NASA-Search",
    },

    {
        id: 2,
        title: "My portfolio",
        img: "https://www.dropbox.com/scl/fi/qo8yxr7oyi0xmzy5h6xim/portfolio.png?rlkey=6tqa2e1350tqgboc0tcsf6dmh&st=0bmf4omj&dl=1",
        link: "https://Codexgrey.github.io/Portfolio",
        repo: "https://github.com/Codexgrey/Portfolio",
    },

    {
        id: 3,
        title: "Events Website",
        img: "https://www.dropbox.com/scl/fi/epevcc78vtcfu90c0qbmv/screencapture-codexgrey-github-io-KAC233-2024-04-03-15_28_32.png?rlkey=gt0xnaw6bt0xfr532npba8tej&st=t0k5k6re&dl=1",
        link: "https://codexgrey.github.io/KAC233/",
        repo: "https://github.com/Codexgrey/KAC233",
    },

    {
        id: 4,
        title: "Social-Proof-Section",
        img: "https://www.dropbox.com/scl/fi/timpkfh7d8coj6kqtacze/screencapture-codexgrey-github-io-Social-Proof-Section-2024-04-03-15_34_10.png?rlkey=o74lgpx4tydkc2t77wsphpqfs&dl=1",
        link: "https://codexgrey.github.io/Social-Proof-Section/",
        repo: "https://github.com/Codexgrey/Social-Proof-Section",
    },

    {
        id: 5,
        title: "Javascript - PIG GAME APP",
        img: "https://www.dropbox.com/s/w7uaohrqbn7r0i6/screencapture-codexgrey-github-io-The-PIG-Game-2022-03-03-18_01_24.png?raw=1",
        link: "https://codexgrey.github.io/The-PIG-Game/",
        repo: "https://github.com/Codexgrey/The-PIG-Game",
    },

    {
        id: 6,
        title: "BUDGET APP",
        img: "https://www.dropbox.com/s/qort5i9z8guzbdg/screencapture-codexgrey-github-io-Budget-App-2022-03-03-17_57_36.png?raw=1",
        link: "https://codexgrey.github.io/Budget-App/",
        repo: "https://github.com/Codexgrey/Budget-App",
    },
];