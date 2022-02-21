<template>
    <div class="search-box">
        <h3>Search for Github Users</h3>
        <p>
            Enter a username and find out user information
        </p>
        <form class="search-form">
            <input type="search" v-model="username" name="username" placeholder="Enter a Github username" />
            <input type="submit" @click.prevent="search" value="Search" />
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

</style>