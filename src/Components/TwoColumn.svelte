<script>
  export let as = "div";
</script>

<svelte:element this={as} class="column">
  <slot />
</svelte:element>

<style>
  .column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
  :global(.column) + .column {
    margin-top: 24px;
  }
  @media (max-width: 750px) {
    .column {
      grid-template-columns: 1fr;
    }
  }
</style>
