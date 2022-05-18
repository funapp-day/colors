export const useRgba = (hex: string) => {
  return new RGBA(hex);
};

class RGBA {
  rgba: string;

  constructor (rgba: string) {
    this.rgba = rgba;
  }

  isRgba () {
    return /^rgba\((([\d,.]{1,3}),? ?){4}\)/.test(this.rgba);
  }

  rgba2hex () {
    if (!this.isRgba()) {
      return null;
    }
    const rgba = this.rgba
      .split(/([\d,.]{1,3})/)
      .filter(n => !isNaN(parseInt(n)));
    const hex = rgba
      .map(n => parseInt(n).toString(16))
      .map(n => n.toString().padStart(2, n));
    hex.pop();
    return `#${hex.join('')}`;
  }

  setRgba (rgba: string) {
    this.rgba = rgba;
  }
}
