class BaseModel {
    private id: number;
    private name: string;
    
    get id(): number {
        return this.id;
    }
    set id(id:number) {
        this.id = id; 
    }
}

export = BaseModel; 