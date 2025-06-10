// components/AuthorForm.tsx
import { useState, useEffect } from 'react';
import '../../styles/authorForm.css';
import type { IAuthor } from '../../types/author';
import type { Author } from '../../types/author'; // El que incluye _id

const initialAuthor: IAuthor = {
  firstName: '',
  lastName: '',
};

interface AuthorFormProps {
  onAuthorAdded?: () => void;
  selectedAuthor?: Author | null;
  clearSelectedAuthor?: () => void;
}

const AuthorForm = ({
  onAuthorAdded,
  selectedAuthor,
  clearSelectedAuthor,
}: AuthorFormProps) => {
  const [author, setAuthor] = useState<IAuthor>(initialAuthor);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);

  useEffect(() => {
    if (selectedAuthor) {
      setAuthor({
        firstName: selectedAuthor.firstName,
        lastName: selectedAuthor.lastName,
      });
      setIsEditing(true);
      setEditId(selectedAuthor._id);
    }
    else {
    setAuthor(initialAuthor);
    setIsEditing(false);
    setEditId(null);
  }
  }, [selectedAuthor]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuthor((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const url = isEditing
        ? `http://localhost:1234/api/authors/${editId}`
        : `http://localhost:1234/api/authors`;

      const method = isEditing ? 'PATCH' : 'POST';

      const res = await fetch(url, {
        method,
        body: JSON.stringify(author),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) throw new Error(`Error en la solicitud: ${res.status}`);

      setAuthor(initialAuthor);
      setIsEditing(false);
      setEditId(null);
      clearSelectedAuthor?.();
      onAuthorAdded?.();
    } catch (err: any) {
      console.error('Error al enviar autor:', err.message);
    }
  };

  return (
    <form className="author-form" onSubmit={handleSubmit}>
      <h2>{isEditing ? 'Editar Autor' : 'Nuevo Autor'}</h2>

      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={author.firstName}
        onChange={handleChange}
        required
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={author.lastName}
        onChange={handleChange}
        required
      />

      <button type="submit">{isEditing ? 'Actualizar' : 'Submit'}</button>
    </form>
  );
};

export { AuthorForm };
