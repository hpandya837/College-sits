// script.js

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});



function admision(){
    document.getElementById('title1').innerHTML="Admissions Overview"
    document.getElementById('text1').innerHTML="Our Common Application is specifically for fall, first-year students applying to Rutgers for the first time and seeking full-time degree study. If you are a transfer applicant, interested in spring or summer entry, part-time enrollment, off-campus locations, or online or non-degree study, please use our Rutgers application."
    document.getElementById('title2').innerHTML="Important dates and deadlines"
    document.getElementById('text2').innerHTML= "<ul> <li>October 1: First-Year and Transfer (Spring Semester)</li> <li>November 1: First-Year Early Action (Fall Semester)</li><li>December 1: First-Year Regular Decision (Fall Semester)</li> <li>February 1: Transfer (Fall Semester)</li> <li>March 15: Free Application for Federal Student Aid (FAFSA)</li>"
    document.getElementById('title3').innerHTML = "Rutgers avg Requirments"
    document.getElementById('text3').innerHTML = "Rutgers avg SAT score are 665 in math and 635 in reading, summing up to an avg of 1300 <br> Avg GPA is 3.73 <br> Rutgers acceptence Rate is 63%"
}   
function student(){
    document.getElementById('title1').innerHTML="It All Happens Here"
    document.getElementById('text1').innerHTML="With 2,685 sprawling acres, you have room to explore a diverse environment where you can discover new ideas. A robust range of extracurricular activities supports all manner of community service, including New Jersey's largest student-run philanthropic event. A member of the Big Ten Athletic Conference, the university also has a thriving squad of sports fans cheering on our Scarlet Knights."
    document.getElementById('title2').innerHTML="The Bigger the Better"
    document.getElementById('text2').innerHTML= "Rutgers University–New Brunswick, nestled along the scenic shores of the Raritan River, boasts five distinctive campuses—Busch, College Avenue, Cook, Douglass, and Livingston—each pulsating with its own unique energy and character. With a student population of approximately 50,000, the university feels like a small, dynamic city full of diversity, charm, and countless surprises waiting to be discovered. Its strategic location near New York and Philadelphia opens up a world of opportunities for students to explore career paths, gain real-world experience, and build meaningful professional networks."
    document.getElementById('title3').innerHTML = "BIG 10"
    document.getElementById('text3').innerHTML = "You're standing tall, surrounded by fellow students, faculty, alumni, and dedicated locals, all cheering together in a powerful show of unity. The energy is electric, and the school spirit is something you can truly feel in the air. It’s an experience that stays with you long after you leave campus, a lasting connection and sense of pride that’s part of the fabric of being at a Big Ten university. This vibrant spirit is just one of the many perks that come with being a part of such a prestigious academic and athletic community."
}  
function cost(){
    document.getElementById('title1').innerHTML="Tution at Rutgers"
    document.getElementById('text1').innerHTML="When deciding on a college, the cost of tuition is often one of the most important factors to weigh. What many prospective students don’t realize is that a Rutgers education offers outstanding value, costing significantly less than most private universities. Despite the lower price, Rutgers delivers a top-tier academic experience, combining a strong educational foundation with unparalleled opportunities for hands-on, experiential learning. Choosing Rutgers means gaining access to an affordable, high-quality education that equips you for success in both your academic and professional journeys."
    document.getElementById('title2').innerHTML="In-State"
    document.getElementById('text2').innerHTML= "It will cost Jersey residents living on campus an avg of $17,922 for tution and $15,714 for room and board, making your annual cost averging at $33,643"
    document.getElementById('title3').innerHTML = "Out-Of-State"
    document.getElementById('text3').innerHTML = "It will cost non Jersey residents living on campus an avg of $33,734 for tution and $15,714 for room and board, making your annual cost averging at $53155"
}  