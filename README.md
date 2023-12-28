<div align="center">
<h1 align="center">
<img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" width="100" />
<br>SPOTIFY-AUTH-BOILERPLATE</h1>
<h3>◦ Developed with the software and tools below.</h3>

[![Demo](https://img.shields.io/badge/Demo-Link-blue.svg?style=flat-square)](https://spotify-by-jayanth.web.app/)

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/Redux-764ABC.svg?style=flat&logo=Redux&logoColor=white" alt="Redux" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/license/jayanth-kumar-morem/Spotify-Clone?style=flat&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/jayanth-kumar-morem/Spotify-Clone?style=flat&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/jayanth-kumar-morem/Spotify-Clone?style=flat&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/jayanth-kumar-morem/Spotify-Clone?style=flat&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📦 Features](#-features)
- [📂 Repository Structure](#-repository-structure)
- [⚙️ Modules](#️-modules)
- [🚀 Getting Started](#-getting-started)
  - [🔧 Installation](#-installation)
  - [🤖 Running Spotify-Clone](#-running-spotify-clone)
- [🛣 Project Roadmap](#-project-roadmap)
- [🤝 Contributing](#-contributing)
  - [Contributing Guidelines](#contributing-guidelines)

---


## 📍 Overview

The "Spotify-Auth-Boilerplate" is a React-based web application template that replicates the core functionality of Spotify. With a clean folder structure and modular components, it provides a foundation for building personalized music streaming applications. The project leverages React, Redux for state management, and Spotify API integration for a seamless user experience.

---

## 📦 Features

**Features:**

Spotify-Auth-Boilerplate offers a streamlined structure for building Spotify Clone apps. With responsive design, Redux state management, and dynamic components, it simplifies the process of creating a feature-rich Spotify-like experience for users.

---


## 📂 Repository Structure

```sh
└── Spotify-Clone/
    ├── .eslintcache
    ├── package-lock.json
    ├── package.json
    ├── public/
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    └── src/
        ├── App.css
        ├── App.js
        ├── Banner.css
        ├── Banner.js
        ├── Controls.css
        ├── Controls.js
        ├── Dashboard.css
        ├── Dashboard.js
        ├── Header.css
        ├── Header.js
        ├── LeftMenu.css
        ├── LeftMenu.js
        ├── Login.css
        ├── Login.js
        ├── MenuItem-1.css
        ├── MenuItem-1.js
        ├── Redux/
        │   ├── Reducer.js
        │   ├── Store.js
        │   └── rootReducer.js
        ├── Right.css
        ├── Right.js
        ├── SongListItem.css
        ├── SongListItem.js
        ├── SongsList.css
        ├── SongsList.js
        ├── Spotify-utils.js
        ├── index.css
        └── index.js

```

---


## ⚙️ Modules

  <summary>Modules Overview</summary>

  | Directory                           | Summary                                        |
  | ----------------------------------- | ---------------------------------------------- |
  | **public/**                         | Public assets and HTML entry point             |
  |   ├── index.html                    | HTML entry point for the application           |
  |   ├── manifest.json                 | Manifest file for Progressive Web App (PWA)   |
  |   └── robots.txt                    | Robots.txt file for search engine crawlers    |
  | **src/**                            | Source code directory                         |
  |   ├── App.css                       | Styles for the main application component     |
  |   ├── App.js                        | Main application component                    |
  |   ├── Banner.css                    | Styles for the banner component               |
  |   ├── Banner.js                     | Banner component                              |
  |   ├── Controls.css                  | Styles for the controls component             |
  |   ├── Controls.js                   | Controls component                            |
  |   ├── Dashboard.css                 | Styles for the dashboard component            |
  |   ├── Dashboard.js                  | Dashboard component                           |
  |   ├── Header.css                    | Styles for the header component               |
  |   ├── Header.js                     | Header component                              |
  |   ├── LeftMenu.css                  | Styles for the left menu component            |
  |   ├── LeftMenu.js                   | Left menu component                           |
  |   ├── Login.css                     | Styles for the login component                |
  |   ├── Login.js                      | Login component                               |
  |   ├── MenuItem-1.css                | Styles for menu item 1 component              |
  |   ├── MenuItem-1.js                 | Menu item 1 component                         |
  |   ├── Redux/                        | Directory for Redux state management          |
  |   │   ├── Reducer.js                | Application state reducer                    |
  |   │   ├── Store.js                  | Redux store configuration                    |
  |   │   └── rootReducer.js            | Root reducer combining all reducers           |
  |   ├── Right.css                     | Styles for the right component                |
  |   ├── Right.js                      | Right component                               |
  |   ├── SongListItem.css              | Styles for song list item component           |
  |   ├── SongListItem.js               | Song list item component                      |
  |   ├── SongsList.css                 | Styles for songs list component               |
  |   ├── SongsList.js                  | Songs list component                          |
  |   ├── Spotify-utils.js              | Utility functions related to Spotify API      |
  |   ├── index.css                     | Global styles for the application            |
  |   └── index.js                      | JavaScript entry point for the application    |

---

## 🚀 Getting Started

***Dependencies***

Please ensure you have the following dependencies installed on your system:

`- ℹ️ NodeJS >= 16.x`

### 🔧 Installation

1. Clone the Spotify-Clone repository:
```sh
git clone https://github.com/jayanth-kumar-morem/Spotify-Clone
```

2. Change to the project directory:
```sh
cd Spotify-Clone
```

3. Install the dependencies:
```sh
yarn install
```

### 🤖 Running Spotify-Clone

```sh
yarn start
```

---


## 🛣 Project Roadmap

- [x] `ℹ️  Task 1: Implement Core Components`
  - Develop key components such as Header, Dashboard, Song List, etc.

- [x] `ℹ️  Task 2: Implement Styling`
  - Apply styles to enhance the visual appeal of the application.

- [x] `ℹ️  Task 3: Integrate Redux for State Management`
  - Set up Redux for efficient state management in the application.

- [x] `ℹ️  Task 4: Connect to Spotify API`
  - Implement functionality to fetch data from the Spotify API.

- [x] `ℹ️  Task 5: Display Song Information`
  - Integrate API data to display relevant information about songs.

- [x] `ℹ️  Task 6: Implement Playback Controls`
  - Develop controls for playing, pausing, and skipping songs.

- [ ] `ℹ️  Task 7: Implement Playlist Management`
  - Allow users to create, edit, and manage playlists.

- [x] `ℹ️  Task 8: Deploy to Production`
  - Deploy the application to a hosting platform (e.g., Vercel, Netlify).

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/jayanth-kumar-morem/Spotify-Clone/issues)**: Submit bugs found or log feature requests for JAYANTH-KUMAR-MOREM.

### Contributing Guidelines

<details closed>
<summary>Click to expand</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.

2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone <your-forked-repo-url>
   ```

3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```

4. **Make Your Changes**: Develop and test your changes locally.

5. **Commit Your Changes**: Commit with a clear and concise message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```

6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```

7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---
