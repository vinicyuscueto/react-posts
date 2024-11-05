import { useEffect, useState } from "react";

const Form = ({ onSubmit, type, propsTitle, propsBody }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (type === "edit") {
      setTitle(propsTitle);
      setBody(propsBody);
    }
  }, [type]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(title, body);
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <label htmlFor="title" className="block text-md font-semibold mb-2">
          Título:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border border-gray-300 rounded p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label htmlFor="body" className="block text-md font-semibold mb-2">
          Conteúdo:
        </label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows="4"
          required
          className="border border-gray-300 rounded p-3 mb-4 w-full resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <div className="flex justify-end">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Publicar Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
