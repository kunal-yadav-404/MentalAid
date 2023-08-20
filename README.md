# MentalAid

"You, yourself, as much as anybody in the entire universe, deserve your love and affection."
— Buddha....

"MentalAid" is a web application designed to provide remote therapy sessions for individuals seeking mental health support. The app incorporates advanced features like video recording and facial expression analysis to offer personalized care. The system's main components are built using the MERN stack (MongoDB, Express.js, React.js, Node.js) for seamless development and deployment. Additionally, a machine learning model developed using Python is integrated into the app.
1.	Functionality:
•	Remote Therapy Sessions: MentalAid enables users to schedule and conduct remote therapy sessions with qualified mental health professionals. These sessions are conducted securely and privately through video conferencing.
•	Facial Expression Analysis: The application utilizes a machine learning model to analyze the facial expressions of users during therapy sessions. This analysis helps gauge emotional responses and provide better insights into the patient's mental state.
•	Emotion Graphs: MentalAid generates graphical representations of individual emotional changes over time. These graphs help both the therapists and patients monitor progress and identify patterns or triggers.
•	Appointment Management: The app includes a scheduling system to manage therapy session appointments. Patients can book sessions based on their availability, and therapists can view their schedule and plan accordingly.
•	Patient History: MentalAid maintains a comprehensive patient history, including past sessions, emotional trends, and other relevant data. This history aids therapists in developing personalized treatment plans for each individual.
2.	Technology Stack:
•	MERN Stack: The main technology foundation of the application, utilizing MongoDB for the database, Express.js for server-side operations, React.js for building the user interface, and Node.js for server-side execution.
•	Python: The machine learning model is developed using Python, taking advantage of libraries and frameworks like FER for facial expression analysis.
3.	Personalized Care and Accuracy: The integration of facial expression analysis with the machine learning model allows MentalAid to offer personalized care to each patient. The model's 80% accuracy in analyzing emotions adds credibility to the insights provided, enabling therapists to make data-driven decisions to enhance treatment efficacy.
MentalAid aims to bridge the gap between mental health professionals and those in need by providing an accessible, secure, and technologically advanced platform for remote therapy sessions, fostering mental well-being and emotional growth in individuals seeking support.


## How to run locally ?

Just git clone the repo in your local machine
Then open the terminal in the project's root folder and type this command- 

` npm i `

Then to run the deployment server type this- 

` npm run dev `

Now open the project and create a new branch so that your code is isolated from the main code for example your branch name is face-feature then you write -

` git checkout -b face-feature `

After you have finished coding just push and try not to commit any merge conflicts .

## How to structure the code - 

I have created a folder in src called pages. If you are working on lets say about then create a file About.jsx and work on that . Import all the components in this file only no mattert how many components you make.
Add all the compontents in the components folder by creating a new subfolder in it called about (same as the page you are creating so there wont be mess of different components )

## Lets rock lionss....
