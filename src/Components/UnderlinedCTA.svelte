<script>
  // @ts-nocheck
  export let href;
</script>

<a class="button" {href}>
  <h3 class="button-text">
    <slot />
  </h3>
</a>

<style>
  .button {
    border: 0;
    font: inherit;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    border-bottom: 2px solid black;
    width: fit-content;
    color: inherit;
    text-decoration: none;
  }
  .button-text > :global(img) {
    width: 24px;
    height: 24px;
  }

  .button-text {
    display: inline-grid;
    align-items: center;
    gap: 8px;
    grid-auto-flow: column;
  }
  .button-text :global(a) {
    color: inherit;
    text-decoration: none;
  }
</style>
