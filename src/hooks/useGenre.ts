import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>("/genres"); /* fetching data from server
const useGenres = () => ({ data: genres, isLoading: false, error: null }); // use static data

export default useGenres;
