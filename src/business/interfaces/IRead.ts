interface IRead<T> {
    retrieve () :T[] ;
    findById(id:number): T;
    
}

export = IRead;