<script>
  import linkedinIcon from "../Icons/Linkedin.svg";
  import mailIcon from "../Icons/Mail.svg";
</script>

<footer>
  <section class="content-of-page ">
    <h2>Get in touch!</h2>
    <div class="footer-bottom">
      <div class="left">
        <a href="https://www.linkedin.com/in/samantha-tung/" target="_blank"
          ><img src={linkedinIcon} alt="linkedin icon" /></a
        >
        <a href="mailto:samantha.tungling@gmail.com" target="_blank"
          ><img src={mailIcon} alt="mail icon" /></a
        >
        <span id="email">samantha.tungling@gmail.com</span>
      </div>
      <div class="right">Designed and made by Sam Tung</div>
    </div>
  </section>
</footer>

<style>
  footer {
    background: var(--gray-1);
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .left a {
    display: flex;
  }
  @media (max-width: 400px) {
    #email {
      display: none;
    }
  }
</style>
