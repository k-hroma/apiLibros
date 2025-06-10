import type { Author } from '../types/author';

const fetchAuthors = async (): Promise<Author[]> => {
  const res = await fetch('http://localhost:1234/api/authors');
  if (!res.ok) throw new Error('Error al obtener autores');
  const data = await res.json();
  return data.data;
};

export {fetchAuthors }