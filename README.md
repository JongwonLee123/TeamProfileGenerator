# TeamProfileGenerator

In this project, a team profile generator was created using inquirer. To run this project, you would have to open a terminal and install inquirer using npm i inquirer@8.2.4. After that, you will run node index.js, which will start the input for the information on the team. First the program asks for the Manager's information and has validation methods to ensure information is received. Then the manager is able to add an Intern, Engineer, or choose to exit the program. Picking either Intern or Engineer will require different information compared to the Manager. After exiting, an html file will be generated, which will display information of the team.

Different classes were used to create this project. The main class was Employee which took in three parameters, name, id, and email. Using the Employee class, three subclasses, Engineer, Intern, and Manager, were created with additional parameters and different methods in the classes. There are test cases for each of the classes to make sure everything functions normally.

For the page-template, a basic html layout was made, which took in the new information from the user. The Style.css was used to set the cards in the html file. Bootstrap was mainly used to set the html elements in a pleasing format.

Below is an example run(can check the dist folder for it as well).
![team](https://user-images.githubusercontent.com/48977323/197682364-d8dd6529-4dbf-4e2e-9b0b-e26d62fc9d0d.png)
