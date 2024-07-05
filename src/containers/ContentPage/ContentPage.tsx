import { useCallback, useEffect, useState } from 'react';
import axiosApi from '../../axiosApi';
import { ApiContentList, Content } from '../../types';
import Spinner from '../../components/Spinner/Spinner';
import Pages from '../../components/Pages/Pages';

const ContentPage = () => {
  const [pages, setPages] = useState<Content[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPages = useCallback(async () => {
    setLoading(true);
    try {
      setLoading(true);
      const { data: pages } = await axiosApi.get<ApiContentList | null>(
        '/pages.json',
      );

      if (!pages) {
        setPages([]);
      } else {
        const newPages = Object.keys(pages).map((id) => ({
          ...pages[id],
          id,
        }));

        setPages(newPages);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchPages();
  }, [fetchPages]);

  return (
    <div>
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: '300px' }}
        >
          <Spinner />
        </div>
      ) : (
        <Pages contentPages={pages} />
      )}
    </div>
  );
};

export default ContentPage;
