export interface BookDataInterface {
  number: number;
  title: string;
  originalTitle: string;
  releaseDate: string;
  description: string;
  pages: number;
  cover: string;
}

export interface BookListProps {
  setBook: (book: number) => void;
  setRoute: (route: string) => void;
  ListBooksAPI: BookDataInterface[];
}

export interface BookDetailsProps {
  setRoute: (route: string) => void;
  bookDetails: BookDataInterface | undefined;
}

export const defaultBookDetails: BookDataInterface = {
  number: 0,
  title: "",
  originalTitle: "",
  releaseDate: "",
  description: "",
  pages: 0,
  cover: "",
};
