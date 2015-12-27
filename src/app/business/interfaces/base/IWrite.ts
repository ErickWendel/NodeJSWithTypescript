import mongoose = require('mongoose');
interface IWrite<T> {
    create: (item: T, callback: (error: any, result: any ) => void) => void;
    update:(_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any)=> void) => void ;
    delete: (_id: mongoose.Types.ObjectId, callback: (error: any, result: any) => void) => void;
    
}

export = IWrite;