import React from 'react';
import Button from '../../common/Button/Button';
export {}

const EmptyCourseList: React.FC = () => {
  return (
    <div>
      <h2>Your List Is Empty</h2>
      <p>Please use "Add New Course" button to add your first course.</p>
      <Button buttonText="Add New Course" onClick={() => {}} />
    </div>
  );
};

export default EmptyCourseList;
