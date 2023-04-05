<script>
  import Image from "../../Components/Image.svelte";
  import Hero from "../../Components/Hero.svelte";
  import TwoColumn from "../../Components/TwoColumn.svelte";
  import MiniImageContainer from "../../Components/MiniImageContainer.svelte";
  import MiniImage from "../../Components/MiniImage.svelte";
  import UnderlinedCta from "../../Components/UnderlinedCTA.svelte";
  import rightArrow from "../../Icons/Arrowright.svg";
  // import awardIcons from '../../../static/Awards Icons/index'
</script>

<Hero
  imageSrc="/PulsairPhotos/pulsair.png"
  title="Pulsair"
  description="Air management system for construction workers, the company, the community, and governments. Using air quality data collected by the individual to benefit the wider community."
  backgroundColor="#FDD88A"
  awardImages={["/AwardIcons/IXDASDC.svg", "/AwardIcons/RSA SDA.png"]}
  skills={[
    "User Research",
    "Ideation",
    "Service Design",
    "Concept testing",
    "System thinking",
    "Story telling",
  ]}
  heroImageNoMargin={true}
/>
<section class="content-of-page">
  <h2>1. Problem</h2>
  <TwoColumn>
    <Image
      title="Air pollution: The Invisible Killer"
      type="column"
      src="/PulsairPhotos/Problem1.png"
    >
      <ul>
        <li>
          Air pollution’s impact on health is often invisible at first. However,
          prolonged exposure to air pollutants like PM2.5 and NO2 increases the
          risk of getting fatal heart disease and lung cancer. Very often when
          people notice the symptoms, it’s already too late.
        </li>
        <li class="arrow">
          Opportunity to make the invisible visible: How might we visualise the
          invisible health impact of air pollution
        </li>
      </ul>
    </Image>
    <Image
      title="Vulnerable communities are more at risk"
      type="column"
      src="/PulsairPhotos/Problem2.png"
    >
      <ul>
        <li>
          Exposure is linked to the social-economical level: families with lower
          income are forced to live or work in highly air-polluted areas.
        </li>
        <li>
          These vulnerable communities prioritise putting food on the table over
          preventing the invisible health impact of air pollution.
        </li>
        <li>
          What they need is not a high-end, feature-rich new portable air
          purifier but an accessible way to protect themselves
        </li>
        <li class="arrow">
          Opportunity help a target group that has high exposure and low
          awareness which is why we chose to serve construction worker who works
          outdoor
        </li>
      </ul>
    </Image>
  </TwoColumn>
</section>
<section class="content-of-page">
  <h2>2. Background &amp; Role</h2>
  <TwoColumn>
    <div>
      <h3>A student group project for IxDA SDC</h3>
      <ul>
        <li>
          The brief we got was: How can we use individual data for the public
          good
        </li>
        <li>
          Team of 3 in the East and West coast of the USA, UK across 3 time
          zones
        </li>
        <li>The duration of the project was 4 weeks</li>
        <li>We were lucky to have 2 experienced designers as mentors</li>
      </ul>
    </div>
    <div>
      <h3>My role</h3>
      <ul>
        <li>Researchers & Interview facilitator</li>
        <li>3D Product and interaction designer</li>
        <li>Storyteller</li>
      </ul>
    </div>
  </TwoColumn>
</section>
<section class="content-of-page">
  <h2>3. How I got to the solution</h2>

  <Image
    type="row"
    title="Discovering there’s low awareness among individual workers through user interviews"
    src="/PulsairPhotos/HowIGotThere1.png"
  >
    <ul>
      <li>
        Construction workers know that toxic fumes are bad, but they don't know
        just how bad they can be: fatal heart disease, lung disease, and cancer
        later in life
      </li>
      <li>
        They are wary of safety on-site because they can see the immediate
        impact of an accident. However, when it comes to health impacts, they
        often opt for comfort than wearing a mask
      </li>
      <li class="arrow">
        Opportunity to increase awareness through impactful training
      </li>
    </ul>
  </Image>

  <Image
    type="row"
    title="Realising there’re low incentives for companies to protect the workers through desk research"
    src="/PulsairPhotos/HowIGotThere2.svg"
  >
    <ul>
      <li>
        Because the health impacts of air pollution appear after decades,
        construction workers struggle to provide evidence that relates their
        current symptoms to their past jobs
      </li>
      <li>
        This means companies can get away with not protecting their workers from
        air pollution without paying the cost of worker’s compensation
      </li>
      <li class="arrow">
        Opportunity to incentivise clean air: How might we encourage the
        companies to protect their workers and prevent pollution
      </li>
    </ul>
  </Image>
  <Image
    type="row"
    title="Spotting the gap in policy at the government level "
    src="/PulsairPhotos/HowIGotThere3.svg"
  >
    <ul>
      <li>
        EU policies penalise companies for exceeding the levels - which creates
        more incentive for companies to start taking care of their workers than
        the US protection law
      </li>
      <li>
        Although there are growing trends in mandatory disclosure of site Air
        Quality Index (AQI), the policies still didn’t address improvements that
        an individual can make
      </li>
      <li class="arrow">Opportunity to connect data to individual’s action</li>
    </ul>
  </Image>
  <Image
    type="row"
    title="Getting feedback on concepts from workers, business owners, and experts"
    src="/PulsairPhotos/HowIGotThere4.png"
  >
    <p>
      Through ideation, we came up with 3 concepts: Automated mister, VR
      training, and Personal sensor
    </p>

    <ul>
      <li>
        For the auto mister, experts feedback that its application is limited as
        the cancer-causing particles like PM2.5 are too small to be targeted by
        it
      </li>
      <li>
        The current training does need an upgrade, currently taking mc questions
        with pen and paper - but how might we make the training related to their
        day-to-day work and make them memorable
      </li>
    </ul>
  </Image>
</section>
<section class="content-of-page">
  <h2>4. How does it work</h2>
  <img src="/PulsairPhotos/HowItWorks.svg" alt="" style="width:100%;" />
</section>
<section class="content-of-page">
  <h2>5. How it solves the problem</h2>
  <Image
    type="row-reverse"
    title="Incorporate air quality tracker into the routine to encourage behaviour change"
    src="PulsairPhotos/SolveProblem1.png"
  >
    <ul>
      <li>
        After carrying the air monitor sensor throughout work, the workers will
        receive an overview of the day including steps, pollution, and hours
        worked
      </li>
      <li>
        They will also receive customised pollution training specific to their
        work environment
      </li>
    </ul>
  </Image>
  <Image
    type="row-reverse"
    title="The company can now locate the root causes"
    src="PulsairPhotos/SolveProblem2.png"
  >
    <ul>
      <li>
        With access to individual data shared by the workers, the company
        through the dashboard can now see the hyper-local air quality map and
        can identify the source of pollution
      </li>
      <li>
        This allows them to locate spills, fix leaks, and mend broken machines
      </li>
    </ul>
  </Image>
  <Image
    type="row-reverse"
    title="Transparency for the community data stream for the government"
    src="PulsairPhotos/SolveProblem3.png"
  >
    <ul>
      <li>
        Community members can scan the QR code outside of the site to check the
        AQI and receive lifestyle recommendations. They can plan their route
        around heavily impacted areas to prevent health impacts
      </li>
      <li>
        Governments can create better policies around air pollution. Pulsair
        helps them monitor and measure the effectiveness of their policies.
        Having access to the air quality data of other regions and countries,
        the government can also learn from other initiatives
      </li>
    </ul>
  </Image>
</section>
<section class="content-of-page">
  <h2>6. Challenge</h2>
  <TwoColumn>
    <Image
      title="Data privacy "
      type="column"
      src="PulsairPhotos/Challenge1.svg"
    >
      <p>
        We were challenged to think about how can we involve a wider community
        while protecting the worker’s data privacy. Through brainstorming, we
        decided to limit access to private data to different levels. Workers
        have full ownership of their data and can give consent to the company to
        access it. The community and the government will receive an average of
        the AQI and take action respectively
      </p>
    </Image>
    <Image
      title="Short time frame"
      type="column"
      src="PulsairPhotos/Challenge2.svg"
    >
      <p>
        Only having a month from receiving the brief to delivering the solution
        was a challenge. We learnt to find resources to help us save time and
        focus our effort on crafting an impactful solution, e.g. using
        low-fidelity sketches to communicate concepts and using illustrations in
        the short concept video
      </p>
    </Image>
  </TwoColumn>
</section>
<section class="content-of-page">
  <h2>7. Impact</h2>
  <MiniImageContainer>
    <MiniImage src="/PulsairPhotos/Impact1.svg" title="Workers">
      <li>Increase awareness & implement better protection practise</li>
      <li>Have access to insurance & worker compensation</li>
    </MiniImage>
    <MiniImage src="/PulsairPhotos/Impact2.svg" title="Company"
      ><li>Better compliance with regulation saving time & money long term</li>
      <li>Better protection & management of workforce</li></MiniImage
    >
    <MiniImage src="/PulsairPhotos/Impact3.svg" title="Product providers"
      ><li>Have access to real time air quality in the area</li>
      <li>Increased awareness</li></MiniImage
    >
    <MiniImage src="/PulsairPhotos/Impact4.svg" title="Government"
      ><li>Better measure progress on climate policy</li>
      <li>
        Create better policies by reviewing progress and learning from
        initiatives
      </li></MiniImage
    >
    <MiniImage src="/PulsairPhotos/Impact5.svg" title="Planet"
      ><li>
        More efficient use of fuel, slow down climate change and less pollution
      </li>
    </MiniImage>
  </MiniImageContainer>
</section>

<section class="content-of-page">
  <h2>8. Learning</h2>
  <TwoColumn>
    <div>
      <h3>Remote collaboration</h3>
      <p>
        As a team of 3 working across 3 time zones, project management is a
        challenge. Learning to scope the project and assign tasks based on each
        other’s strengths and constraints made us an effective team.
      </p>
    </div>
    <div>
      <h3>Add human aspect to storytelling</h3>
      <p>
        By adding characters to your narrative you can take the audience on a
        journey. It helps them to better empathise with the pain points you are
        addressing and understand your solution in context.
      </p>
    </div>
  </TwoColumn>
  <TwoColumn>
    <div>
      <h3>Defining target audience</h3>
      <p>
        We've learnt to design for the extreme users and identify where’s the
        gap in the market. By mapping out potential user across 2 axes:
        awareness and exposure, we chose to focus on construction workers, who
        has lower awareness and high exposure.
      </p>
    </div>
    <div>
      <h3>Reach out to experts</h3>
      <p>
        I understood designer’s role is not to be the expert but to reach out to
        different experts throughout the process: problem identification,
        ideation, feedback sessions, and understanding policies and technical
        limitations. You will be surprised how willing people are to help.
      </p>
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
      src="https://www.youtube.com/embed/Civ_66orM4E"
      title="IxDA Team 2 Pulsair"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    />
  </div>
</section>
<div class="link">
  <section class="content-of-page">
    <div class="title-button">
      <h3>Next up:</h3>
      <UnderlinedCta href="/reverse">
        <img src={rightArrow} class="icons" alt="arrow icon" />
        Next
      </UnderlinedCta>
    </div>

    <h2>Reverse</h2>
    <p>Package-free groceries delivery service for time poor users</p>
  </section>
</div>

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
  .link {
    background-color: #a5d0e1;
  }
  .link .content-of-page,
  .content-of-page.no-border {
    border: 0;
  }
  .title-button {
    display: flex;
    width: 100%;
    align-items: start;
    justify-content: space-between;
  }
</style>
