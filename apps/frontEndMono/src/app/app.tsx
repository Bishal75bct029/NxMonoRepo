import { useGetBooksQuery } from '../rtk/book';
export function App() {
  const { data: books } = useGetBooksQuery();
  return (
    <div>
      <h1>Hello</h1>
      {books?.map((book) => {
        return book.author;
      })}
    </div>
  );
}

export default App;
