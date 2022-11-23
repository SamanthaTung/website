<script>
  import Badge from "./Badge.svelte";

  export let title;
  export let description;
  export let badge;
  export let href;
</script>

<a class="square-project-tile" {href}>
  <div class="square-image">
    <div class="badge">
      <Badge>{badge}</Badge>
    </div>
  </div>
  <div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
</a>

<style>
  .square-project-tile {
    color: inherit;
    text-decoration: none;
  }
  .square-image {
    background-color: var(--gray-1);
    height: 262px;
    width: 100%;
    position: relative;
  }
  .badge {
    position: absolute;
    top: 12px;
    right: 12px;
  }
</style>
