import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMusics from '../services/musicsAPI';
import { SongType, AlbumType } from '../types';
import MusicCard from './MusicaCard';

function Album() {
  const [loading, setLoading] = useState(false);
  const [musics, setMusics] = useState<SongType[]>([]);
  const [albuns, setAlbuns] = useState<AlbumType | null>(null);

  const params = useParams();

  useEffect(() => {
    const getFetch = async () => {
      setLoading(true);
      const [albumMusic, ...musicBox] = await getMusics(String(params.id));

      setAlbuns(albumMusic);
      setMusics(musicBox);
      setLoading(false);
    };
    getFetch();
  }, [params.id]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (

    <>
      <p>Album</p>

      <h3 data-testid="artist-name">{albuns?.artistName}</h3>
      <h3 data-testid="album-name">{albuns?.collectionName}</h3>
      {musics.map((music) => (
        <MusicCard
          key={ music.trackName }
          previewUrl={ music.previewUrl }
          trackName={ music.trackName }
          trackId={ music.trackId }
        />
      ))}
    </>
  );
}

export default Album;
