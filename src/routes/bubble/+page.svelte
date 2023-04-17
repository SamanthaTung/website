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
    <title>Bubble</title>
</svelte:head>

<Hero
    imageSrc="BubblePhotos/bubble.png"
    title="Bubble"
    description="Remote healthcare monitoring platform for Healthcare Professionals. All-in-one dashboard to monitor patient’s condition and keep track of all communications."
    backgroundColor="#A0C3ED"
    awardImages={false}
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
            title="HCPs managing multiple patients remotely"
            type="column"
            src="/BubblePhotos/Problem1.png"
        >
            <p>
                Without regular in-person appointments, there’s a lack of
                structure for the teams of healthcare professionals (HCPs) to
                take care of multiple patients. They will need to manage
                messages and meetings with patients as well as internal
                communications.
            </p>
        </Image>
        <Image
            title="Current communications are not effective"
            type="column"
            src="/BubblePhotos/Problem2.png"
        >
            <p>
                The current communications are scattered across the platform and
                important messages get lost. There’s an opportunity to
                facilitate regular and effective communication between patients
                and HCPs while calling out of any emergencies to ensure HCP can
                provide the care the patient needs.
            </p>
        </Image>
    </TwoColumn>
</section>
<section class="content-of-page">
    <h2>2. Background &amp; Role</h2>
    <TwoColumn>
        <div>
            <h3>Why remote health consulting</h3>
            <p>
                Remote health consulting helps both the patient and HCPs to save
                money and time. Its demand has increased after the pandemic,
                especially among elderlies and patients in the care home, who
                have no choice but to avoid all hospital visits.
            </p>
        </div>
        <div>
            <h3>Role</h3>
            <ul>
                <li>My role was UX Designer and project manager</li>
                <li>
                    I worked with Suburbans health cofounder Naveed, who himself
                    is a GP who saw a huge opportunity to improve remote
                    healthcare, and their development team
                </li>
            </ul>
        </div>
    </TwoColumn>
</section>
<section class="content-of-page">
    <h2>3. How I got to the solution</h2>

    <Image
        type="row"
        title="Requirement gathering workshops & Feature matrix to clarify ambiguity"
        src="/BubblePhotos/HowIGotThere1.png"
    >
        <p>
            We followed up our initial product discussion with a feature matrix
            that captures all the features that are in and out of scope. We have
            also colour-coded the features by priority to form a product road
            map.
        </p>
    </Image>

    <Image
        type="row"
        title="Iterations of design and co-create sessions to define information architecture"
        src="/BubblePhotos/HowIGotThere2.png"
    >
        <p>
            Through regular design reviews with our client who is also a GP, we
            improved the design to best meet the HCP’s need: to get to critical
            information quickly to take the right actions.
        </p>
    </Image>
    <Image
        type="row"
        title="Ideation sessions to eliminate the risk of miscommunication "
        src="/BubblePhotos/HowIGotThere3.png"
    >
        <p>
            To steer clear of any danger of sending messages to the wrong chat,
            which might cause serious and unintended consequences to the
            patient, we considered ways of separating the HCP-HCP and
            HCP-patient chat box.
        </p>
    </Image>
</section>
<section class="content-of-page">
    <h2>4. How does it work</h2>
    <img src="/BubblePhotos/HowItWorks.svg" alt="" style="width:100%;" />
</section>
<section class="content-of-page">
    <h2>5. How it solves the problem</h2>
    <Image
        type="row-reverse"
        title="Effective and efficient interface"
        src="BubblePhotos/SolveProblem1.png"
    >
        <p>
            We’ve implemented 2 features to direct the HCP’s attention to what
            matters:
        </p>
        <ul>
            <li>
                We prioritised displaying an overview of the patient’s medical
                readings over their personal details. By adding labels and
                alerts to highlight any unusual readings, we direct them to
                areas that need their input.
            </li>
            <li>
                During emergencies or before surgeries, when the HCPs need to
                focus the most, admin users can limit the data display on the
                dashboard to prevent distracting the HCPs.
            </li>
        </ul>
    </Image>
    <Image
        type="row-reverse"
        title="Our containers enable a wider range of products to be sold package free"
        src="BubblePhotos/SolveProblem2.png"
    >
        <ul>
            <li>
                The container has air-tight seals and air valves that enable
                modified atmosphere packaging (MAP), and vents for
                breathability, keeping perishable produce fresh
            </li>
            <li>
                The e-ink screen on them provides use and storage guidelines
            </li>
        </ul>
    </Image>
</section>
<section class="content-of-page">
    <h2>6. Challenge</h2>
    <TwoColumn>
        <Image
            title="Missed opportunity to understand the users"
            type="column"
            src="BubblePhotos/Challenge1.png"
        >
            <p>
                Due to budget and time constraints, we didn’t get to interview
                multiple HCPs to understand the problem they face during remote
                consultation. Luckily for us, our client is one of the users
                himself so we were still able to get some level of insight to
                inform the design.
            </p>
        </Image>
        <Image
            title="Lack of user testing due to time constrains"
            type="column"
            src="BubblePhotos/Challenge2.png"
        >
            <p>
                Again for the same reasons, we didn’t get to conduct any
                structured usability testing, but our client took the time to
                share the prototype with his connections and we still got useful
                insights that way.
            </p>
        </Image>
    </TwoColumn>
</section>
<section class="content-of-page">
    <h2>7. Impact</h2>
    <MiniImageContainer>
        <MiniImage src="/BubblePhotos/Impact1.svg" title="Usability"
            >The streamlined design allow HCP to understand patient’s condition
            effectively</MiniImage
        >
        <MiniImage src="/BubblePhotos/Impact2.svg" title="Scannable"
            >The dashboard design allows clinicians to quickly scan the
            necessary information</MiniImage
        >
        <MiniImage src="/BubblePhotos/Impact3.svg" title="Happy clients"
            >The clients delighted by the end result and were able to get more
            funding with the prototype</MiniImage
        >
        <MiniImage src="/BubblePhotos/Impact4.svg" title="Developed & launched"
            >After the UI design and development phase, the product is now in
            the hands of HCPs</MiniImage
        >
    </MiniImageContainer>
</section>

<section class="content-of-page">
    <h2>8. Learnings</h2>
    <TwoColumn>
        <div>
            <h3>Compromising on design process</h3>
            <li>
                Understood that in the real-world we couldn’t always follow the
                perfect process, but we can still use the resources available to
                us to involve the users as much as possible while still
                advocating the value of following the process.
            </li>
        </div>
        <div>
            <h3>Initial and regular communications</h3>
            <p>
                Some contributing factors to the project running smoothly are
                the in-depth initial discussions on the project expectation,
                sufficient communication between iterations, and the
                requirements being well documented.
            </p>
        </div>
    </TwoColumn>
</section>

<NextProject
    title="Coin Rivet"
    description="Crypto currency investment platform & wallet for beginners"
    backgroundColor="#B3D8C6"
    link="/coinrivet"
/>

<style>
    .content-of-page {
        border-style: none none solid none;
        border-width: 1px;
        border-color: var(--gray-2);
    }
</style>
