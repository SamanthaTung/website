<script>
  import Image from "../../Components/Image.svelte";
  import Hero from "../../Components/Hero.svelte";
  import TwoColumn from "../../Components/TwoColumn.svelte";
  import MiniImageContainer from "../../Components/MiniImageContainer.svelte";
  import MiniImage from "../../Components/MiniImage.svelte";
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
    <div>
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
    <div>
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
  <h3>Underestanding the business challenges</h3>
  <Image
    type="row"
    title="Expert interviews & more desk research"
    src="/reverse.png"
  >
    <ul>
      <li>
        Reverse logistics limitations: the current operation is labour intensive
        nad requires extra footprint within a shop to store used containers and
        global supply chain require transporting used containers for long
        distances
      </li>
      <li>
        Current non package-free process allows automated handling which saves
        company money
      </li>
      <li class="arrow">
        Opportunity to enable automated handling to save labour and storage cost
      </li>
    </ul>
  </Image>
  <h3>Understanding the technical challenges</h3>
  <Image
    type="row"
    title="Desk research & Expert Interviews"
    src="/reverse.png"
  >
    <ul>
      <li>
        Perishable goods have limited shelf-life: Plastic packaigning allows MAP
        which extent product shelf life and prevent foodwaste
      </li>
      <li class="arrow">
        Opportunity to make providing perishable good plastic free possible
      </li>
    </ul>
  </Image>
</section>

<section class="content-of-page">
  <h2>4. How it solves the problem</h2>
  <Image
    type="row-reverse"
    title="All-in-one platoform maximising convenience"
    src="/reverse.png"
  >
    <ul>
      <li>
        Reverse tackled the 2 enemies of sustainably living: customer’s need for
        convenience and its stigma of being unaffordable.
      </li>
      <li>
        Instead of making multiple trips to the farmers market, butchers, and
        package free-shops, customers can now replace most of their weekly
        supermarket delivery with these pre-packed orders all through the app,
        and pick up all at home.
      </li>
    </ul>
  </Image>
  <Image
    type="row-reverse"
    title="Our containers enable a wider range of products to be sold package free"
    src="/reverse.png"
  >
    <ul>
      <li>
        The container has air-tight seals and air valves that enable modified
        atmosphere packaging (MAP), vents for breathability, keeping perishable
        produce fresh.
      </li>
      <li>The e-ink screen on them provides use and storage guidelines.</li>
    </ul>
  </Image>
  <Image
    type="row-reverse"
    title="Scalability makes the service affordable to more"
    src="/reverse.png"
  >
    <ul>
      <li>
        Behind the scenes, the smart sensors and the tracking system enabled
        automated handling helping businesses scale up.
      </li>
      <li>
        They allow the business to pack orders, update information and track
        their resources automatically, which saves cost on storage and makes it
        affordable to more.
      </li>
    </ul>
  </Image>
  <Image
    type="row-reverse"
    title="Reverse Logistics - collecting used containers"
    src="/reverse.png"
  >
    <ul>
      <li>Customers will receive notification reminders when</li>
      <li>
        Alongside the tracker on the app, reward system and impact visualisation
        via the app also help educate the users on their impact and keep them
        engaged.
      </li>
    </ul>
  </Image>
</section>
<section class="content-of-page">
  <h2>5. Challenge</h2>
  <TwoColumn>
    <Image title="Remote testing" type="column">
      <p>
        In-person testing were out of bound during the pandemic. To work around
        that, instead of delivering containers to participants door steps in
        person, I created a story board with the re-enacted scenarios and
        captured participant’s feedback through zoom.
      </p>
      <br />
      <p>
        Although remote testing limits the participant’s immersion in the
        concept, showing them the bigger picture through storyboard provides me
        with more comprehensive feedback.
      </p>
    </Image>
    <Image title="Didn't get much responses from shop owners" type="column">
      <p>
        Unfortunately during the pademic when every shop owner are busy adapting
        to people’s new way of shopping, I didn’t get much responses from
        interview request. Hence, the project lacks practical operational
        insights from shop owners who’s running the business.
      </p>
      <br />
      <p>
        However, to make up for that constraint, I interviewed academics that
        have years of industry knowledge which gave me indepth insights that are
        instrumental to the project.
      </p>
    </Image>
  </TwoColumn>
</section>
<section class="content-of-page">
  <h2>6. Impact</h2>
  <MiniImageContainer>
    <MiniImage src="" title="Customers"
      >Empowered to dollar vote and push for systematic change</MiniImage
    >
    <MiniImage src="" title="Customers"
      >Manage resources effectivelv and save cost in the longer term</MiniImage
    >
    <MiniImage src="" title="Customers"
      >Better understand shopping behaviours and tailor product around demand</MiniImage
    >
    <MiniImage src="" title="Customers"
      >Make better products and policies to meet the rising demand for plastic
      waste reduction</MiniImage
    >
  </MiniImageContainer>
</section>

<section class="content-of-page">
  <TwoColumn>
    <div>
      <h3>Let user needs lead</h3>
      <li>
        The different elements in the project keep pivoting base on user
        feedback. Thanks to all the iteration, the concept is getting closer to
        the user needs for convenience.
      </li>
    </div>
    <div>
      <h3>Expert gives you more indepth insights</h3>
      <li>
        Reaching out to and interviewing expert helped me understand the
        existing challenges in the real-world and innovate from that
      </li>
      <li>
        Made me understand the importance designer’s role to draw out insights
        from different stakeholders and connect the dots
      </li>
    </div>
  </TwoColumn>
  <TwoColumn>
    <div>
      <h3>Project managing</h3>
      <li>
        Clarifying ambiguity: due to the flexible nature of the project, clear
        timeline and project project planing is required to deliver all the
        different elements: tangible prouduct, digital interface and the service
        blueprint, in this project.
      </li>
    </div>
    <div>
      <h3>System thinking</h3>
      <li>
        This and the other student project spark my interest in looking at the
        bigger picture and understanding the context when designing.
      </li>
      <li>
        System thinking and service design is crucial to designing for circular
        economy or sustainability, which I believe is the only way forward.
      </li>
    </div>
  </TwoColumn>
</section>
<svelte:head>
  <style>
    body {
      --header-bg: #6da5bc;
    }
  </style>
</svelte:head>
