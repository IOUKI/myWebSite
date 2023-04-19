<template>
    <div id="Navbar"
        class="fixed text-3xl w-full text-white shadow-2xl py-3.5 px-6 md:flex justify-between items-center select-none z-50 duration-500">

        <div class="flex items-center duration-500 select-none">

            <span class="mr-1">
                <img src="../../public/website.png" alt="" class="w-7 h-7">
            </span>

            <h1>Lan</h1>

        </div>

        <span @click="MenuToggle()" class="absolute top-3 right-5 md:hidden cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
        </span>

        <ul id="Navbar_Links"
            class="md:flex md:items-center mt-3.5 md:mt-0 md:px-0 px-7 md:pb-0 bg-gray-900/70 md:bg-transparent md:static absolute md:w-auto m-full w-full h-auto duration-500 ease-in"
            :class="[open ? 'left-0' : 'left-[-100%]']">
            <li @click="MenuClose()" class=" md:mx-4 md:my-0 my-6 hover:text-white cursor-pointer duration-500"
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
                { name: 'HOME', link: '#title' },
                { name: '自介', link: '#' },
                { name: '技術', link: '#' },
                { name: '社群', link: '#' },
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
        scrolling() {
            const Navbar = document.getElementById('Navbar')
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            let scrollStep = scrollTop - this.oldScrollTop
            this.oldScrollTop = scrollTop

            if (scrollStep < 0) {
                if (Navbar.classList.contains('top-[-100px]')) {
                    Navbar.classList.add('top-[0px]')
                    Navbar.classList.add('top-[-100px]')
                }
            } else {
                if (Navbar.classList.contains('top-[0px]')) {
                    Navbar.classList.remove('top-[0px]')
                    Navbar.classList.add('top-[-100px]')
                }
            }
        }
    },

    mounted() {
        this.smooth_scroll()
        window.addEventListener('scroll', this.scrolling)
    },

}
</script>