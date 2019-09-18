<template>
    <transition name="menu_transition">
        <div id="cases">
            <logo/>
            <navMenu/>

            <caseItem v-for="(cas_e, key) in cases" v-bind="cas_e" :key="key"/>

            <scrollButtons/>
        </div>
    </transition>
</template>
<script>
    import cases from "@/05-data/Cases.json";

    export default {
        data() {
            return {
                cases,
                x: ""
            };
        },
        methods: {},
        watch: {
            x: function () {
                const sbtnL = document.getElementById("SbtnL").classList;
                const sbtnR = document.getElementById("SbtnR").classList;

                let end =
                    Object.keys(this.cases).length *
                    document.getElementById("items").offsetWidth -
                    window.innerWidth +
                    4;

                if (scrollX <= 100) {
                    sbtnL.add("hide");
                } else if (scrollX >= end - 100 && scrollX <= end) {
                    sbtnR.add("hide");
                } else {
                    sbtnL.remove("hide");
                    sbtnR.remove("hide");
                }
            }
        }
    };

    function side_scroll(event) {
        let y = event.deltaY;
        this.x = scrollX;
        if (y >= 0) {
            window.scrollBy({
                left: 500,
                behavior: "smooth"
            });
        } else {
            window.scrollBy({
                left: -500,
                behavior: "smooth"
            });
        }
    }

    document.onwheel = side_scroll;
</script>
<style lang="scss" src="./Cases.scss">
</style>

