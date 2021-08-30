interface Genre {
  title: string;
}

export function GenreTitle(selectedGenre: Genre) {
  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
  )
}