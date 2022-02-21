<template>
    <transition name="fade" mode="out-in">
        <section class="profile" v-if="getUserProfile">
            <div class="user-info">
                <div class="avatar">
                    <div class="avatar-frame">
                        <img class="img" :src="getUserProfile.avatar_url" alt="avatar">
                    </div>
                    <a class="view-link" :href="getUserProfile.html_url" target="_blank">
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
                <ul class="info-list">
                    <li class="list-item">Name: {{getUserProfile.name}}</li>
                    <li class="list-item">Username: {{getUserProfile.login}}</li>
                    <li class="list-item">Website/Blog: {{getUserProfile.blog}}</li>
                    <li class="list-item">Location: {{getUserProfile.location}}</li>
                    <li class="list-item">Created At: {{getUserProfile.created_at}}</li>
                </ul>
            </div>
            <div class="latest-repos">
                <h2>Latest Repos</h2>
                <div class="repos" v-if="getUserProfile.public_repos">
                    <div class="repo-card" v-for="repo in getUserRepos" :key="repo">
                        <div class="repo-name">
                            <label>{{repo.name}}</label>
                            <a class="view-link" :href="repo.html_url" target="_blank" >Go to repo</a>
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

<style lang="scss" scoped>
$color: #24292f;
$alt-color: rgb(241, 241, 241);

.profile {
    margin-top: 4rem;
    padding: 0.1rem;
    display: flex;
    flex-direction: column;
    border: 5px solid $color;
    border-radius: 1rem;
    text-align: center;
    align-items: center;

    min-width: max-content;
    .user-info {
        padding: 2rem;
        min-width: max-content;
        width: 40vw;
        .avatar {
            display: flex;
            flex-direction: column;
            .avatar-frame {
                display: inline-block;
                border: 4px solid $color;
                border-radius: 100%;
                overflow: hidden;
                width: calc(260px - 54px);
                height: calc(260px - 54px);
                align-self: center;
                img {
                    border: 0;
                    margin: 0;
                    padding: 0;
                    width: calc(260px - 54px);
                    height: calc(260px - 54px);
                }
            }
            .view-link {
                margin-top: 1rem;
            }
        }
        .counts {
            display: flex;
            justify-content: space-between;
            border: 2px solid $color;
            border-radius: 1rem;
            margin-top: 1rem;
            padding: 0.4rem;
            .repo-count, .gist-count,
            .follower-count, .following-count {
                display: flex;
                flex-direction: column;
                white-space: nowrap;
                padding-left: 0.5rem;
                padding-right: 0.5rem;
            }
        }
        .info-list {
            padding: 0.4rem;
            border: 2px solid $color;
            border-radius: 1rem;
            list-style: none;
            text-align: start;
        }
    }
    .latest-repos {
        display: flex;
        flex-direction: column;
        align-content: space-between;
        padding: 2rem;
        margin: 1rem;
        border: 2px solid $color;
        border-radius: 1rem;
        min-width: max-content;
        .repo-card {
            display: flex;
            flex-direction: column;
            background-color: $color;
            color: $alt-color;
            border-radius: 1rem;
            min-width: 21rem;
            width: 35vw;
            height: 4rem;
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
            .repo-name {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin: 0.5rem;
                padding-left: 1rem;
                padding-right: 1rem;
                .view-link {
                    border: 2px solid $alt-color;
                    height: max-content;
                    width: 6rem;
                }
            }
            .repo-counts {
                display: flex;
                justify-content: space-around;
            }
        }
    }
    .view-link {
        display: grid;
        align-items: center;
        background-color: $color;
        border-radius: 1rem;
        text-decoration: none;
        color: $alt-color;
        height: 2rem;
    }
}
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
@media(min-width: 57rem) {
    .profile {
        flex-direction: row;
        justify-content: space-between;
    }
}
</style>