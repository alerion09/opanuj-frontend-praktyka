import { useState } from 'react';
import type { Book } from './types/book.ts';

const App = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (title && author) {
      const id = new Date().getTime();
      setBooks([...(books?.length ? books : []), { title, author, id }])
      setTitle('');
      setAuthor('');
    }
  }

  const handleRemove = () => {
    if (books?.length) {
    setBooks(books.slice(0, -1))
    }
  }

  return (
    <div className="container px-2 py-2">
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <label>Title
          <input
            className="border border-gray-300 rounded-md ml-2"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          </label>
        </div>
        <div className="flex gap-2">
          <label>Author
          <input
            className="border border-gray-300 rounded-md ml-2"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          </label>
        </div>
        <button type="submit" className="max-w-40 p-2 border border-gray-300 rounded-md">
          Add book
        </button>
      </form>

      {books?.map((book: Book) => (
        <div className="flex flex-col gap-2 mt-8" key={book.id}>
          <p>Title: {book.title}</p>
          <p>Author: {book.author}</p>
        </div>
      ))}

      <button onClick={handleRemove} className="mt-8 p-2 border border-gray-300 rounded-md">Remove last book</button>
    </div>
  );
};

export default App;
