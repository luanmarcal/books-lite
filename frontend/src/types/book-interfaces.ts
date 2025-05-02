export interface BookDataInterface {
  id: number;
  title: string;
  authors: [string] | string;
  isbn: number;
  edition: string;
  year: number;
  publisher: string;
  pages: number;
  purchaseLink: string;
  coverUrl: string;
}

export interface BookListProps {
  setCreateBook: (createBook: boolean) => void;
  setBook: (book: number) => void;
  setRoute: (route: string) => void;
  ListBooksAPI: BookDataInterface[];
}

export interface BookDetailsProps {
  createBook?: boolean;
  setCreateBook: (createBook: boolean) => void;
  setRoute: (route: string) => void;
  setBookList: (bookList: BookDataInterface[]) => void;
  bookList: BookDataInterface[];
  BookDetails: BookDataInterface | undefined;
}

export const defaultBookDetails: BookDataInterface = {
  id: 0,
  title: "",
  authors: [""],
  isbn: 0,
  edition: "",
  year: 0,
  publisher: "",
  pages: 0,
  purchaseLink: "",
  coverUrl: "",
};
