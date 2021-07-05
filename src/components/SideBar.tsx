import { Button } from "./Button";

import '../styles/sidebar.scss';
import { useMovies } from './../hooks/useMovies';

export function SideBar() {

  const { setSelectedGenreId, genres, selectedGenreId } = useMovies()

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return(
    <>
      <nav className="sidebar">
        <span>Yensid+</span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
    </>
  ) 
}