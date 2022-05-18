export const useHex = (hex: string) => {
  return new Hex(hex);
};

class Hex {
  hex: string;
  constructor (hex: string) {
    this.hex = hex;
  }

  setHex (hex: string) {
    this.hex = hex;
  }

  isHex () {
    return (/^#(([a-fA-F0-9]{3}){1,2})$/).test(this.hex);
  }

  hex2rgba () {
    if (!this.isHex()) {
      return null;
    }
    const code = this.hex.substring(1, this.hex.length);
    let codes = [];
    if (code.length === 3) {
      codes = code.split('');
    }
    if (code.length === 6) {
      codes = code.split(/([a-fA-F0-9]{2})/gm);
    }
    const rgba = codes.filter(hex => hex).map((hex) => {
      if (hex.length === 2) {
        return parseInt(hex, 16);
      }
      return parseInt(`${hex}${hex}`, 16);
    }).join(', ');
    return `rgba(${rgba}, 1)`;
  }
}
