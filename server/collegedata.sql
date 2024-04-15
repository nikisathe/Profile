CREATE DATABASE IF NOT EXISTS collegedata;
USE collegedata;

CREATE TABLE IF NOT EXISTS colleges (
    id INT AUTO_INCREMENT PRIMARY KEY,
    college_code VARCHAR(50) UNIQUE
);

CREATE TABLE IF NOT EXISTS studentinfo (
	
    username VARCHAR(255) primary key  ,
    password VARCHAR(255),
    college_code VARCHAR(50),
    FOREIGN KEY (college_code) REFERENCES colleges(college_code)
 
);

CREATE TABLE IF NOT EXISTS student (
    stud_id INT AUTO_INCREMENT PRIMARY KEY,
    stud_name VARCHAR(50),
    stud_std INT,
    stud_rollno INT,
    stud_div VARCHAR(30),
    stud_dob DATE,
    stud_phoneno VARCHAR(20), 
    username varchar(255) ,
    photo longblob,
    FOREIGN KEY (username) REFERENCES studentinfo(username)

);

