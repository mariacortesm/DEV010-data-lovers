# Data Lovers (Studio Ghibli)

## Table of Contents

1.  Preamble
2.  Project Summary 2.1. What is Data Lovers?
3.  User Stories 
3.1. Getting Started 
3.2. User Stories
4.  Project Organization
5.  User Interface Design 
5.1. Low-Fidelity Prototype 
5.2. High-Fidelity Prototype
7.  Code 6.1. Tests
8.  Technologies Used
9.  Useful Resources
    

## 1. Preamble

According to [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read), 90% of the data that exists today has been created in the last two years. Every day, we generate 2.5 million terabytes of data, an unprecedented figure.

However, data by itself is of little use; for it to become **information** that is easy for users to read, we need to understand and process it. One simple way to do this is by creating _interfaces_ and _visualizations_, like the one we have created in this project.

**Unrendered Data**
<a href="https://ibb.co/Jm648W1"><img src="https://i.ibb.co/GnYLGf6/preambulo1.png" alt="preambulo1" border="0"></a>

**Rendered Data**
<a href="https://ibb.co/LkPCbGT"><img src="https://i.ibb.co/VjNvrKF/preambulo2.png" alt="preambulo2" border="0"></a>

## 2. Project Summary

**2.1** **What is Data Lovers?**

It is a website designed to visualize a dataset that suits our users' needs.

We have designed an interface that displays data from the _Studio Ghibli_ film production company. This interface provides users with various types of data, ranging from production titles to IMDb scores, including information about characters, locations, directors, producers, species, and other elements that appear in the animations of the renowned Japanese film studio.

Since the project only displays, organizes, and filters the collected information, it is an easy-to-use tool for users, whether they are fans who want to explore very specific movie details or newcomers to the wonderful and magical world of _Studio Ghibli_ stories.

In order to create a product that would be both interesting and useful, we conducted preliminary research within a users group. This research guided our entire project, from time planning and sprint objectives to the type of data to be displayed in the interface and the color palette to be used.

## 3. User Stories

**3.1 Getting Started**

As an initial step, we answered a series of questions that helped us generate a research group on which we would base our project.

-   Who are the primary users of the product?
-   What are the goals of these users in relation to the product?
-   What are the most relevant data they want to see in the interface and why?
-   When do they use or would they use the product?

![Getting Started](https://i.ibb.co/Y88ZS49/Figma-primeros-pasos.png)

**3.2 User Stories**

Our project is based on _**Studio Ghibli**_, the Japanese animation studio known for its animated feature films such as **My Neighbor Totoro**, **Spirited Away**, and **Howl's Moving Castle**, among other great successes.

These animations have gained worldwide acclaim and some have received numerous nominations and awards. Within their fandom, there is a group of users who want to interact with and view information about the animations and their characters.

Based on the preliminary research among our future users, we gathered information about their needs, preferences, and tastes regarding the visualization of data from _Studio Ghibli_ animations.

Based on the observations of this particular group, we were able to create various user stories that allowed us to develop a guide to their preferences, tastes, and needs based on the data we collected from Studio Ghibli's productions. The results were as follows:

-   Our users consider it important to know how many and which movies make up the _Studio Ghibli_ catalog.
-   They also revealed that they would like to **sort** these productions alphabetically.
-   They want to know the directors and producers of the animations and which ones they have participated in, so they require **filtering** based on these two fields.
-   For our users, it is important to have specific relevant information such as title, release date, score, director, and producer.
-   It is not difficult to imagine that the studio's animations captivate the audience with their diverse menu of magical and charming characters. Therefore, our users also consider it important to know which characters appear in each movie and how many there are.
-   Characters have unique characteristics that users want to know, such as name, age, gender, species, and more.
-   Additionally, the animations feature unique locations and vehicles in each one. For our users, it is important to know what they are and in which production they appear.
-   As extra information, our users determined the importance of **calculating** the percentage of female and male characters (human or not) that appear in all the movies. This was added to the count of vehicles (magical or not) and their names.

<a href="https://ibb.co/fk4dVXh"><img src="https://i.ibb.co/McMkygY/Figma-historias-usuarias.png" alt="Figma-historias-usuarias" border="0"></a>

## 4. Project Organization

Once we defined the main needs, preferences, and tastes of our users, we decided to plan the project in sprints based on the objectives identified in our User Stories.

For this, we used [Trello](https://trello.com/b/dqORWHBB/1er-sprint-dl), where we created a dashboard for each sprint. Initially, we only created the first one, and the other three were the result of tasks we completed or carried over from the previous sprint.

**1st Sprint**
<a href="https://ibb.co/HxLkvhC"><img src="https://i.ibb.co/xfKRvFY/Trello-1er-sprint.png" alt="Trello-1er-sprint" border="0"></a>

**2nd Sprint** 
<a href="https://ibb.co/kxb6j45"><img src="https://i.ibb.co/HVwp6tB/Trello-2do-sprint.png" alt="Trello-2do-sprint" border="0"></a>

**3rd Sprint** 
<a href="https://ibb.co/7WkwqTF"><img src="https://i.ibb.co/cFYGjpd/Trello-3er-sprint.png" alt="Trello-3er-sprint" border="0"></a>

**4th Sprint** 
<a href="https://ibb.co/XjSwVLv"><img src="https://i.ibb.co/Dz5qLWS/Trello-4to-sprint.png" alt="Trello-4to-sprint" border="0"></a>

Based on the objectives of the first sprint, we decided to continue with the creation of the Low-Fidelity and High-Fidelity prototypes. When planning and taking into account the user stories (filtering, sorting, and data calculation), we decided to approach the project in stages. The first phase was to visualize the basic data of the animations: poster and title.

In this initial phase, we included a select for the **filtering** by director and producer, as well as buttons that implemented the **sorting** function to alphabetically order the movies in the catalog.

The second part focused on creating a modal box that displayed the rest of the movie data: description, director, producer, score, release year, characters (name, age, gender, eye color, hair color, and species), locations (name, climate, terrain, and surface water), and vehicles (name, description, vehicle class, length, and pilot) along with their respective images.

As we worked on the project, we realized the need to create a modal to display the results of the **calculation** and **count** functions. This feature does not appear in our High-Fidelity prototype.

## 5. User Interface Design

**5.1 Low-Fidelity Prototype**

For its creation, we used [Figma](https://www.figma.com/file/5Jo5rlzB1Hdx7YJhgnZlWn/Studio-Ghibli-Historias-de-usuarias/Prototipo-baja-fidelidad?type=whiteboard&t=kpnAlzyHyNU8Twpa-0). This low-fidelity prototype consists of an interface that displays movies with basic data (animation poster, title, year, duration), a section that, when clicking on the poster, displays specific data about the productions, such as characters, locations, and vehicles that appear in the movies. There is also a carousel of images and another section (roulette) that will help users choose which movie to watch.
<a href="https://ibb.co/dWVL36X"><img src="https://i.ibb.co/QbTCqnh/Figma-baja-fidelidad.png" alt="Figma-baja-fidelidad" border="0"></a>

**5.2 High-Fidelity Prototype**

Regarding our [high-fidelity prototype](https://scene.zeplin.io/project/64f608cdc99f9224968fed7f), it is presented with the color palette designated in a circular gradient (based on the animations of **Princess Mononoke** and **Spirited Away**), the possible poster sizes, and part of the data that will appear beneath them. Please note that upon importing the data, we realized it included other elements that we did not take into account.
<a href="https://ibb.co/3WW4nHW"><img src="https://i.ibb.co/nff6FSf/Figma-alta-fidelidad-1.png" alt="Figma-alta-fidelidad-1" border="0"></a>

<a href="https://ibb.co/nLM4yDs"><img src="https://i.ibb.co/5RhC35W/Figma-alta-fidelidad-2.png" alt="Figma-alta-fidelidad-2" border="0"></a>

The second section shows the modal box that would be built with the extra data from the animations. In the following video, we demonstrate the simplicity with which we allow users to interact to obtain the information they need.
<div>
    <a href="https://www.loom.com/share/6c1bad4f89fd435aba2de4bb903bf31c">
      <p>Studio Ghibli web video</p>
    </a>
    <a href="https://www.loom.com/share/6c1bad4f89fd435aba2de4bb903bf31c">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/6c1bad4f89fd435aba2de4bb903bf31c-1693927929842-with-play.gif">
    </a>
  </div>

We want to emphasize that our interface is also [responsive](%28https://www.webmobilefirst.com/en/screencasts/sBWtdk_178/%29), seamlessly adapting to devices with different screen sizes, including mobiles, tablets, and desktops.

## 6. Code

As mentioned, the interface allows users to analyze movies from three perspectives that users have commented are the most important to them: filtering, sorting, and calculation. For this purpose, three functions were created to meet these expectations:

-   **Filtering** (`function filterDirector and function filterProducer`): Movies can be filtered by Director or Producer.
-   **Sorting** (`function extractTitle`): Movie titles can be sorted from A-Z and in reverse order.
-   **Calculation** (`function computeFemaleCharacterPercentage and function computeMaleCharacterPercentage`): It displays the percentages of female and male characters that appear in the productions.

As an added feature, the **Count** function (`function computeVehicle`) was included, which provides extra information about the number of vehicles (magical or not) that appear in the _Ghibli_ universe.

For the first function, two `select` elements were used, displaying the directors and producers of all movies that can be selected by users to filter movies based on these criteria.

The `buttons` referenced as Aa-Zz and Zz-Aa are used to sort the animations in alphabetical order, while the "Click me!" `button` allows users to view the results of our last two functions in a modal.

Inside a `display: grid`, movies were added with their respective general data. Clicking on each one opens another modal, which contains two columns displaying specific data.

Below are various images of our code:
**HTML**
<a href="https://ibb.co/SnV8M7W"><img src="https://i.ibb.co/hW2j41h/Html-select-director.png" alt="Html-select-director" border="0"></a>**

**Data.JS**
<a href="https://ibb.co/rxCGxzF"><img src="https://i.ibb.co/F5Sb5ym/Data-js-funciones.png" alt="Data-js-funciones" border="0"></a>

**Main.JS**
<a href="https://ibb.co/qJbQqFw"><img src="https://i.ibb.co/TWz3jq5/Main-js.png" alt="Main-js" border="0"></a>

**Data.Spec.JS**
<a href="https://ibb.co/NTbncNS"><img src="https://i.ibb.co/hYw13df/Data-spec.png" alt="Data-spec" border="0"></a>

**CSS**
<a href="https://ibb.co/5MH6HcF"><img src="https://i.ibb.co/Tv3k3hL/CSS-body-header.png" alt="CSS-body-header" border="0"></a>

## 6.1 Tests

Our project also includes a set of tests (written by us) for the filtering, sorting, calculation, and counting functions. These tests helped identify some ESLint errors.

Additionally, when running these tests, we noticed a bug in one of our functions: the alphabetical sorting function was not correctly rearranging the array. However, this issue was resolved by shuffling the array in the test.

In the following video, you can see the tests that were performed and passed with complete satisfaction:
<div>
    <a href="https://www.loom.com/share/60809ca49b9d49eb95fa839bfbe684b0">
      <p>Run Test video Data Lovers-Studio Ghibli</p>
    </a>
    <a href="https://www.loom.com/share/60809ca49b9d49eb95fa839bfbe684b0">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/60809ca49b9d49eb95fa839bfbe684b0-with-play.gif">
    </a>
  </div>

## 7. Technologies Used

-   HTML5: Provides the basic structure of the application.
-   CSS3: Defines the visual design and style of the application.
-   JavaScript: Implements the functionality to analyze the entered text and display the results.
-   We also made use of [ImgBB](https://imgbb.com/), [Trello](https://www.trello.com/), [Loom](https://www.loom.com/), [Stackedit](https://www.stackedit.io/), [ColorSpace](https://mycolor.space/), Visual Code, and Github.

## 8. Useful Resources
[How to divide user stories into tasks](https://www.youtube.com/watch?v=Ueq786iZ30I&t=341s&ab_channel=%C3%81gilEs-PorCrisR%C3%BAa) 
[Pruebas/Testing en JavaScript](https://www.youtube.com/playlist?list=PLiAEe0-R7u8kqvibxkK9tqqoJXnhgtefg),
[Flujo de trabajo de ramas de función en Github](https://www.atlassian.com/es/git/tutorials/comparing-workflows/feature-branch-workflow)
[Build a responsive modal using CSS](https://dev.to/ananiket/build-a-responsive-modal-using-css-1h5k)
[Responsive layouts using CSS grid](https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/)