 # Node.js Express and MySql REST Get API    
 This REST GET,POST ,PATCH API is a backend application to test basic API function with MYSQL database


###  Project Requirements:
 1.Node js  installation from official site nodejs.org 

 2.VS Code  installation from official site code.visualstudio.com

 3.Xampp server

### How to use  this code 
#### You can download code 2 ways:
#### 1.Git commands
   use 
    ```git clone <repository_url>```
  
   run
    ```npm install``` 
    inside the root  directory before running the code.

#### 2.Download zip file from the repository 

extract it in your desired directory 

 run npm install inside the root  directory before running the code.




## Installation

Install dependencies a with npm

 ```
 npm install express
``` 
 ```
 npm install mysql
```
 ```
 npm install body-parser
```  
  ```
 npm install multer
``` 
```
npm install cors
```
##  project run
First Xampp Server control panel start
then open phpmyadmin and Import collegedata.sql file(given inside the zip package)

visual Studio terminal open  run this command:
```bash
cd server
 npm start
```
Brower URl:
```
http://localhost:3001
```
Postman URL:
collegecode :```http://localhost:3001/checkCollegeCode```
login validation:```http://localhost:3001/login```
studentinfomation post:```http://localhost:3001/api/students```
studentinfomation get :```http://localhost:3001/student-info```
upadate studentinfomation :```http://localhost:3001/student-info/id ```



