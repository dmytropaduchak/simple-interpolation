import { double } from './double';
import { Point, X, Y, Z } from './double.definition';

describe('src/double/double.ts', () => {
  it('should do extrapolation `z` variable by parameter `x` equal matrix data', () => {
    const points: Point[] = [
      { x: 1, y: 1, z: 11 },
      { x: 2, y: 1, z: 12 },
      { x: 1, y: 2, z: 21 },
      { x: 2, y: 2, z: 22 },
    ];
    const params: Z = { x: 2, y: 2 };

    expect(double(points)(params)).toEqual(22);
  });

  it('should do extrapolation `z` variable by parameter `y` equal matrix data', () => {
    const points: Point[] = [
      { x: 1, y: 1, z: 11 },
      { x: 2, y: 1, z: 12 },
      { x: 1, y: 2, z: 21 },
      { x: 2, y: 2, z: 22 },
    ];
    const params: Z = { x: 1.5, y: 2 };

    expect(double(points)(params)).toEqual(21.5);
  });

  it('should do extrapolation `z` variable by parameters between matrix data', () => {
    const points: Point[] = [
      { x: 1, y: 1, z: 11 },
      { x: 2, y: 1, z: 12 },
      { x: 1, y: 2, z: 21 },
      { x: 2, y: 2, z: 22 },
    ];
    const params: Z = { x: 1.5, y: 1.5 };

    expect(double(points)(params)).toEqual(16.5);
  });

  it('should do extrapolation `x` variable by parameters equal matrix data', () => {
    const points: Point[] = [
      { x: 1, y: 1, z: 11 },
      { x: 2, y: 1, z: 12 },
      { x: 1, y: 2, z: 21 },
      { x: 2, y: 2, z: 22 },
    ];
    const params = { y: 2, z: 22 };

    expect(double(points)(params)).toEqual(2);
  });

  it('should do extrapolation `x` variable by parameters between matrix data', () => {
    const points: Point[] = [
      { x: 1, y: 1, z: 11 },
      { x: 2, y: 1, z: 12 },
      { x: 1, y: 2, z: 21 },
      { x: 2, y: 2, z: 22 },
    ];
    const params: X = { y: 1.5, z: 16.5 };

    expect(double(points)(params)).toEqual(1.5);
  });

  it('should do extrapolation `y` variable by parameters equal matrix data', () => {
    const points: Point[] = [
      { x: 1, y: 1, z: 11 },
      { x: 2, y: 1, z: 12 },
      { x: 1, y: 2, z: 21 },
      { x: 2, y: 2, z: 22 },
    ];
    const params: Y = { x: 2, z: 22 };

    expect(double(points)(params)).toEqual(2);
  });

  it('should do extrapolation `y` variable by parameters between matrix data', () => {
    const points: Point[] = [
      { x: 1, y: 1, z: 11 },
      { x: 2, y: 1, z: 12 },
      { x: 1, y: 2, z: 21 },
      { x: 2, y: 2, z: 22 },
    ];
    const params: Y = { x: 1.5, z: 16.5 };

    expect(double(points)(params)).toEqual(1.5);
  });

  it('should throw extrapolation error if incorrect matrix data', () => {
    const points: Point[] = [
      { x: 1, y: 1, z: 11 },
      { x: 2, y: 1, z: 12 },
      { x: 1, y: 2, z: 21 },
    ];
    const params: Z = { x: 1.5, y: 1.5 };

    expect(() => double(points)(params)).toThrowError(
      "Can't calculate double interpolation, please provide more points",
    );
  });

  it('should throw extrapolation error if incorrect value of `x` variable, calculation by `x`, `y`', () => {
    const points: Point[] = [
      { x: 1, y: 1, z: 11 },
      { x: 2, y: 1, z: 12 },
      { x: 1, y: 2, z: 21 },
      { x: 2, y: 2, z: 22 },
    ];
    const params: Z = { x: -1.5, y: 1 };

    expect(() => double(points)(params)).toThrowError("Can't calculate double interpolation for x: '-1.5'");
  });

  it('should throw extrapolation error if incorrect value of `x` variable, calculation by `x`, `z`', () => {
    const points: Point[] = [
      { x: 1, y: 1, z: 11 },
      { x: 2, y: 1, z: 12 },
      { x: 1, y: 2, z: 21 },
      { x: 2, y: 2, z: 22 },
    ];
    const params: Y = { x: -1.5, z: 16.5 };

    expect(() => double(points)(params)).toThrowError("Can't calculate double interpolation");
  });

  it('should throw extrapolation error if incorrect value of `y` variable, calculation by `y`, `x`', () => {
    const points: Point[] = [
      { x: 1, y: 1, z: 11 },
      { x: 2, y: 1, z: 12 },
      { x: 1, y: 2, z: 21 },
      { x: 2, y: 2, z: 22 },
    ];
    const params: Z = { x: 1, y: -1.5 };

    expect(() => double(points)(params)).toThrowError("Can't calculate double interpolation for y: '-1.5'");
  });

  it('should throw extrapolation error if incorrect value of `y` variable, calculation by `y`, `z`', () => {
    const points: Point[] = [
      { x: 1, y: 1, z: 11 },
      { x: 2, y: 1, z: 12 },
      { x: 1, y: 2, z: 21 },
      { x: 2, y: 2, z: 22 },
    ];
    const params: X = { y: -1.5, z: 16.5 };

    expect(() => double(points)(params)).toThrowError("Can't calculate double interpolation");
  });
});
