<script>
  import Image from "../../Components/Image.svelte";
  import Hero from "../../Components/Hero.svelte";
  import TwoColumn from "../../Components/TwoColumn.svelte";
</script>

<Hero
  imageSrc="/reverse.png"
  title="Reverse"
  description="Convenient package-free groceries delivery service for time poor users.
Smart containers and trackers made package free delivery of more variety of
food possible and efficiently."
  awards={[
    "UX Design Award",
    "IxDA",
    "New Designers",
    "Loughborough Enterprise",
  ]}
  skills={[
    "User Research",
    "Ideation",
    "Service Design",
    "Experience prototyping",
    "UX",
    "UI",
  ]}
/>
<section class="content-of-page">
  <h2>1. Problem</h2>
  <TwoColumn>
    <Image title="Plastic packaging waste" type="column">
      <ul>
        <li>
          42% of plastic production is used for single use plastic packaging and
          over 80% of them are not being recycled.
        </li>
        <li>Plastic is poisonous to enviroment, ecology, animal and us</li>
        <li>
          Recycling is not the ultimate solution as waste resources and
          pollution in the process is still harmful
        </li>
      </ul>
    </Image>
    <Image title="Package-free shop is inconvenient" type="column">
      <ul>
        <li>
          It require too much planning - bringing containers and portion
          planning ahead of heading to the shop
        </li>
        <li>
          Labourious process within the store: refill your containers while not
          spilling, weight, take note of product type & price, and pay
        </li>
        <li class="arrow">
          Opportunity to make refilling and paying in package free shoppping
          easier
        </li>
      </ul>
    </Image>
  </TwoColumn>
</section>
<section class="content-of-page">
  <h2>2. Background &amp; Role</h2>
  <TwoColumn>
    <div class="h3-body">
      <h3>This is the final year design project my degree</h3>
      <ul>
        <li>
          Student project with freedom to choose topic that you are interested
          in
        </li>
        <li>Duration: 6 months</li>
        <li>
          One man project with assistance from project supervisor and lecturers
        </li>
      </ul>
    </div>
    <div class="h3-body">
      <h3>My role</h3>
      <ul>
        <li>Project manager</li>
        <li>Researchers & Interview facilitator</li>
        <li>Product, UX, UI, Service designer</li>
      </ul>
    </div>
  </TwoColumn>
</section>
<section class="content-of-page">
  <h2>3. How I got to the solution</h2>
  <h3>Understanding why it is not convenient for the users</h3>
  <Image type="row" title="Desk research & User Interviews" src="/reverse.png">
    <ul>
      <li>
        Geolocation limitations: users doesn’t go frequently as there’s not
        package-free shops near where they live
      </li>
      <li class="arrow">
        Opportunity to make package free shops more accessible to them
      </li>
      <li>
        People care about the environment to an extend: they will not drive for
        miles or pay a lot more for more sustainable products
      </li>
      <li class="arrow">
        How might we make package-free shopping more convenient, accessible, and
        affordable for the busy users, while cost-effective to run?
      </li>
    </ul>
  </Image>
</section>
<svelte:head>
  <style>
    body {
      --header-bg: #6da5bc;
    }
  </style>
</svelte:head>
