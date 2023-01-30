const NAME = "HI";
console.log(NAME);
interface Rectangle {
    height: number,
    width: number
}

interface ColoredRectangle extends Rectangle {
    color: string
}

const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};
console.log(coloredRectangle);
console.log("90d");
