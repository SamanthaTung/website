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
    <title>Coin Rivet</title>
</svelte:head>

<Hero
    imageSrc="CoinRivetPhotos/coinrivet.png"
    title="Coin Rivet"
    description="A cryptocurrency investment platform & wallet for beginners to keep track of their portfolio and make informed decisions when trading."
    backgroundColor="#B3D8C6"
    awardImages={["/AwardIcons/Best agency.png"]}
    skills={["User Research", "Wireframing", "UI Design", "Style Guides"]}
    heroImageNoMargin={true}
/>
<section class="content-of-page">
    <h2>1. Problem</h2>
    <TwoColumn>
        <Image
            src="/CoinRivetPhotos/Problem1.png"
            title="Difficult to track progress as a beginner"
            type="column"
        >
            <p>
                Because of the jargon, unfamiliar concepts, and inflexible
                interfaces, tracking the profit gains or losses gets confusing
                for beginners. There is an opportunity to simplify it for the
                users and hand-hold the users through onboarding.
            </p>
        </Image>
        <Image
            src="/CoinRivetPhotos/Problem2.png"
            title="Technical limitation"
            type="column"
        >
            <p>
                To use Coin Rivet, the users need to also sign in to a separate
                partner platform called Luxon Pay due to how they are set up. To
                overcome this potential barrier for the users, we need to make
                the experience as seamless as possible for the user.
            </p>
        </Image>
    </TwoColumn>
</section>
<section class="content-of-page">
    <h2>2. Background &amp; Role</h2>
    <TwoColumn>
        <div>
            <h3>Background</h3>
            <ul>
                <li>
                    Coin Rivet is a cryptocurrency start-up that along with
                    Luxon Pay supports international transfer
                </li>
                <li>
                    They had a basic platform but turned to us for usability
                    improvements
                </li>
            </ul>
        </div>
        <div>
            <h3>Role</h3>
            <p>
                We worked as a design team of 2 along with the project managers
                and product owner
            </p>
        </div>
    </TwoColumn>
</section>
<section class="content-of-page">
    <h2>3. How I got to the solution</h2>

    <Image
        type="row"
        title="UX Audit, competitor review & informal user interview to clarify the app structure"
        src="/CoinRivetPhotos/HowIGotThere1.png"
    >
        <p>
            To understand what’s industry standard, we started by looking at a
            bunch of competitors. We notice there are big opportunities for
            nurturing onboarding, comprehensive support, intuitive data
            visualisation, and simple actions. All these findings help us define
            the app’s navigation structure and the dashboard’s information
            architecture.
        </p>
    </Image>

    <Image
        type="row"
        title="Iterations of reviews to achieve minimal aesthetic yet informative interfaces"
        src="/CoinRivetPhotos/HowIGotThere2.png"
    >
        <p>
            There are many variables when displaying portfolio growth or
            transferring cryptocurrencies. To make the screens easy to
            understand and aesthetically pleasing, we needed to limit the
            overwhelming options while allowing users to be in control when
            using the product.
        </p>
    </Image>
    <Image
        type="row"
        title="Mapping out edge cases to streamline the onboarding process"
        src="/CoinRivetPhotos/HowIGotThere3.svg"
    >
        <p>
            Due to the multi-step integration with the partner platform Luxon
            Pay, there are some hoops that the users need to jump through before
            being able to invest in cryptocurrency or cash out. Mapping out all
            the possible scenarios help us make sure the users won’t get stuck
            at any point in the journey.
        </p>
    </Image>
</section>
<section class="content-of-page">
    <h2>4. How does it work</h2>
    <img src="/CoinRivetPhotos/HowItWorks.svg" alt="" style="width:100%;" />
</section>
<section class="content-of-page">
    <h2>5. How it solves the problem</h2>
    <Image
        type="row-reverse"
        title="The right level of details across the product"
        src="CoinRivetPhotos/SolveProblem1.svg"
    >
        <p>
            By only displaying information that is relevant to the user’s action
            at that point, we managed to keep the pages clean:
        </p>
        <ul>
            <li>
                For the dashboard, we kept the graphs under each of their
                investment listings and allowed users to view more details when
                needed.
            </li>
            <li>
                Throughout the trading processes, we also used clear units for
                fiat value and crypto value to help users make the informed
                decisions
            </li>
        </ul>
    </Image>
    <Image
        type="row-reverse"
        title="Clarified different states"
        src="CoinRivetPhotos/SolveProblem2.svg"
    >
        <p>
            We provided a clear title and a progress bar for the different
            stages in the onboarding process to explain why certain actions are
            not available to them. Sign posting and error messages are also used
            in any blockers that they face to indicate the next steps that they
            could take.
        </p>
    </Image>
</section>
<section class="content-of-page">
    <h2>6. Challenge</h2>
    <TwoColumn>
        <div>
            <h3>Some creative ideas are out of scope</h3>
            <p>
                We came up with ways to streamline the signup process and
                provide more support to the users but due to the tight timeline
                of launching an MVP, they can’t be implemented. They are
                recorded in the backlog and will be picked up again once the MVP
                is tested and revisited.
            </p>
        </div>
        <div>
            <h3>Missed opportunity for user research & testings</h3>
            <p>
                Due to the pressure to launch Beta soon, we didn’t get the
                chance to run structured user testing. Instead, we did short
                informal user interviews to understand the pain points and
                confusion they have in the cryptocurrency world.
            </p>
        </div>
    </TwoColumn>
</section>
<section class="content-of-page">
    <h2>7. Impact</h2>
    <MiniImageContainer>
        <MiniImage
            src="/CoinRivetPhotos/Impact1.svg"
            title="Developed and Launched"
            >Handed annotated wireframes over to the development team</MiniImage
        >
        <MiniImage
            src="/CoinRivetPhotos/Impact2.svg"
            title="100+ downloads on Android"
            >The app has picked up traction and is used by beginners</MiniImage
        >
        <MiniImage
            src="/CoinRivetPhotos/Impact3.svg"
            title="5* rated on the App Stores"
            >Users commented on the ease of use and efficiency</MiniImage
        >
    </MiniImageContainer>
</section>

<section class="content-of-page">
    <h2>8. Learnings</h2>
    <TwoColumn>
        <div>
            <h3>Involving the tech team early on</h3>
            <p>
                Being able to consult that development team from the wireframe
                stage helped ensure the designs are feasible and made the
                handover process smoother. Understanding their capabilities also
                gave us the freedom to create within the constraints.
            </p>
        </div>
        <div>
            <h3>Project planning and defining workstreams</h3>
            <p>
                With multiple people working on the same project, we needed to
                map out the work streams to ensure we are being efficient with
                time while still being aligned on the project.
            </p>
        </div>
    </TwoColumn>
</section>

<NextProject
    title="Reverse"
    description="Package-free groceries delivery service for time poor users"
    backgroundColor="#A5D0E1"
    link="/reverse"
/>

<style>
    .content-of-page {
        border-style: none none solid none;
        border-width: 1px;
        border-color: var(--gray-2);
    }
</style>
