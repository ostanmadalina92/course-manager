import React, { useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';
import Button from '../../common/Button/Button';
import { mockedCoursesList } from '../../constants';
import CourseInfo from '../CourseInfo/CourseInfo';
export {}

const Courses: React.FC = () => {
  const [courses, setCourses] = useState(mockedCoursesList);
  const [selectedCourse, setSelectedCourse] = useState(null); 

  const handleShowCourse = (course: any) => {
    setSelectedCourse(course); 
  };

  const handleBackToList = () => {
    setSelectedCourse(null); 
  };

  return (
    <div>
      {selectedCourse ? (
        <CourseInfo course={selectedCourse} onBack={handleBackToList} />
      ) : (
        <>
          {courses.length > 0 ? (
            <div style={{ margin: '120px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button buttonText="Add New Course" onClick={() => {}} />
              </div>
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  description={course.description}
                  creationDate={course.creationDate}
                  duration={course.duration}
                  authors={course.authors}
                  onShowCourse={() => handleShowCourse(course)} // Pass course data on click
                />
              ))}
            </div>
          ) : (
            <EmptyCourseList />
          )}
        </>
      )}
    </div>
  );
};

export default Courses;
