<script>
  import downloadIcon from "../../Icons/Download.svg";
  import mailIcon from "../../Icons/Mail.svg";
  import linkIcon from "../../Icons/Link.svg";
  import Image from "../../Components/Image.svelte";
  import TwoColumn from "../../Components/TwoColumn.svelte";
  import UnderlinedCta from "../../Components/UnderlinedCTA.svelte";
</script>

<section class="content-of-page">
  <div class="about">
    <div class="about-image">
      <!-- <p class="about-image-text">Hover to see more</p> -->
    </div>
    <div class="about-text">
      <h1>Heya, nice to e-meet you!</h1>

      <h3>
        I am a UX designer who enjoys thinking about the big picture, unpacking
        problems, and framing opportunities. I am a strong believer in using
        design thinking to improve people's lives and their environment.
        <br /><br />
        When I’m not staring at my laptop, I love to go near the waters or go for
        food with friends and have a good time!
      </h3>
      <!-- <UnderlinedCta >
        <img src={downloadIcon} class="icons" alt="download icon" />
        Checkout my CV</UnderlinedCta> -->
    </div>
  </div>
</section>
<section class="content-of-page">
  <h2>Experience</h2>
  <div class="experience">
    <div class="experience-image">
      <img src="/AboutMe/AboutMe3.png" alt="ux connections" />
    </div>

    <div class="experience-text">
      <div class="title">
        <h3>UX Connections / UX Consultants</h3>
        <p>2021 - Present</p>
      </div>

      <ul>
        <li>
          <span
            >Project discovery: Conduct user research and requirement gathering
            workshops, map out user journeys, define ways of working
          </span>
        </li>
        <li>
          <span
            >Project delivery: Create wireframes and prototypes for user
            testing, create high-fidelity UI designs along with the design
            system, and collaborate with developers to build the final product<span
            />
          </span>
        </li>
        <li>
          <span>
            Worked for various clients: RAPP, Ralph Lauren, PayPal, Mulberry,
            Ericsson</span
          >
        </li>
      </ul>
    </div>
  </div>
  <div class="experience">
    <div class="experience-image">
      <img src="/AboutMe/AboutMe4.png" alt="ux connections" />
    </div>
    <div class="experience-text">
      <div class="title">
        <h3>Shark Ninja UK / Human centred Intern</h3>
        <p>2019 - 2020</p>
      </div>

      <ul>
        <li>
          <span
            >Conduct user research and ideation sessions, Create rapid
            prototypes, 3D CAD & renderings
          </span>
        </li>
        <li>
          <span
            >Learn to apply the design process in real-world contexts and create
            realistic project plans
          </span>
        </li>
        <li>
          <span>
            What I wanted to do next: Design products with multiple touchpoints
            that address a wider range of users' needs, all while sustainably
            manufactured</span
          >
        </li>
      </ul>
    </div>
  </div>
</section>
<section class="content-of-page">
  <h2>What I find important in design</h2>
  <TwoColumn>
    <Image
      title="Design the right thing right"
      type="column"
      src="/AboutMe/AboutMe5.svg"
    >
      <ul>
        <li>
          I believe spending time to understand the root cause of the problem
          helps organisations save money and resources in the long-term
        </li>
        <li>
          It also allows the designer/ engineer/ businessman to see the bigger
          picture and put in the effort to solve the right problem
        </li>
      </ul>
    </Image>
    <Image title="Sustainability" type="column" src="/AboutMe/AboutMe6.svg">
      <ul>
        <li>
          Related to the last point, by focusing our resources on the right
          problem area, we reduce waste that way
        </li>
        <li>
          Sustainability is also not just about the environment, but also
          socially how can we help vulnerable groups live an independent, happy,
          and sustainable life
        </li>
      </ul>
    </Image>
  </TwoColumn>
</section>
<section class="content-of-page">
  <h2>More about me...</h2>
  <TwoColumn>
    <div class="emoji text">
      <h3>🇭🇰 From Hong Kong</h3>
      <p>
        I am born and raised in Hong Kong, came to study at Loughborough
        University, and settled in London since I graduated. Experiencing these
        cultural differences also help me develop empathy and sensitivity.
      </p>
    </div>
    <div class="emoji text">
      <h3>✨ Try new things</h3>
      <p>
        I love trying new things, traveling, and seeking new experiences. I'm
        always searching for the magic moment that I want to create for the
        users of my products.
      </p>
    </div>
  </TwoColumn>
  <TwoColumn>
    <div class="emoji text">
      <h3>💻 Made this website to learn to code</h3>
      <p>
        I didn’t grow up passionate about tech and programming but thought it
        was never too late. I learn things best in practice, so I set this goal
        to learn basic HTML, CSS, and Javascript in the making of my website
      </p>
    </div>
    <div class="emoji text">
      <h3>🍵 🛶️ Love matcha latte & kayaking</h3>
      <p>
        Sounds basic but I do enjoy having a matcha latte to wake up a bit. When
        I get to be a bit more sluggish, I enjoy kayaking or just going into
        nature and coming back feeling refreshed!
      </p>
    </div>
  </TwoColumn>
  <UnderlinedCta href="mailto:samantha.tungling+websitemessage@gmail.com">
    <img alt="mail icon" src={mailIcon} />
    Let me know what you think
  </UnderlinedCta>
</section>
<section class="content-of-page" n>
  <h2>Award & Features</h2>

  <TwoColumn>
    <a
      class="icon-h3"
      href="https://awards.ixda.org/entry/2022/reverse-a-hassle-free-and-package-free-groceries-delivery-service/"
      target="_blank"
    >
      <div class="title">
        <img src={linkIcon} class="icons" alt="link icon" />
        <h3>IxDA 2022</h3>
      </div>
      <p>Shortlisted</p>
    </a>
    <a
      class="icon-h3"
      href="https://ux-design-awards.com/winners/2022-1-125-reverse-a-hassle-free-package-free-groceries-delivery-service"
      target="_blank"
    >
      <div class="title">
        <img src={linkIcon} class="icons" alt="link icon" />
        <h3>UX Design Award 2022</h3>
      </div>
      <p>Nominated</p>
    </a>
  </TwoColumn>
  <TwoColumn>
    <a
      class="icon-h3"
      href="https://www.thersa.org/student-design-awards/winners/2020-21/right-to-breathe"
      target="_blank"
    >
      <div class="title">
        <img src={linkIcon} class="icons" alt="link icon" />
        <h3>RSA Student Design Award 2022</h3>
      </div>
      <p>Winner</p>
    </a>
    <a
      class="icon-h3"
      href="https://www.newdesigners.com/awards/dca-packaging-futures-award/"
      target="_blank"
    >
      <div class="title">
        <img src={linkIcon} class="icons" alt="link icon" />
        <h3>New Designer 2022</h3>
      </div>
      <p>DCA Packaging Futures Award Winner</p>
    </a>
  </TwoColumn>
  <TwoColumn>
    <a
      class="icon-h3"
      href="https://www.lboro.ac.uk/alumni/news/2021/september/four-graduates-shortlisted-for-awards/#:~:text=Samantha"
      target="_blank"
    >
      <div class="title">
        <img src={linkIcon} class="icons" alt="link icon" />
        <h3>Global Design Graduate Show 2022</h3>
      </div>
      <p>Shortlisted</p>
    </a>
    <a
      class="icon-h3"
      href="https://online.fliphtml5.com/byhn/vgbv/#p=116"
      target="_blank"
    >
      <div class="title">
        <img src={linkIcon} class="icons" alt="link icon" />
        <h3>Icons Magazine Feature (Autumn 2021)</h3>
      </div>
      <p>UK’s most promising design graduates</p>
    </a>
  </TwoColumn>
  <TwoColumn>
    <a
      class="icon-h3"
      href="https://www.sdc.ixda.org/2021-finalists"
      target="_blank"
    >
      <div class="title">
        <img src={linkIcon} class="icons" alt="link icon" />
        <h3>IxDA 2021 Student Design Charette</h3>
      </div>
      <p>Champion</p>
    </a>
  </TwoColumn>
</section>

<style>
  .about {
    display: flex;
    flex-direction: row;
    gap: 24px;
    padding-top: 36px;
  }
  .about-image {
    background: url(/AboutMe/AboutMe1.png) no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    position: relative;
  }
  .about-image:hover {
    background: url(/AboutMe/AboutMe2.png) no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    position: relative;
  }

  @media (max-width: 700px) {
    .about-image {
      width: 100%;
      min-height: 300px;
      position: relative;
    }
    .about {
      padding-top: unset;
      flex-direction: column;
    }
  }
  .about-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }

  .about-image-text {
    position: absolute;
    bottom: 24px;
    right: 24px;

    margin-left: auto;
    margin-right: auto;

    text-align: center;
  }
  .icons {
    width: 24px;
    height: 24px;
  }
  .icon-h3 {
    text-decoration: unset;
    color: unset;
  }
  .button-text {
    line-height: 100%;
  }
  .button {
    display: flex;
    align-items: center;
    gap: 8px;
    border-bottom: 2px solid black;
    width: fit-content;
    padding: 8px 0px;
  }

  .title {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 16px;
  }

  .experience-image {
    display: none;
    background-color: var(--gray-1);
    width: 260px;
    height: 140px;
    position: relative;
  }
  .experience {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 32px;
    padding-bottom: 24px;
  }
  @media (min-width: 700px) {
    .experience-image {
      display: block;
    }
  }
  ul {
    /* list-style: none; */
    list-style-position: outside;
  }

  li span {
    position: relative;
    left: 8px;
    font-size: 16px;

    font-family: sofia-pro, sans-serif;
    font-weight: 300;
    font-style: normal;
  }

  ul li:before {
    /* content: "• "; */
    /* font-size: 8pt; */
  }
</style>
