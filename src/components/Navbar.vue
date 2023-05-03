<template>
    <div id="Navbar"
        class="fixed text-3xl w-full text-white py-3.5 px-6 md:flex justify-between items-center select-none z-50 duration-700">

        <div class="flex items-center duration-500 select-none">

            <span class="mr-1">
                <img src="../../public/website.png" alt="" class="w-7 h-7">
            </span>

            <h1>Lan</h1>

        </div>

        <span @click="MenuToggle()" class="absolute top-3 right-5 md:hidden cursor-pointer">
            <svg ref="navbarOpenIcon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
            <svg ref="navbarCloseIcon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                class="bi bi-x-lg hidden" viewBox="0 0 16 16">
                <path
                    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
        </span>

        <ul id="Navbar_Links"
            class="md:flex md:items-center mt-3.5 md:mt-0 md:px-0 px-7 md:pb-0 bg-gray-700 md:bg-transparent md:static absolute md:w-auto m-full w-full h-screen md:h-auto duration-500 ease-in"
            :class="[open ? 'left-0' : 'left-[-100%]']">
            <li @click="MenuClose()" class="md:mx-4 md:my-0 my-6 text-center hover:text-white cursor-pointer duration-500"
                v-for="link in Links" :key="link">
                <div :href="link.link"
                    class="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[4px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
                    {{ link.name }}
                </div>
            </li>
        </ul>

    </div>
</template>
  
<script>
import { websiteUrl } from '../modules/url/urls.js'

export default {

    data() {
        return {
            websiteUrl: websiteUrl,
            open: false,
            Links: [
                { name: 'TOP', link: '#Title' },
                { name: 'About', link: '#About' },
                { name: 'Skill', link: '#Skill' },
                { name: 'Contact', link: '#Contact' },
            ],
            oldScrollTop: 0,
        }
    },

    methods: {
        MenuToggle() {
            this.open = !this.open;
        },
        MenuClose() {
            this.open = false;
        },
        smooth_scroll() {
            document.querySelectorAll('div[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
        },
        openOrCloseNavbar(toggle) {
            // toggle: true => open nav, false => close nav.
            const Navbar = document.getElementById('Navbar')
            if (toggle) {
                Navbar.classList.add('top-[0px]')
                Navbar.classList.remove('top-[-100px]')
                Navbar.classList.add('shadow-2xl')
            } else {
                Navbar.classList.remove('top-[0px]')
                Navbar.classList.add('top-[-100px]')
                Navbar.classList.remove('shadow-2xl')
            }

            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if (scrollTop == 0) {
                Navbar.classList.remove('shadow-2xl')
            }
        },
        scrolling() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            let scrollStep = scrollTop - this.oldScrollTop
            this.oldScrollTop = scrollTop

            if (scrollStep < 0) {
                // 顯示
                this.openOrCloseNavbar(true)
            } else {
                // 關閉
                this.openOrCloseNavbar(false)
            }

            // if (scrollTop == 0) {
            //     const Navbar = document.getElementById('Navbar')
            //     Navbar.classList.remove('shadow-2xl')
            // }
        },
    },

    watch: {
        open(value) {
            const navbarOpenIcon = this.$refs.navbarOpenIcon
            const navbarCloseIcon = this.$refs.navbarCloseIcon
            if (value === true) {
                navbarCloseIcon.classList.remove('hidden')
                navbarOpenIcon.classList.add('hidden')
            } else {
                navbarCloseIcon.classList.add('hidden')
                navbarOpenIcon.classList.remove('hidden')
            }
        }
    },

    mounted() {
        this.smooth_scroll()
        window.addEventListener('scroll', this.scrolling)
        document.addEventListener('mousemove', function (event) {
            const mouseY = event.clientY
            const windowHeight = window.innerHeight // 畫面總高度
            const heightFromTop = windowHeight - mouseY // 游標高度
            const range = windowHeight - heightFromTop
            if (range >= 0 && range <= 50) {
                const Navbar = document.getElementById('Navbar')
                Navbar.classList.add('top-[0px]')
                Navbar.classList.remove('top-[-100px]')   
            }
        });
    },

}
</script>