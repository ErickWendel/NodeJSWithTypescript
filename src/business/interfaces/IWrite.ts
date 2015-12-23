interface IWrite<T> {
    create (item:T) :void;
    update(item:T) :T;
    delete(id:number): void;
    
}

export = IWrite;