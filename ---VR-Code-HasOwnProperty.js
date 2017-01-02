function Rectangle(color, height, width){
        this.color = color;
        this.height = height;
        this.width = width;
        Rectangle.prototype.getArea = function(){
            return this.height * this.width;
        }
}

function findObjPropsHasOwn(obj){
    let resultArr = [];
    for (let k in obj){
        if (obj.hasOwnProperty(k)) resultArr.push(k);
    }
    return resultArr.join(', ');
}

function findObjKeys(obj){
    let resultArr = Object.keys(obj);
    return resultArr.join(', ');
}

/*
Nice work.

Suggestions:

Use braces {} after if statments, it makes your code easier to read and is pretty much standard syntax.

Array methods can be joined, so you can actually do this:

function findObjKeys(obj){
	return Object.keys(obj).join(', ');
}


*/
