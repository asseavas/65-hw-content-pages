import React from 'react';

interface Props {
  image: string;
  title: string;
  content: string;
}

const ContentItem: React.FC<Props> = ({ image, title, content }) => {
  const imageStyle = {
    backgroundImage: `url(${image})`,
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
        <h4 className="card-title mb-3">{title}</h4>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};

export default ContentItem;
