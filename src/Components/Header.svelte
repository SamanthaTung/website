<script>
  // @ts-nocheck

  import { onMount } from "svelte";
import SquareTile from "../Components/SquareTile.svelte";
  /** @type {HTMLElement} */
  let headerEl;
  let logoEl;
  let aboutEl;
  let prevScroll = 0;
  let currentScroll;
  let scrollingDown = false;

  let dropdownOpen = false;

  onMount(() => {
    prevScroll = window.scrollY
   
  })
</script>

<svelte:window
  on:click={(e) => {
    const clickedElement = e.target;

    if (
      headerEl &&
      (headerEl.contains(clickedElement) || clickedElement === headerEl) &&
      clickedElement !== logoEl &&
      clickedElement !== aboutEl
    ) {
      // do nothing
    } else {
      dropdownOpen = false;
    }
  }}

on:scroll={(e) =>{
// prevScroll = window.scrollY
currentScroll = window.scrollY
console.log('prevScroll',prevScroll)
console.log('currentScroll',currentScroll)

//v do something
if (currentScroll >= prevScroll && currentScroll>80 ) {
  // hide 
  scrollingDown=true;

} else {
  // show
  scrollingDown=false;
}

prevScroll=currentScroll
}

}

/>

<header class={scrollingDown===true? 'scroll-down':''} class:dropdown={dropdownOpen} bind:this={headerEl}>
  <div class="width-clamper">
    <a href="/" class="logo" bind:this={logoEl}> Sam Tung</a>
    <div class="nav-option">
      <h3 class="nav-item">
        <button
          on:click={() => {
            dropdownOpen = !dropdownOpen;
          }}
        >
          Work</button
        >
      </h3>

      <h3 class="nav-item">
        <a href="./about" bind:this={aboutEl}> About</a>
      </h3>
    </div>
  </div>
  <div class="dropdown-content" class:show={dropdownOpen}>
    <div class="content-of-page">
      <div
        class="project-tiles"
        on:click={() => {
          dropdownOpen = false;
        }}
        on:keydown={() => {}}
      >
      <SquareTile
      title="Reverse"
      description="Package-free groceries delivery service for time poor users"
      badge="Student"
      href="/reverse"
      src='ProjectTile/ProjectTile1.png'
    />
    <SquareTile
      title="Pulsair"
      description="Air management platform for construction workers"
      badge="Student"
      href="/pulsair"
      src='ProjectTile/ProjectTile2.png'
    />
    <SquareTile
      title="Bubble"
      description="Remote healthcare monitoring platform for health workers"
      badge="Professional"
      src='ProjectTile/ProjectTile3.png'
      comingSoon= {true}
    />
    <SquareTile
      title="Coin Rivet"
      description="Cryptocurrency investment platform & wallet for beginners"
      badge="Professional"
      src='ProjectTile/ProjectTile4.png'
      comingSoon= {true}
      />
    </div>
  </div>
</header>

<style>
  header {
    --header-bg: white;
    padding: 16px 24px;
    height: 80px;
    background: var(--header-bg);
    position: sticky;
    top:0px;
    display: flex;
    align-items: center;
    transition: transform 0.3s ease-out;
    z-index:1;
  }

  .scroll-down{
    transform: translateY(-100%);
  }

  header.dropdown {
    z-index: 2;
  }

  .width-clamper {
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .nav-option {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }

  .logo {
    font-size: 22px;
    font-family: sofia-pro, sans-serif;
    font-weight: 600;
    font-style: normal;
    text-decoration: none;
    color: var(--darkgrey);
  }

  /* Dropdown content (hidden by default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
    width: 100%;
    left: 0;
    top: 100%;
    box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.05);
    z-index: 1;
    padding-bottom: 24px;
  }

  .dropdown-content.show {
    background-color: white;
    display: block;
  }

  .project-tiles {
    display: grid;
    grid-template-columns: 0.25fr 0.25fr 0.25fr 0.25fr;
    gap: 16px;
  }

  .nav-item a,
  .nav-item button {
    font: inherit;
    background-color: transparent;
    padding: 0;
    margin: 0;
    border: 0;
    cursor: pointer;
    border-block-end: 3px solid var(--border-color, transparent);
    color: var(--darkgrey);
    display: inline-block;
    padding: 0.5rem 0.1rem;
    text-decoration: none;
  }

  .nav-item a:where(:hover, :focus) {
    --border-color: var(--darkgrey);;
  }
  .nav-item button:where(:hover, :focus) {
    --border-color: var(--darkgrey);
  }
  @media (max-width: 650px) {
    .project-tiles {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
