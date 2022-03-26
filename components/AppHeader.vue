<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="limit-width container-fluid">
            <a class="navbar-brand" href="#"><img class="img navbar-icon" src="images/suhgoi.png" alt="suhgoi"></a>
            <div class="h-line"></div>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <NuxtLink class="nav-link" aria-current="page" to="/">Home</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/blogs">Blogs</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
/*
Pallete:
#B77670 - pink
#800000 - red
#000000 - black
#E8DEDD - darkish white
#6F4E49 - kinda brown
*/
.nav-link {
  color: #E8DEDD!important;
}
.h-line {
  display:none;
  background-color: #E8DEDD;
  width: 1.2px;
  height: 30px;
  padding: 0;
}
.navbar-icon {
  width: 200px;
}
.nav-item {
  text-transform: uppercase;
  font-weight: 400;
}

.limit-width {
  max-width: 1650px;
}
ul {
    list-style-type: none;
    display: flex;
    align-items: center;
}

li {
    margin: 5px 10px;
    display: flex;
}
.bg-pink {
    background-color: #B77670;
}



@media only screen and (min-width: 992px) {
  .h-line {
  display:inline;
}
}
</style>
