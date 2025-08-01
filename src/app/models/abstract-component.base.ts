export class AbstractComponent {
  translationPrefix!: string;

  constructor(context: {
    translationPrefix: string
  }) {
    this.translationPrefix = context.translationPrefix;
  }

  translationConcat(translationKey: string) {
    return `${this.translationPrefix}.${translationKey}`
  }
}
