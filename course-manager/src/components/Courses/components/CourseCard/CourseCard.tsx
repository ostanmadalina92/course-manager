import React from 'react';
import Button from '../../../../common/Button/Button'
import { mockedAuthorsList } from '../../../../constants';
export {}

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: string[];
  onShowCourse: () => void;
}

const cardStyle: React.CSSProperties = {
    padding: '20px',
    border: '1px solid #0000001F', // Light border around the card
    borderRadius: '5px',
    boxShadow: '2px 0px 8px 0px #00000040', // Shadow on all sides except the left
  };

const contentStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
}

const detailsStyle: React.CSSProperties = {
    minWidth: '20rem',
  };
  

const CourseCard: React.FC<CourseCardProps> = ({ id, title, description, creationDate, duration, authors, onShowCourse }) => {
  const formattedDuration = `${Math.floor(duration / 60).toString().padStart(2, '0')}:${(duration % 60).toString().padStart(2, '0')} hours`;
  const courseAuthors = authors.map((authorId) => mockedAuthorsList.find((author) => author.id === authorId)?.name).join(', ');

  return (
    <div className="course-card" style={cardStyle}>
        <h3>{title}</h3>
    <div style={contentStyle}>
      <div>        
        <p>{description}</p>
      </div>
      <div style={detailsStyle}>
        <p>Authors: {courseAuthors}</p>
        <p>Duration: {formattedDuration}</p>
        <p>Creation Date: {creationDate}</p>
        <Button buttonText="Show course" onClick={onShowCourse} />
      </div>
    </div>
    </div>
  );
};

export default CourseCard;
