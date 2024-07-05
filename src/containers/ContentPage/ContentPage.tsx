import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosApi from '../../axiosApi';
import { Content } from '../../types';
import Spinner from '../../components/Spinner/Spinner';
import ContentItem from '../../components/ContentItem/ContentItem';

const ContentPage = () => {
  const { pageName } = useParams();
  const [page, setPage] = useState<Content | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchPage = useCallback(async () => {
    setLoading(true);
    try {
      let pageUrl = '/pages/home.json';

      if (pageName) {
        pageUrl = `/pages/${pageName}.json`;
      }

      const { data: page } = await axiosApi.get<Content | null>(pageUrl);

      setPage(page);
    } finally {
      setLoading(false);
    }
  }, [pageName]);

  useEffect(() => {
    void fetchPage();
  }, [fetchPage]);

  return (
    <div className="container pt-4">
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: '300px' }}
        >
          <Spinner />
        </div>
      ) : page ? (
        <ContentItem
          image={page.image}
          title={page.title}
          content={page.content}
        ></ContentItem>
      ) : (
        <h1 className="text-center">Page not found!</h1>
      )}
    </div>
  );
};

export default ContentPage;
