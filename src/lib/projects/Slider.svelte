<script lang="ts">
  import { Carousel } from "@skeletonlabs/skeleton-svelte";
  import slides from "./slides";
</script>

<Carousel
  slideCount={slides.length}
  slidesPerPage={1}
  spacing="8px"
  autoplay
  allowMouseDrag
  loop
>
  <Carousel.ItemGroup>
    {#each slides as { url, link, src, title, content }, i}
      <Carousel.Item
        index={i}
        class="card preset-filled-surface-100-900 border border-surface-300-700 max-w-md"
      >
        <article class="text-sm flex flex-col h-full">
          <header class="overflow-hidden rounded-t-xl">
            <img class="w-full" {src} alt="Project Header" />
            <h3 class="px-4 py-2">{title}</h3>
          </header>
          <div class="px-4 opacity-60 flex-auto">
            {@html content}
          </div>
          <footer class="px-4 py-2 text-right">
            <a href={url} target="_blank" class="anchor text-xs">{link}</a>
          </footer>
        </article>
      </Carousel.Item>
    {/each}
  </Carousel.ItemGroup>
  <Carousel.IndicatorGroup>
    <Carousel.Context>
      {#snippet children(carousel)}
        {#each carousel().pageSnapPoints as _, index}
          <Carousel.Indicator {index} />
        {/each}
      {/snippet}
    </Carousel.Context>
  </Carousel.IndicatorGroup>
</Carousel>
