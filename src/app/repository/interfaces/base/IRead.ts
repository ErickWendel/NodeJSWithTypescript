import mongoose = require('mongoose');

interface IRead<T> {
    retrieve: (callback: (error: any, result: any)=> void)=> void;
    findOne: (item: Object, callback: (error: any, result: T) => void) =>void;
    findById: (id: mongoose.Types.ObjectId, callback: (error:any, result: T) => void) => void;    
} 

export = IRead;
