const pipe = (...fns: any[]) => (a: any): any =>
  fns.reduce((r: any, f: any) => f(r), a);

export default pipe;
