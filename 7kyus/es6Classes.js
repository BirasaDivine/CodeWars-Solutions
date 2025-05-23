class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  get surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.width * this.height +
        this.height * this.length)
    );
  }
  get volume() {
    return this.length * this.width * this.height;
  }
}
class cube extends Cuboid {
  constructor(length) {
    super(length, width, height);
    this.length = length;
    this.width = width;
    this.height = height;
  }
}
const Cuboid1 = new Cuboid(12, 34, 23);
console.log(Cuboid1.height);
console.log(Cuboid1.surfaceArea);
