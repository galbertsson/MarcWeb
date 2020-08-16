//TODO: This does not look like a reasonable way to do it. Is a class rly needed? This only helps when creating, and then a util func can just be used.
class BasicNote{
    type: 'basicNote' = 'basicNote';
    front: string;
    back: string;

    constructor(front: string, back: string){
        this.front = front;
        this.back = back;
    }
}

export default BasicNote;