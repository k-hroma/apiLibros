interface IBook { 
  title: string,
  isbn: string,
}

interface QueryResponse { 
  success: boolean,
  message: string,
  data?: IBook | IBook[] | null,
  error?: string | null
}

export {IBook, QueryResponse }