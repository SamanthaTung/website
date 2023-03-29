<script>
  import Badge from "./Badge.svelte";

  export let title;
  export let description;
  export let badge;
  export let href;
  export let src;

  export let comingSoon = false;
</script>

<a class="square-project-tile" {href}>
  <div class="square-image">
    <img class="image" {src} alt="" />
    <div class="badge">
      <Badge>{badge}</Badge>
    </div>
    {#if comingSoon === true}
    <div class='coming-soon-overlay' >
      <p> Coming Soon</p>
    </div>
    {/if}
  </div>
  <!-- ? ... : is called ternary -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator -->
  <div style="opacity: {comingSoon ? 0.3 : 1};">
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
    width: 100%;
    padding-top: 100%;
    position: relative;
  }
  .coming-soon-overlay {
    position: absolute;
    top: 0%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(124, 124, 124, 0.6) ;
  }
  .coming-soon-overlay p {
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    font-weight: 600;
    color: rgb(255, 255, 255);
  
  }

  .image {
    position: absolute;
    top: 0%;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .badge {
    position: absolute;
    top: 12px;
    right: 12px;
  }
</style>

