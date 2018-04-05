import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'markdown'})
export class MarkdownPipe implements PipeTransform {
  async transform(content: string): string {
    const marked = await import('marked');
    return marked(content, { sanitize: true });
  }
}
