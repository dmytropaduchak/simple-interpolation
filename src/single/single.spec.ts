import { single } from './single';
import { Point, Y } from './single.definition';

describe('src/single/single.ts', () => {
  it('should do extrapolation `x` variable by parameters equal matrix data', () => {
    const points: Point[] = [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
    ];
    const params: Y = { x: 2 };

    expect(single(points)(params)).toEqual(2);
  });

  it('should do extrapolation `x` variable by parameters between matrix data', () => {
    const points: Point[] = [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
    ];
    const params = { x: 1.5 };

    expect(single(points)(params)).toEqual(1.5);
  });

  it('should do extrapolation `y` variable by parameters equal matrix data', () => {
    const points: Point[] = [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
    ];
    const params = { y: 2 };

    expect(single(points)(params)).toEqual(2);
  });

  it('should do extrapolation `y` variable by parameters between matrix data', () => {
    const points: Point[] = [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
    ];
    const params = { y: 1.5 };

    expect(single(points)(params)).toEqual(1.5);
  });

  it('should do left extrapolation `x` variable', () => {
    const points: Point[] = [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
    ];
    const params = { x: -1.5 };

    expect(single(points)(params)).toEqual(-1.5);
  });

  it('should do left extrapolation `y` variable', () => {
    const points: Point[] = [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
    ];
    const params = { y: -1.5 };

    expect(single(points)(params)).toEqual(-1.5);
  });

  it('should do right extrapolation `x` variable', () => {
    const points: Point[] = [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
    ];
    const params = { x: 3 };

    expect(single(points)(params)).toEqual(3);
  });

  it('should do right extrapolation `y` variable', () => {
    const points: Point[] = [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
    ];
    const params = { y: 3 };

    expect(single(points)(params)).toEqual(3);
  });

  it('should throw extrapolation error if incorrect matrix data', () => {
    const points: Point[] = [{ x: 1, y: 1 }];
    const params: Y = { x: 1.5 };

    expect(() => single(points)(params)).toThrowError(
      "Can't calculate single interpolation, please provide more points",
    );
  });
});
