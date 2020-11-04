import * as interpolation from './simple-interpolation';

describe('src/simple-interpolation.ts', () => {
  it('should be interpolation object contain `linearInterpolation` calculator', () => {
    expect(interpolation).toHaveProperty('linearInterpolation');
  });
  it('should be interpolation object contain `bilinearInterpolation` calculator', () => {
    expect(interpolation).toHaveProperty('bilinearInterpolation');
  });
});
