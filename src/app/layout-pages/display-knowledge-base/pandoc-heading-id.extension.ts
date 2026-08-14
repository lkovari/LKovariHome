import type { MarkedExtension, Tokens } from 'marked';

export function pandocHeadingIdExtension(): MarkedExtension {
  return {
    renderer: {
      heading({ tokens, depth }: Tokens.Heading): string {
        const text = this.parser.parseInline(tokens);
        const match = /^(.*)\s*\{#([\w-]+)\}\s*$/.exec(text);
        const title = match?.[1]?.trim();
        const id = match?.[2];
        if (!title || !id) {
          return `<h${depth}>${text}</h${depth}>\n`;
        }

        return `<h${depth} id="${id}">${title}</h${depth}>\n`;
      },
    },
  };
}
