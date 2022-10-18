<script>
    import Arrow from "svelte-carousel/src/components/Arrow/Arrow.svelte";


  import SquareTile from "../Components/SquareTile.svelte";
</script>

<header>
  <a href="." class="logo"> Sam Tung</a>
  <div class="nav-option">
    <div>
      <h3>
        <div class="dropdown">
          <a href="#"> Work</a>
          <div class="dropdown-content">
            <div class=" content-of-page">
              <div class="project-tiles">
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
        </div>
      </h3>
    </div>

    <h3>
      <a href="./about"> About</a>
    </h3>
  </div>
</header>

<style>
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
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
  }

  /* Dropdown content (hidden by default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    width: 100%;
    left: 0;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    background-color: #f9f9f9;
    display: block;
  }

  .project-tiles {
    display: grid;
    grid-template-columns: 0.25fr 0.25fr 0.25fr 0.25fr;
    gap: 16px;
  }

  a {
    border-block-end: 3px solid var(--border-color, transparent);
    color: black;
    display: inline-block;
    margin-block-end: 0.5rem;
    margin-inline-end: 0.5rem;
    padding: 0.5rem 0.1rem;
    text-decoration: none;
  }

  a:where(:hover, :focus) {
    --border-color: black;
  }
</style>
