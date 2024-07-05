import React from 'react';
import { Content } from '../../types';

interface Props {
  content: Content;
}

const ContentItem: React.FC<Props> = ({ content }) => {
  const imageStyle = {
    backgroundImage: `url(${content.image})`,
    width: '100%',
    height: '300px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="card mb-3 text-center rounded-4 border-0 shadow">
      <div className="card-img-top rounded-top-4" style={imageStyle} />
      <div className="card-body d-flex flex-column align-self-center py-5 w-75">
        <h4 className="card-title mb-3">{content.title}</h4>
        <p className="card-text">{content.content}</p>
      </div>
    </div>
  );
};

export default ContentItem;
