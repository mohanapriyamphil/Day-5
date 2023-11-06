class Circle{
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    getRadius(){
        return this.radius;
    }
    setRadius(value) {
        this.radius = value;
    }
    getColor(){
        return this.color;
    }
    setColor(value) {
        this.color = value;
    }
    tostring(){
        return `Circle[radius=${this.radius},color=${this.color}]`;
    }
    getArea(){
        return ((Math.PI) * (this.radius * this.radius));
    }
    getCircumference(){
        return (2 * (Math.PI) * (this.radius));
    }
};
