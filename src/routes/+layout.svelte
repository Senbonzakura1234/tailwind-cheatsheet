<script lang="ts">
	import '../app.postcss';

	import { page } from '$app/stores';
	import {
		Dropdown,
		DropdownDivider,
		DropdownItem,
		NavBrand,
		NavHamburger,
		NavLi,
		NavUl,
		Navbar,
	} from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';

	$: activeUrl = $page.url.pathname;

	let activeClass =
		'text-white bg-green-700 md:bg-transparent md:text-green-700 md:dark:text-white dark:bg-green-600 md:dark:bg-transparent';
	let nonActiveClass =
		'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
</script>

<Navbar let:NavContainer color="primary">
	<NavContainer class="border px-5 py-2 rounded-lg bg-white dark:bg-gray-600">
		<NavBrand href="/">
			<span class="self-center whitespace-nowrap text-xl font-semibold">Tailwind Cheatsheet</span>
		</NavBrand>
		<NavHamburger />
		<NavUl {activeUrl} {activeClass} {nonActiveClass}>
			<NavLi href="/">Home</NavLi>
			<NavLi class="cursor-pointer">
				Dropdown<ChevronDownOutline class="w-3 h-3 ml-2 text-primary-800 dark:text-white inline" />
			</NavLi>
			<Dropdown class="w-44 z-20">
				<DropdownItem href="/">Dashboard</DropdownItem>
				<DropdownItem href="/docs/components/navbar">Settings</DropdownItem>
				<DropdownItem href="/">Earnings</DropdownItem>
				<DropdownDivider />
				<DropdownItem href="/">Sign out</DropdownItem>
			</Dropdown>
			<NavLi href="/about">About</NavLi>
			<NavLi href="/docs/components/navbar">Navbar</NavLi>
			<NavLi href="/pricing">Pricing</NavLi>
			<NavLi href="/contact">Contact</NavLi>
		</NavUl>
	</NavContainer>
</Navbar>

<slot />
