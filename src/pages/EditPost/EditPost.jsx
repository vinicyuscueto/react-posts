import React, { useEffect } from 'react';
import AppLayout from '../../utils/AppLayout';
import Form from "../../components/Form/Form";
import { useNavigate, useParams } from 'react-router-dom';
import { editPost, fetchPostById } from '../../redux/redux';
import { useDispatch, useSelector } from 'react-redux';
import img from "../../assets/loading.svg";

const EditPost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { post, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (id) {
      dispatch(fetchPostById(id));
    }
  }, [dispatch, id]);

  const handleEdit = (title, body) => {
    dispatch(editPost({ id, title, body }));
    navigate("/");
  };

  return (
    <AppLayout>
      {loading ? (
        <div className="flex justify-center">
          <img src={img} className="my-8 w-12 h-12" alt="Loading" />
        </div>
      ) : error ? (
        <div className="text-red-500 text-center my-8">
          <p>Erro ao carregar o post: {error}</p>
        </div>
      ) : post ? (
        <>
          <h2 className="text-3xl text-center uppercase font-bold my-8">Editar Post</h2>
          <Form onSubmit={handleEdit} type="edit" propsTitle={post.title} propsBody={post.body} />
        </>
      ) : (
        <div className="text-gray-500 text-center my-8">
          <p>Post não encontrado.</p>
        </div>
      )}
    </AppLayout>
  );
};

export default EditPost;
