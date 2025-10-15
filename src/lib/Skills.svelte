<script lang="ts">
  import CodeBlock from './CodeBlock.svelte'
  const skills = `
  const {
    code = '',
    lang = 'console',
    theme = 'dark-plus',
    // Base Style Props
    base = 'overflow-hidden',
    rounded = 'rounded-container',
    shadow = '',
    classes = '',
    // Pre Style Props
    preBase = '',
    prePadding = '[&>pre]:p-4',
    preClasses = '',
  }: CodeBlockProps = $props()

  // Shiki convert to HTML
  const generatedHtml = shiki.codeToHtml(code, { lang, theme })
  `
</script>

<CodeBlock code={skills} lang="js" />
