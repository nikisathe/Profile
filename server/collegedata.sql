CREATE DATABASE IF NOT EXISTS collegedata;
USE collegedata;

CREATE TABLE IF NOT EXISTS colleges (
    id INT AUTO_INCREMENT PRIMARY KEY,
    college_code VARCHAR(50) UNIQUE
);
Insert into colleges (college_code) values
("PREC01"),
("AMRT45"),
("PVP12");
                                          

CREATE TABLE IF NOT EXISTS studentinfo (
	
    username VARCHAR(255) primary key  ,
    password VARCHAR(255),
    college_code VARCHAR(50),
    FOREIGN KEY (college_code) REFERENCES colleges(college_code)
 
);
INSERT INTO studentinfo (username,password,college_code) VALUES
("user1","pass1","PREC01"),
("user2","pass2","AMRT45"),
("user3","pass3","PVP12");

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

