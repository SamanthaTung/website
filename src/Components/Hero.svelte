<script>
  import Badge from "./Badge.svelte";

  export let imageSrc;
  export let title;
  export let description;
  export let awards = [];
  export let skills = [];
</script>

<div class="hero-container">
  <div class="content-of-page hero-row">
    <div class="hero-content">
      <div class="hero-text">
        <h1>{title}</h1>
        <h3>
          {description}
        </h3>

        {#if awards}
          <div class="awards">
            <p>Awards:</p>
            <ul>
              {#each awards as award}
                <li>{award}</li>
              {/each}
            </ul>
          </div>
        {/if}
        <p>Skills shown in this project</p>
        <div class="skill-container">
          {#each skills as skill}
            <Badge>{skill}</Badge>
          {/each}
        </div>
      </div>
    </div>
    <div class="hero-image">
      <img src={imageSrc} alt="hero" />
    </div>
  </div>
</div>

<style>
  .hero-container {
    background-color: #6da5bc;
    overflow: hidden;
  }

  .hero-content {
    padding: 80px 0;
    max-width: 544px;
    flex-grow: 1;
    flex-shrink: 0;
  }
  .hero-text {
    width: 100%;
  }

  .hero-row {
    display: flex;
  }
  .awards {
    margin-top: 24px;
    margin-bottom: 32px;
  }
  .skill-container {
    margin-top: 32px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  @media (max-width: 610px) {
    .hero-image {
      display: none;
    }
    .hero-content {
      flex-shrink: 1;
      width: 100%;
    }
  }
</style>
