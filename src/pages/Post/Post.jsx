import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AppLayout from '../../utils/AppLayout';
import img from "../../assets/loading.svg";
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, fetchPostById } from '../../redux/redux';

const Post = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { post, loading, error } = useSelector((state) => state.posts);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchPostById(id));
    }, [dispatch, id]);

    const handleDelete = () => {
        if (window.confirm('Tem certeza que deseja deletar este post?')) {
            dispatch(deletePost(id));
            navigate("/");
        }
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
                <div className="max-w-xl mx-auto px-4">
                    <h2 className="text-3xl text-center uppercase font-bold my-8">{post.title}</h2>
                    <p className="text-gray-700 text-justify mb-4">{post.body}</p>
                    <div className="flex justify-end gap-4">
                        <Link to="edit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Editar Post</Link>
                        <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
                            Excluir Post
                        </button>
                    </div>
                </div>
            ) : (
                <div className="text-gray-500 text-center my-8">
                    <p>Post não encontrado.</p>
                </div>
            )}
        </AppLayout>
    );
};

export default Post;
