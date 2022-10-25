# TeamProfileGenerator

![team2](https://user-images.githubusercontent.com/48977323/197684037-692f7dd2-38e3-4df4-8468-edd2e4ad6c65.png)

In this project, a team profile generator was created using inquirer. To run this project, you would have to open a terminal and install inquirer using npm i inquirer@8.2.4. After that, you will run node index.js, which will start the input for the information on the team. First the program asks for the Manager's information and has validation methods to ensure information is received. Then the manager is able to add an Intern, Engineer, or choose to exit the program. Picking either Intern or Engineer will require different information compared to the Manager. After exiting, an html file will be generated, which will display information of the team.

Different classes were used to create this project. The main class was Employee which took in three parameters, name, id, and email. Using the Employee class, three subclasses, Engineer, Intern, and Manager, were created with additional parameters and different methods in the classes. There are test cases for each of the classes to make sure everything functions normally.

For the page-template, a basic html layout was made, which took in the new information from the user. The Style.css was used to set the cards in the html file. Bootstrap was mainly used to set the html elements in a pleasing format.

Below is an example run(can check the dist folder for it as well).

[teamgenerator.webm](https://user-images.githubusercontent.com/48977323/197684055-03d603fb-dcec-4754-b6ae-d2cd808d13ee.webm)

