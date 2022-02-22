<template>
    <div class="search-box">
        <h3>Search for Github Users</h3>
        <p>
            Enter a username and find out user information
        </p>
        <form class="search-form">
            <input class="search" type="search" v-model="username" name="username" placeholder="Enter a Github username" />
            <input class="submit" type="submit" @click.prevent="search" value="Search" :disabled="!username" />
        </form>
    </div>
</template>

<script>
export default {
    name: "Finder",
    data() {
        return {
            username: ""
        }
    },
    methods: {
        search() {
            this.$store.dispatch("searchUser", {
                username: this.username
            })
        }
    }
}
</script>

<style lang="scss" scoped>
$color: rgb(36, 41, 47);
$alt-color: rgb(241, 241, 241);

.search-form {
    .search {
        height: 2rem;
        width: 18rem;
        font-size: 1rem;
        border: 2px solid $color;
        border-radius: 1rem 0 0 1rem;
        padding-left: 0.3rem;
    }
    .submit {
        height: 2rem;
        width: 5rem;
        border: 2px solid $color;
        background-color: $color;
        color: $alt-color;
        font-size: 1rem;
        font-weight: 700;
        border-radius: 0 1rem 1rem 0;
        cursor: pointer;
        transition: opacity 0.3s;
        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    }
}
</style>