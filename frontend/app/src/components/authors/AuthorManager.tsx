// components/AuthorManager.tsx
import { useEffect, useState } from 'react';
// useState: para manejar el estado y useEffect: para ejecutar lógica al montar el componente.
import { AuthorForm } from './AuthorForm';
import { AuthorGrid } from './AuthorGrid';
import { fetchAuthors } from '../../services/authorServices';
import type { Author } from '../../types/author';

const AuthorManager = () => {
  // Define un componente funcional.
  const [authors, setAuthors] = useState<Author[]>([]);
  // Estado authors: array de objetos Author.
  const [selectedAuthor, setSelectedAuthor] = useState<Author | null>(null);
  // Estado de autor seleccionado
  const [loading, setLoading] = useState(true);
  // Estado loading: booleano para saber si se están cargando los autores.
  const [error, setError] = useState<string | null>(null);
  // Estado error: string para errores o null.

  const loadAuthors = async () => {
    // Función que carga autores desde el servidor.
    try {
      const data = await fetchAuthors();
      setAuthors(data);
      // Llama a fetchAuthors y guarda el resultado en authors.
    } catch (err: any) {
      setError(err.message);
      // Si ocurre un error, lo guarda en error.
    } finally {
      setLoading(false);
      // Finalmente, desactiva el loading.
    }
  };

  const handleAuthorUpdate = (author: Author) => {
    setSelectedAuthor(author);
    // Esto enviará el autor al formulario para editar
};

  useEffect(() => {
    // Llama a loadAuthors solo una vez cuando el componente se monta ([] como dependencia vacía).
    loadAuthors();
  }, []);

  const handleAuthor = () => {
    // Función que recarga los autores. Se pasa como callback al AuthorForm.
    loadAuthors(); // vuelve a cargar la grilla
  };

  if (loading) return <p>Cargando autores...</p>;
  if (error) return <p>Error: {error}</p>;
  // Si está cargando, muestra mensaje. Si hay error, lo muestra.


  return (
    <>
      <AuthorForm
        onAuthorAdded={handleAuthor} selectedAuthor={selectedAuthor} clearSelectedAuthor={() => setSelectedAuthor(null)} />
      <AuthorGrid authors={authors} onAuthorDeleted={handleAuthor} onAuthorEdit={handleAuthorUpdate}/>
      
    </>
  );
};

export { AuthorManager };
