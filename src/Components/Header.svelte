<script>
  
</script>

<header>
    <a href="." class="logo"> Sam Tung</a>
    <div class="nav-option">
        <div>
            <h3>
<div class="dropdown">

<a href="#"> Work</a>
<div class="dropdown-content">
    <div class="header">
      <h2>Mega Menu</h2>
    </div> 
    <div class="row">
      <div class="column">
        <h3>Category 1</h3>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
      <div class="column">
        <h3>Category 2</h3>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
      <div class="column">
        <h3>Category 3</h3>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
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
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Mega Menu header, if needed */
.dropdown-content .header {
  background: red;
  padding: 16px;
  color: white;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Create three equal columns that floats next to each other */
.column {
  float: left;
  width: 33.33%;
  padding: 10px;
  background-color: #ccc;
  height: 250px;
}

/* Style links inside the columns */
.column a {
  float: none;
  color: black;
  padding: 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

/* Add a background color on hover */
.column a:hover {
  background-color: #ddd;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
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
