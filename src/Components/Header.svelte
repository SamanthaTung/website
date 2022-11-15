<script>
  // @ts-nocheck

  import SquareTile from "../Components/SquareTile.svelte";
  /** @type {HTMLElement} */
  let headerEl;

  let dropdownOpen = false;
</script>

<svelte:window
  on:click={(e) => {
    if (headerEl && (headerEl.contains(e.target) || e.target === headerEl)) {
      // do nothing
    } else {
      dropdownOpen = false;
    }
  }}
/>

<header class:dropdown={dropdownOpen} bind:this={headerEl}>
  <div class="width-clamper">
    <a href="/" class="logo"> Sam Tung</a>
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
        <a href="./about"> About</a>
      </h3>
    </div>
  </div>
  <div class="dropdown-content" class:show={dropdownOpen}>
    <div class=" content-of-page">
      <div
        class="project-tiles"
        on:click={() => {
          dropdownOpen = false;
        }}
      >
        <a href="/reverse">
          <SquareTile
            title="Reverse"
            description="Package-free groceries delivery service for time poor users"
            badge="Student"
          />
        </a>
        <SquareTile
          title="Pulsair"
          description="Air management platform for construction workers"
          badge="Student"
        />
        <SquareTile
          title="Bubble"
          description="Remote healthcare monitoring platform for health workers"
          badge="Professional"
        />
        <SquareTile
          title="Coin Rivet"
          description="Crypto currency investment platform & wallet for beginners"
          badge="Professional"
        />
      </div>
    </div>
  </div>
</header>

<style>
  header {
    --header-bg: var(--gray-1);
    padding: 16px 24px;
    height: 80px;
    background: var(--header-bg);
    position: relative;
    display: flex;
    align-items: center;
  }
  header.dropdown {
    --header-bg: #f9f9f9;
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
    color: black;
  }

  /* Dropdown content (hidden by default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    width: 100%;
    left: 0;
    top: 100%;
    box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.05);
    z-index: 1;
    padding-bottom: 24px;
  }

  .dropdown-content.show {
    background-color: #f9f9f9;
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
    color: black;
    display: inline-block;
    padding: 0.5rem 0.1rem;
    text-decoration: none;
  }

  .nav-item a:where(:hover, :focus) {
    --border-color: black;
  }
  .nav-item button:where(:hover, :focus) {
    --border-color: black;
  }
</style>
