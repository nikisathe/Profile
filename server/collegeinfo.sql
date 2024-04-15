CREATE DATABASE IF NOT EXISTS collegeinfo;
USE collegeinfo;



CREATE TABLE IF NOT EXISTS student (
    stud_id INT AUTO_INCREMENT PRIMARY KEY,
    stud_name VARCHAR(50),
    stud_std INT,
    stud_rollno INT,
    stud_div VARCHAR(30),
    stud_dob DATE,
    stud_phoneno VARCHAR(20), 
    username varchar(50),
    photo longblob, 
    FOREIGN KEY (username) REFERENCES studentinfo(username)
   
);


