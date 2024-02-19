<template>
    <p>Reaction time: {{ score }}ms</p>
    <p class="rank"> {{ rank }} </p>
</template>

<script>
export default {
    props: ['score'],
    data() {
        return {
            rank: null,

        }
    },
    mounted() {
        if (this.score < 250)
        {
            this.rank = 'At fast as flash huh! =)))';
        } else if (this.score < 400)
        {
            this.rank = 'Not bad at all duh!';
        } else {
            this.rank = 'Snail pace ...';
        }
    }
}
</script>

<style>
    .rank{
        font-size: 1.4em;
        color: #0faf87;
        font-weight: bold;
    }
</style>