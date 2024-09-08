import React, { useState } from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/CourseInfo/CourseInfo';
import { mockedCoursesList } from './constants';

const App: React.FC = () => {
  const [showCourseInfo, setShowCourseInfo] = useState<boolean>(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleShowCourse = (course: any) => {
    setSelectedCourse(course);
    setShowCourseInfo(true);
  };

  const handleBack = () => {
    setShowCourseInfo(false);
    setSelectedCourse(null);
  };

  return (
    <div>
      <Header />
      {showCourseInfo && selectedCourse ? (
        <CourseInfo course={selectedCourse} onBack={handleBack} />
      ) : (
        <Courses />
      )}
    </div>
  );
};

export default App;
