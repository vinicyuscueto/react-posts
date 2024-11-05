import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from "../../redux/redux";
import AppLayout from '../../utils/AppLayout';
import img from "../../assets/loading.svg";

const Home = () => {
    const dispatch = useDispatch();
    const { posts, loading: loadingPosts } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <AppLayout>
            <h2 className="text-3xl text-center uppercase font-bold my-8">Últimos Posts</h2>
            <div className="max-w-2xl mx-auto px-4">
                {loadingPosts ? (
                    <div className="flex justify-center">
                        <img src={img} alt="Carregando" className="w-12 h-12" />
                    </div>
                ) : (
                    posts.map((post) => (
                        <div key={post.id} className="bg-white rounded-lg shadow-md mb-4 p-6">
                            <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                            <p className="text-gray-700 mb-4">{post.body}</p>
                            <div className="flex justify-end">
                                <Link to={`/post/${post.id}`} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                                    Visualizar Post
                                </Link>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </AppLayout>
    );
};

export default Home;
