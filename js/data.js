var dob = new Date("1997-04-07");  
//calculate month difference from current date in time
var month_diff = Date.now() - dob.getTime();
//convert the calculated difference in date format
var age_dt = new Date(month_diff);
//extract year from date
var year = age_dt.getUTCFullYear();
//now calculate the age of the user
var age = Math.abs(year - 1970);
//display the calculated age
document.getElementById("age").innerHTML = age;
document.getElementById("birthDay").innerText = "1997.04.07";
document.getElementById("degree").innerText = "석사";
document.getElementById("pnum").innerText = "+82 10-7795-9798";
document.getElementById("addr").innerText = "경남 김해시";
document.getElementById("email").innerText = "abbuyanaa@gmail.com";

// Education - 학력
var arrEdu = [
  {
    title: '67유치원',
    time: '2000 - 2004',
    remark: '',
  },
  {
    title: '항-올구의 18번 학교에 중등교육을 취득했습니다.',
    time: '2004 - 2014',
    remark: '',
  },
  {
    title: '67유치원',
    time: '2000 - 2004',
    remark: '',
  },
  {
    title: '“KHUREE” 정보통신기술대학교 - 학사',
    time: '2014 - 2018',
    remark: '2014-2018년에 한국 투자 “KHUREE” 정보통신기술대학교에서 소프트웨어 전공으로 입학해서 공부하는 동안에 실력으로 앞장서고 20-50% 장학금을 받고 공부하고 졸업했습니다.',
  },
  {
    title: '“KHUREE” 정보통신기술대학교 - 석사',
    time: '2018.08 - 2019.12',
    remark: '2018년8월-2019년12월에 한국 투자 “KHUREE” 정보통신기술대학교에서 소프트웨어 전공으로 입학하고 100% 전액 장학금을 받아서 공부하고 졸업했습니다.',
  },
  {
    title: '“몽골국립과학기술대학교” - 교수 면허증',
    time: '2019.12 - 2020.01',
    remark: '2019년12월-2020년1월에 몽골국립과학기술대학교에서 대학교 교수자격증을 발급해주는 교육을 받고 졸업했습니다.',
  },
];

var eduListHTML = document.getElementById("eduList");