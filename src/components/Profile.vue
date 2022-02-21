<template>
    <transition name="fade" mode="out-in">
        <section class="profile" v-if="getUserProfile">
            <div class="user-info">
                <div class="profile-avatar">
                    <div class="avatar">
                        <div class="avatar-frame">
                            <img class="img" :src="getUserProfile.avatar_url" alt="avatar">
                        </div>
                        <a :href="getUserProfile.html_url" target="_blank">
                            View Profile
                        </a>
                    </div>
                    <div class="counts">
                        <div class="repo-count">
                            <label>Repo Count:</label>
                            <span>{{getUserProfile.public_repos}}</span>
                        </div>
                        <div class="gist-count">
                            <label>Gist Count:</label>
                            <span>{{getUserProfile.public_gists}}</span>
                        </div>
                        <div class="follower-count">
                            <label>Followers:</label>
                            <span>{{getUserProfile.followers}}</span>
                        </div>
                        <div class="following-count">
                            <label>Following:</label>
                            <span>{{getUserProfile.following}}</span>
                        </div>
                    </div>
                    <ul class="list">
                        <li class="list-item">Website/Blog: {{getUserProfile.blog}}</li>
                        <li class="list-item">Location: {{getUserProfile.location}}</li>
                        <li class="list-item">Created At: {{getUserProfile.created_at}}</li>
                    </ul>
                </div>
            </div>
            <div class="latest-repos">
                <h3>Latest Repos</h3>
                <div class="repos" v-if="getUserProfile.public_repos">
                    <div class="repo-card" v-for="repo in getUserRepos" :key="repo">
                        <div class="repo-name">
                            <label>{{repo.name}}</label>
                            <a :href="repo.url" target="_blank" >Go to repo</a>
                        </div>
                        <div class="repo-counts">
                            <span>Stars: {{repo.stargazers_count}}</span>
                            <span>Watchers: {{repo.watchers_count}}</span>
                            <span>Forks: {{repo.forks_count}}</span>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <p>There is no repo yet...</p>
                </div>
            </div>
        </section>
        <div v-else>
            <div class="error" v-if="getUserError">
                <p>User not found...</p>
            </div>
        </div>
    </transition>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "Profile",
    computed: {
        ...mapGetters(["getUserProfile", "getUserRepos", "getUserError"])
    }
}
</script>

<style lang="scss"  scoped>
        .fade-enter {
            opacity: 0;
        }
        .fade-enter-active{
            transition: opacity 1s;
        }
        .fade-leace-active {
            transition: opacity 1s;
            opacity: 0;
        }
</style>