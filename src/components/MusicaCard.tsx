import { SongType } from '../types';
import './style.css';

function MusicCard({ trackName, previewUrl }: SongType) {
  return (
    <>
      <h2>{trackName}</h2>
      <audio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        {' '}

        <code>audio</code>
        .
      </audio>
    </>
  );
}
export default MusicCard;
