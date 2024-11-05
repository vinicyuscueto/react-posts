import React from 'react';
import AppLayout from '../../utils/AppLayout';
import Form from "../../components/Form/Form";
import { useNavigate } from 'react-router-dom';
import { createPost } from '../../redux/redux';
import { useDispatch } from 'react-redux';

const NewPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addPost = (title, body) => {
    dispatch(createPost({ title, body }));
    navigate("/");
  };

  return (
    <AppLayout>
      <h2 className="text-3xl text-center uppercase font-bold my-8">Novo Post</h2>
      <Form onSubmit={addPost} type="add" />
    </AppLayout>
  );
};

export default NewPost;
