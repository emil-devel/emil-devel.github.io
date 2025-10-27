<script lang="ts">
  import { createHighlighter } from 'shiki'
  import { ShikiMagicMove } from 'shiki-magic-move/svelte'

  import 'shiki-magic-move/dist/style.css'
  import { scale } from 'svelte/transition'

  const highlighter = createHighlighter({
    themes: ['dark-plus', 'poimandres', 'nord'],
    langs: ['javascript', 'typescript'],
  })

  let code = $state(`const skills = [role, base, preBase]`)

  $effect(() => {
    setTimeout(() => {
      code = `const skills = () => {
  role = 'Fullstack Web And App Developer',
  // Base Props
  base = [typescript, svelte],
  // Pre Props
  preBase = [html, css, javascript],
}: DeveloperProfile = $props();`
    }, 2000)
  })
</script>

{#await highlighter then highlighter}
  <div class="flex flex-row-reverse my-8" in:scale>
    <ShikiMagicMove
      class="p-4 rounded-container w-fit min-w-sm max-w-full text-xs"
      lang="ts"
      theme="poimandres"
      {highlighter}
      {code}
      options={{ duration: 800, stagger: 0.3, lineNumbers: false }}
    />
  </div>
{/await}
