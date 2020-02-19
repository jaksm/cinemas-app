function truncate(str: string, len: number) {
  return str.length >= len ? str.substr(0, len) + ' ...' : str;
}

export default truncate;
