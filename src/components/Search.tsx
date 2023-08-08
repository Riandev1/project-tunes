import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import { AlbumType } from '../types';
import './style.css';

export default function Search() {
  const [button, setButton] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [albums, setAlbums] = useState<AlbumType[]>([]);
  const [searchResult, setSearchResult] = useState<string>('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
    setButton(newSearch.length >= 2);
  };

  const handleClick = () => {
    setLoading(true);
    searchAlbumsAPI(search)
      .then((albumsData) => {
        setAlbums(albumsData);
        setSearchResult(search);
        setSearch('');
        setLoading(false);
      });
  };

  useEffect(() => {
    setAlbums([]);
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  const encontrado = `Resultado de álbuns de: ${searchResult}`;

  return (
    <>
      <input
        type="text"
        data-testid="search-artist-input"
        placeholder="Nome do Artista"
        value={ search }
        onChange={ handleSearchChange }
      />
      <button
        data-testid="search-artist-button"
        disabled={ !button }
        onClick={ handleClick }
      >
        Pesquisar
      </button>
      {albums.length > 0 ? (
        <div>
          <h4>{ encontrado }</h4>
          <ul>
            {albums.map((album) => (
              <li key={ album.artistId }>
                <Link
                  to={ `/album/${album.collectionId}` }
                  data-testid={ `link-to-album-${album.collectionId}` }
                >
                  {album.collectionName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : <p>Nenhum álbum foi encontrado</p>}
    </>
  );
}
