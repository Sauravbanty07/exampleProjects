// import React, { useState } from "react"
// import Card from "./Card";

// function Cards(props)
// {
    
//     let courses = props.courses;
//     let category=props.category;
//     const [likedCourses, setLikedCourses] = useState([]);
    
//     function getCourses()
//     {

        

//         if(category === "All")
//         {

//             let nums=[];
//             Object.values(courses).forEach((arr) => {
//                 arr.forEach((courseData) => {
//                     nums.push(courseData);
//                 });
//             });
//             return nums;
//         }

//         else
//         {
//             return courses[category];
//         }
        
//     } 
//     return(

//         <div className="flex flex-wrap justify-center gap-4 mb-4">
//             {
//                  getCourses().map((course) => (
//                      <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
//                  ))
//             }

//         </div>
//     );
// }

// export default Cards;

import React, { useState } from "react";
import Card from "./Card";

function Cards({ courses = [], category = "All" }) {
  const [likedCourses, setLikedCourses] = useState([]);

  function getCourses() {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((arr) => {
        arr.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      return courses[category] || []; // Handle the case when category is not found
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
}

export default Cards;
