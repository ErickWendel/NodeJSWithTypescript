
interface IRead<T> {
    retrieve: (callback: (error: any, result: T)=> void)=> void ;
    findById: (_id: string, callback: (error:any, result: T) => void) => void;    
    findOne: (item:Object, callback: (error:any, result: T) => void) => void;    
}

export = IRead;