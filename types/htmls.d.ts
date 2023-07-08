declare module 'htmls' {
  function compile(template: string): (data: any) => string
  export = compile
}
