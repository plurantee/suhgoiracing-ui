<template>
    <div class="app-header">
            <ul class="nav-list">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/blogs">Blogs</NuxtLink></li>
            </ul>
    </div>
</template>

<style scoped>
    ul {
        list-style-type: none;
        display: flex;
        align-items: center;
    }

    li {
        margin: 5px 10px;
        display: flex;
    }
    .app-header {
        height: 8vh;
        background-color: rgb(255, 198, 198);
        display: flex;
        align-items: center;
    }

</style>