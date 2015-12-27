interface IWrite<T> {
    create: (item:T, callback: (error: any, result: any ) => void) => void;
    update:(item:T, callback: (error: any, result: any)=> void) => void ;
    delete: (id:number, callback: (error: any, result: any) => void) => void;
    
}

export = IWrite;