// components/AuthorGrid.tsx
import'../../styles/authorGrid.css'
import type { Author } from '../../types/author';


interface AuthorGridProps {
  authors: Author[];
  onAuthorDeleted?: () => void;
  onAuthorEdit?: (author: Author) => void;
}

const AuthorGrid = ({ authors, onAuthorDeleted, onAuthorEdit }: AuthorGridProps) => {
  const handleAuthorDelete = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:1234/api/authors/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Error al eliminar el autor');
      onAuthorDeleted?.();
    } catch (error) {
      console.error('Error en la solicitud DELETE:', error);
    }
  };

  return (
    <div className="author-grid">
      {authors.map((author) => (
        <div key={author._id} className="author-card">
          <h3>{author.firstName} {author.lastName}</h3>
          <div className='btn-container'>
            <button onClick={() => handleAuthorDelete(author._id)} className='btn-el'>Eliminar</button>
            <button onClick={() => onAuthorEdit?.(author)} className='btn-ac'>Actualizar</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export { AuthorGrid };
  // Exporta el componente.
