create table People(
id integer primary key,
fName varchar(36) not null,
lName varchar(36) not null,
occupation varchar (10)
check (occupation = 'Teacher' or occupation = 'Student')
);

create table Subjects(
id integer primary key,
description varchar(200)
);

create table Grades(
studentID integer,
subjectID integer,
grade varchar(1)
check (grade = 'A' or grade = 'B' or grade = 'C' or grade = 'D' or grade = 'F'),
foreign key (studentID) references People(id) on delete set NULL,
foreign key (subjectID) references Subjects(id) on delete cascade
);

create table TeacherSubject(
teacherID integer,
subjectID integer,
foreign key (teacherID) references People(id) on delete set NULL,
foreign key (subjectID) references Subjects(id) on delete cascade
);
