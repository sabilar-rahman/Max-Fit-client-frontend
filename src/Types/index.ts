
export interface TPro  {
    
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
    stock:number;
    _id:string ;
    
    
}


export type TCategoryInitialState = {
    category: string | null;
  };
  
  export type TFiltersInitialState = {
    searchTerm: string | null;
    categories: string[];
    sort: string | null;
  };
  
  interface ICartItem extends TPro {
    quantity: number;
  }
  
  export type TCartInitialState = {
    items: ICartItem[];
  };
  


// lets try filter operation

  export interface ProductFilters {
    searchTerm?: string;
    categories?: string[];
    sortByPrice?: "asc" | "desc";
    price?: number;
  }