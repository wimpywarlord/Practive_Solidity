pragma solidity >0.5.0;

contract InfoStudent {
    uint public studentCount = 0;

    struct Student {
        string rollno;
        string name;
        uint age;
        uint cgpa;
    }
    mapping(uint => Student) public students;

    constructor() public {
    createStudent("18BIT0131","KSHITIJ DHYANI",21,9);
    createStudent("18BCI0216","RISHABH SINGH",22,8);
    createStudent("17BCE0001","KIRAN SOOD",23,6);
    createStudent("18BIT0231","RAM SINGH",19,10);
    createStudent("18BIT0111","MADHUR BHATIA",21,9);
    createStudent("18BCI0216","SURESH SINGH",22,8);
    createStudent("13BET0001","MAHAK KAUR",23,6);
    createStudent("15MCT0231","RAM BEHL",26,10);
    }

    function createStudent(string memory _rollno,string memory _name,uint _age,uint _cgpa) public {
        studentCount ++;
        students[studentCount] = Student(_rollno,_name,_age,_cgpa);
    }

}