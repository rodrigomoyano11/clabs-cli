const helpers = {
  withOneBrace: (text: string, withSpaces: boolean) => (withSpaces ? `{ ${text} }` : `{${text}}`),

  withTwoBraces: (text: string, withSpaces: boolean) =>
    withSpaces ? `{{ ${text} }}` : `{{${text}}}`,

  concat: (t1: string, t2: string) => `${t1}${t2}`,
}


export default helpers