<script>
  import Image from "../../Components/Image.svelte";
  import Hero from "../../Components/Hero.svelte";
  import TwoColumn from "../../Components/TwoColumn.svelte";
  import MiniImageContainer from "../../Components/MiniImageContainer.svelte";
  import MiniImage from "../../Components/MiniImage.svelte";

  import NextProject from "../../Components/NextProject.svelte";
  // import awardIcons from '../../../static/Awards Icons/index'
</script>

<svelte:head>
  <title>Reverse</title>
</svelte:head>

<Hero
  imageSrc="ReversePhotos/reverse.png"
  title="Reverse"
  description="Convenient package-free groceries delivery service for time-poor users. Smart containers and trackers made package-free delivery of more variety of food possible and efficient."
  backgroundColor="#A5D0E1"
  awardImages={[
    "/AwardIcons/GDDS.png",
    "/AwardIcons/ICON.png",
    "/AwardIcons/IXDA.png",
    "/AwardIcons/ND.png",
    "/AwardIcons/UXDA.png",
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
    <Image
      title="Plastic packaging waste"
      type="column"
      src="/ReversePhotos/Problem1.png"
    >
      <ul>
        <li>
          42% of plastic production is used for single-use plastic packaging and
          over 80% of them are not being recycled.
        </li>
        <li>
          Plastic is poisonous to the environment, ecology, animal, and us
        </li>
        <li>
          Recycling is not the ultimate solution as waste resources and
          pollution in the process are still harmful
        </li>
      </ul>
    </Image>
    <Image
      title="The package-free shop is inconvenient"
      type="column"
      src="/ReversePhotos/Problem2.png"
    >
      <ul>
        <li>
          It requires too much planning - bringing containers and portion
          planning ahead of heading to the shop
        </li>
        <li>
          Laborious process within the store: refill your containers while not
          spilling, weigh, take note of product type & price, and pay
        </li>
        <li class="arrow">
          Opportunity to make refilling and paying in package-free shoppping
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
      <h3>This is the final year design project for my degree</h3>
      <ul>
        <li>
          Student project with the freedom to choose a topic that you are
          interested in
        </li>
        <li>Duration: 6 months</li>
        <li>
          One-man project with assistance from the supervisor and lecturers
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

  <Image
    type="row"
    title="Understanding user's need for convenience through desk and user research"
    src="/ReversePhotos/HowIGotThere1.png"
  >
    <ul>
      <li>
        Geolocation limitations: users don’t go to package-free shops frequently
        as there aren't any near where they live
      </li>
      <li class="arrow">
        Opportunity to make package free shops more accessible to them
      </li>
      <li>
        People care about the environment to an extent: they will not drive for
        miles or pay a lot more for more sustainable products
      </li>
      <li class="arrow">
        How might we make package-free shopping more convenient, accessible, and
        affordable for busy users, while cost-effective to run?
      </li>
    </ul>
  </Image>

  <Image
    type="row"
    title="Understanding the business challenges through expert interviews & desk research"
    src="https://media4.giphy.com/media/gM5rrNKbkpTUsnS0Gz/giphy.webp"
  >
    <ul>
      <li>
        Reverse logistics limitations: the current operation is labour intensive
        and requires extra footprint within a shop to store used containers
      </li>
      <li>
        The current non package-free process allows automated handling which
        saves the company money
      </li>
      <li class="arrow">
        Opportunity to enable automated handling to save labour and storage cost
      </li>
    </ul>
  </Image>
  <Image
    type="row"
    title="Understanding the technical challenges through desk research & expert Interviews"
    src="/ReversePhotos/HowIGotThere2.png"
  >
    <ul>
      <li>
        Perishable goods have limited shelf-life: Plastic packaging allows MAP
        which extent product shelf life and prevents food waste
      </li>
      <li class="arrow">
        Opportunity to make providing perishable good plastic free possible
      </li>
    </ul>
  </Image>
</section>
<section class="content-of-page">
  <h2>4. How does it work</h2>
  <img src="/ReversePhotos/HowItWorks.svg" alt="" style="width:100%;" />
</section>
<section class="content-of-page">
  <h2>5. How it solves the problem</h2>
  <Image
    type="row-reverse"
    title="All-in-one platform maximising convenience"
    src="ReversePhotos/SolveProblem1.png"
  >
    <ul>
      <li>
        Reverse tackled the 2 enemies of sustainably living: customer’s need for
        convenience and its stigma of being unaffordable
      </li>
      <li>
        Instead of making multiple trips to the farmers market, butchers, and
        package free-shops, customers can now replace most of their weekly
        supermarket delivery with these pre-packed orders all through the app,
        and pick them up all at home
      </li>
    </ul>
  </Image>
  <Image
    type="row-reverse"
    title="Our containers enable a wider range of products to be sold package free"
    src="ReversePhotos/SolveProblem2.png"
  >
    <ul>
      <li>
        The container has air-tight seals and air valves that enable modified
        atmosphere packaging (MAP), and vents for breathability, keeping
        perishable produce fresh
      </li>
      <li>The e-ink screen on them provides use and storage guidelines</li>
    </ul>
  </Image>
  <Image
    type="row-reverse"
    title="Scalability makes the service affordable to more"
    src="ReversePhotos/SolveProblem3.png"
  >
    <ul>
      <li>
        Behind the scenes, the smart sensors and the tracking system enabled
        automated handling helping businesses scale up
      </li>
      <li>
        They allow the business to pack orders, update information and track
        their resources automatically, which saves cost on storage and makes it
        affordable to more
      </li>
    </ul>
  </Image>
  <Image
    type="row-reverse"
    title="Reverse Logistics - collecting used containers"
    src="ReversePhotos/SolveProblem4.png"
  >
    <ul>
      <li>Customers will receive notification reminders to return container</li>
      <li>
        Alongside the tracker on the app, reward system and impact visualisation
        via the app also help educate the users on their impact and keep them
        engaged
      </li>
    </ul>
  </Image>
</section>
<section class="content-of-page">
  <h2>6. Challenge</h2>
  <TwoColumn>
    <Image
      title="Remote testing"
      type="column"
      src="ReversePhotos/Challenge1.png"
    >
      <p>
        In-person testing was out of bounds during the pandemic. To work around
        that, instead of delivering containers to participants door steps in
        person, I created a storyboard with the re-enacted scenarios and
        captured participants’ feedback through zoom
      </p>
      <br />
      <p>
        Although remote testing limits the participant’s immersion in the
        concept, showing them the bigger picture through storyboard provides me
        with more comprehensive feedback
      </p>
    </Image>
    <Image
      title="Didn't get many responses from shop owners"
      type="column"
      src="ReversePhotos/Challenge2.png"
    >
      <p>
        Unfortunately during the pandemic when every shop owner is busy adapting
        to people’s new way of shopping, I didn’t get many responses from
        interview requests. Hence, the project lacks practical operational
        insights from shop owners who are running the business
      </p>
      <br />
      <p>
        However, to make up for that constraint, I interviewed academics that
        have years of industry knowledge which gave me in-depth insights that
        are instrumental to the project
      </p>
    </Image>
  </TwoColumn>
</section>
<section class="content-of-page">
  <h2>7. Impact</h2>
  <MiniImageContainer>
    <MiniImage src="/ReversePhotos/Impact1.svg" title="Customers"
      >Empowered to dollar vote and push for systematic change</MiniImage
    >
    <MiniImage src="/ReversePhotos/Impact2.svg" title="Service providers"
      >Manage resources effectively and save costs in the longer term</MiniImage
    >
    <MiniImage src="/ReversePhotos/Impact3.svg" title="Product providers"
      >Better understand shoppers' behaviours and tailor products around demand</MiniImage
    >
    <MiniImage src="/ReversePhotos/Impact4.svg" title="Industry & government"
      >Make better products and policies to meet the rising demand for plastic
      waste reduction</MiniImage
    >
  </MiniImageContainer>
</section>

<section class="content-of-page">
  <h2>8. Learnings</h2>
  <TwoColumn>
    <div>
      <h3>Let the user's needs lead</h3>
      <li>
        The different elements in the project keep pivoting based on user
        feedback. Thanks to all the iterations, the concept is getting closer to
        the user's needs for convenience
      </li>
    </div>
    <div>
      <h3>Experts give you more in-depth insights</h3>
      <li>
        Reaching out to and interviewing experts helped me understand the
        existing challenges in the real world and innovate from that
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
        Clarifying ambiguity: due to the flexible nature of the project, a clear
        timeline and project planning are required to deliver all the different
        elements: tangible product, digital interface, and the service
        blueprint, in this project
      </li>
    </div>
    <div>
      <h3>System thinking</h3>
      <li>
        This project sparks my interest in looking at the bigger picture and
        understanding the context when designing
      </li>
      <li>
        System thinking and service design are crucial to designing for a
        circular economy or sustainability, which I believe is the only way
        forward
      </li>
    </div>
  </TwoColumn>
</section>
<section class="content-of-page no-border">
  <h2>See it in action</h2>
  <div class="video-ratio-container">
    <iframe
      class="video"
      width="1144"
      height="644"
      src="https://www.youtube.com/embed/RvIgmDaMAGU"
      title="Reverse"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    />
  </div>
</section>

<NextProject
  title="Pulsair"
  description="Air management platform for construction workers"
  backgroundColor="#FDD88A"
  link="/pulsair"
/>

<style>
  .content-of-page {
    border-style: none none solid none;
    border-width: 1px;
    border-color: var(--gray-2);
  }
  .video-ratio-container {
    height: auto;
    width: 100%;
    padding-top: calc(100% * (9 / 16));
    position: relative;
  }
  .video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .content-of-page.no-border {
    border: 0;
  }
</style>
