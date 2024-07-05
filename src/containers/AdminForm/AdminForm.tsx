import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import axiosApi from '../../axiosApi';
import Spinner from '../../components/Spinner/Spinner';
import { ApiContent } from '../../types';

const initialState: ApiContent = {
  title: '',
  image: '',
  content: '',
};

const AdminForm = () => {
  const [pageContent, setPageContent] = useState<ApiContent>(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPage, setSelectedPage] = useState<string>('');

  const navigate = useNavigate();
  const { pageName } = useParams();

  const fetchOnePage = useCallback(async (pageName: string) => {
    setIsLoading(true);
    try {
      const response = await axiosApi.get<ApiContent | null>(
        `/pages/${pageName}.json`,
      );

      if (response.data) {
        setPageContent(response.data);
      } else {
        enqueueSnackbar('Page not found!', { variant: 'error' });
      }
    } catch (error) {
      enqueueSnackbar('Failed to fetch page!', { variant: 'error' });
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (pageName) {
      void fetchOnePage(pageName);
    } else {
      setPageContent(initialState);
    }
  }, [pageName, fetchOnePage]);

  const onFieldChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    setPageContent((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'category') {
      setSelectedPage(value);
      if (value) {
        void fetchOnePage(value);
      }
    }
  };

  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      if (selectedPage) {
        await axiosApi.put(`/pages/${selectedPage}.json`, pageContent);
        navigate(`/pages/${selectedPage}`);
      } else {
        enqueueSnackbar('Please select a page to edit!', {
          variant: 'warning',
        });
      }
    } catch (error) {
      enqueueSnackbar('Something went wrong!', { variant: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  let form = (
    <div className="rounded-4 bg-light-subtle p-4 px-5 w-75">
      <form className="w-100" onSubmit={onFormSubmit}>
        <h4 className="my-4 text-center">Edit pages</h4>
        <div className="form-group">
          <select
            name="category"
            className="form-select bg-body-secondary border-0 rounded-4 p-3"
            aria-label="Default select example"
            required
            onChange={onFieldChange}
            value={selectedPage}
          >
            <option value="" aria-required>
              Select page
            </option>
            <option value="paris">Paris</option>
            <option value="tokyo">Tokyo</option>
            <option value="shanghai">Shanghai</option>
            <option value="seoul">Seoul</option>
            <option value="dubai">Dubai</option>
            <option value="moscow">Moscow</option>
            <option value="new-york">New York</option>
          </select>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="mt-4 form-control bg-body-secondary border-0 rounded-4 p-3"
            required
            onChange={onFieldChange}
            value={pageContent.title}
          />
          <input
            type="url"
            name="image"
            placeholder="Image"
            className="mt-4 form-control bg-body-secondary border-0 rounded-4 p-3"
            required
            onChange={onFieldChange}
            value={pageContent.image}
          />
        </div>
        <div className="form-group">
          <textarea
            name="content"
            className="form-control mt-4 bg-body-secondary border-0 rounded-4 p-3"
            placeholder="Content"
            required
            onChange={onFieldChange}
            value={pageContent.content}
          />
        </div>
        <div className="w-100 d-flex">
          <button
            type="submit"
            className="btn btn-primary mt-4 ms-auto px-5 rounded-3"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );

  if (isLoading) {
    form = (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: '300px' }}
      >
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container pt-5 d-flex justify-content-center">{form}</div>
  );
};

export default AdminForm;
