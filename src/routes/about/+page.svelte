<script>
    import Header from "../../Components/Header.svelte";
    import downloadIcon from "../../Icons/Download.svg";
    import mailIcon from "../../Icons/Mail.svg";
    import linkIcon from "../../Icons/Link.svg";
    import Image from "../../Components/Image.svelte";
</script>

<Header />

<div class="content-of-page">
    <div class="hero">
        <div class="hero-image">
            <p class="about-image-text">Hover to see more</p>
        </div>
        <div class="hero-text">
            <h1>Heya, nice to e-meet you!</h1>

            <h3>
                I am a UX designers who enjoy thinking about the big picture,
                unpacking problems and framing opportunities. I am a strong
                believer of using design thinking to improve people&apos;s lives
                and their environment.
                <br />
                <br />
                When I’m not staring at my laptop, I love to go near waters or go
                for food with friends and have a good time!
            </h3>
            <div class="button">
                <img src={downloadIcon} class="icons" alt="download icon" />
                <h3 class="button-text">Checkout my CV</h3>
            </div>
        </div>
    </div>

    <h2>Experience</h2>
    <div class="experience">
        <div class="experience-image" />
        <div class="experience-text">
            <div class="title">
                <h3>UX Connections / UX Consultants</h3>
                <p>2021 - Present</p>
            </div>

            <ul>
                <li>
                    <span
                        >Do: User research, User journeys, WF, project
                        management, UT, collaboration with and handover to
                        developers
                    </span>
                </li>
                <li>
                    <span
                        >Worked for various clients: RAPP, Ralph Lauren, PayPal,
                        Mulberry, Ericssons</span
                    >
                </li>
                <li>
                    <span>
                        Learnings: Project management, User testing, User
                        research, Wireframings and prototyping</span
                    >
                </li>
            </ul>
        </div>
    </div>
    
    <div class="experience">
        <div class="experience-image" />
        <div class="experience-text">
            <div class="title">
                <h3>Shark Ninja UK / Human centred Intern</h3>
                <p>2019 - 2020</p>
            </div>

            <ul>
                <li>
                    <span
                        >Do: User research, Ideation sessions, Physical product prototyping, 3D CAD & renderings
                    </span>
                </li>
                <li>
                    <span
                        >Learnings: Human centred design processes, facilitate brainstormings, rapid prototyping</span
                    >
                </li>
                <li>
                    <span>
                        What I wanted to do next: Products with multiple touch points, focus on users needs, sustainable manufacturing</span
                    >
                </li>
            </ul>
        </div>
    </div>

    <h2>What I find important in design</h2>
    <div class='two-column'>
        <Image title="Design the right thing right" description="
        belive spending time to understand problem, help organisation save money, resources to pivot in the later stage
bigger picture, also help designer/ engineer/ businessman focus on what really matters and put effort in the right place
        
        " ></Image>
        <Image title="Sustainability & Humanity centred design" description=""></Image>

    </div>
    <h2>A bit about me...</h2>
    <div class='two-column'>
        <div class='emoji text'>
            <h3>🇭🇰 From Hong Kong</h3>
            <p>I am born and raised in Hong Kong, came to study at Loughborough University and settled in London since I graduated. Experiencing these cultural differences also help me develope empathy and sensitivity</p>
        </div>
        <div class='emoji text'>
            <h3>✨ Try new things</h3>
            <p>I love trying new things, traveing and seeking new experience. Always searching for the magic moment that I want to create for the users of my products.</p>
        </div>
    </div>
    <div class='two-column'>
        <div class='emoji text'>
            <h3>💻 Made this website to learn code</h3>
            <p>Honestly, I didn’t grow up with programming and thought it’s never too late. I learn things best in practise so I set this goal to learn basic HTML, CSS and Javascript in the making of my personal site</p>
            <div class="button">
                <img src={mailIcon} class="icons" alt="mail icon" />
                <h3 class="button-text">Let me know what you think</h3>
            </div>
        </div>
        <div class='emoji text'>
            <h3>🍵 🛶️ Love matcha latte & kayaking</h3>
            <p>Sounds basic but I do enjoy having a matcha latte to wake up a bit. 
                When I get to be a bit more sluggish, I enjoy kayaking or just going in to the nature and come back feeling refreshed!</p>
        </div>
    </div>
    <h2>Award & Features</h2>
    <div class='two-column'>
        <div class='icon-h3'>
            <div class='title'>
                <img src={linkIcon} class="icons" alt="link icon" />
                <h3>IxDA 2022</h3>
                <p>Shortlisted</p>
            </div>
            

            <p>body</p>
        </div>
    </div>
</div>

<style>
    .hero {
        display: flex;
        flex-direction: row;
        padding-top: 48px;
    }
    .hero-image {
        background-color: var(--gray-1);
        height: 500px;
        width: 100%;
        position: relative;
    }
    .hero-text {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 24px;
        width: 100%;
    }

    .about-image-text {
        position: absolute;
        bottom: 24px;

        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
    }
    .icons {
        width: 24px;
        height: 24px;
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
        padding-bottom: 8px;
    }

    .experience-image {
        background-color: var(--gray-1);
        width: 260px;
        height: 140px;
        position: relative;
    }
    .experience {
        display: flex;
        flex-direction: row;
        gap: 32px;
        padding-bottom: 24px;
    }
    ul {
        list-style: none;
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
        content: "• ";
        font-size: 8pt;
    }
    .two-column{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
        padding-bottom: 24px;
    }
    @media (max-width: 750px) {
        .two-column {
            grid-template-columns: 1fr;
        }
    }
</style>
