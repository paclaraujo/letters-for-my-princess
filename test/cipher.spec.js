import cipher from '../src/js/cipher';

describe('cipher', () => {
  it('should be a function', () => {
    expect(typeof cipher).toBe('function');
  });

  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => cipher()).toThrow(TypeError);
    expect(() => cipher(0)).toThrow(TypeError);
    expect(() => cipher(null, [])).toThrow(TypeError);
    expect(() => cipher(0, 0)).toThrow(TypeError);
  });

  describe('cipher with positive direction', () => {
    it('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 33', () => {
      expect(cipher(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');
    });

    it('should return "hijklmnopqrstuvwxyzabcdefg" for "abcdefghijklmnopqrstuvwxyz" with offset 33', () => {
      expect(cipher(33, 'abcdefghijklmnopqrstuvwxyz')).toBe('hijklmnopqrstuvwxyzabcdefg');
    });

    it('should return " !@" for " !@"', () => {
      expect(cipher(33, ' !@')).toEqual(' !@');
    });
  });

  describe('cipher with negative direction', () => {
    it('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "HIJKLMNOPQRSTUVWXYZABCDEFG" with offset 33', () => {
      expect(cipher(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG', -1)).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    it('should return "abcdefghijklmnopqrstuvwxyz" for "hijklmnopqrstuvwxyzabcdefg" with offset 33', () => {
      expect(cipher(33, 'hijklmnopqrstuvwxyzabcdefg', -1)).toBe('abcdefghijklmnopqrstuvwxyz');
    });

    it('should return " !@" para " !@"', () => {
      expect(cipher(33, ' !@', -1)).toEqual(' !@');
    });
  });
});