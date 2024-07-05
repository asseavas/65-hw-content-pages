import React from 'react';
import { Content } from '../../types';
import ContentItem from '../ContentItem/ContentItem';

interface Props {
  contentPages: Content[];
}

const Pages: React.FC<Props> = ({ contentPages }) => {
  return (
    <div className="container books-container d-flex justify-content-between py-5 flex-wrap gap-4">
      {contentPages.map((content, index) => (
        <ContentItem key={index} content={content} />
      ))}
    </div>
  );
};

export default Pages;
