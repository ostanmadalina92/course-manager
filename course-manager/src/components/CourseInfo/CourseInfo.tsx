import React from 'react';
import Button from '../../common/Button/Button';
export {}


interface CourseInfoProps {
  course: any; // Replace with a proper type
  onBack: () => void;
}

const CourseInfo: React.FC<CourseInfoProps> = ({ course, onBack }) => {
  return (
    <div>
      <h2>{course.title}</h2>
      <p>ID: {course.id}</p>
      <p>{course.description}</p>
      <p>Duration: {course.duration}</p>
      <p>Creation Date: {course.creationDate}</p>
      <p>Authors: {course.authors.join(', ')}</p>
      <Button buttonText="Back" onClick={onBack} />
    </div>
  );
};

export default CourseInfo;
