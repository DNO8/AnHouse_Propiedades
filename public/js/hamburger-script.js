function setupMobileMenu() {
	const menuMobile = document?.querySelector("#hamburger-button");
	const menu = document?.querySelector("#mobile-menu");

	if (!menuMobile || !menu) return;

	// Clonamos el botón para eliminar listeners anteriores
	const newMenuMobile = menuMobile.cloneNode(true);
	menuMobile.parentNode.replaceChild(newMenuMobile, menuMobile);

	let menuSwitch = false;

	newMenuMobile.addEventListener("click", () => {
		menu.classList.toggle("hidden");
		menuSwitch = !menuSwitch;

		if (menuSwitch) {
			newMenuMobile.classList.toggle("open");
		} else {
			newMenuMobile.classList.remove("open");
		}

		console.log("menuSwitch:", menuSwitch);
	});
}

// 🚀 Escucha todos los casos posibles
window.addEventListener("load", setupMobileMenu); // en caso se cargue directamente
document.addEventListener("astro:page-load", setupMobileMenu); // navegación inicial (SSR o SPA)
document.addEventListener("astro:after-swap", setupMobileMenu); // navegación entre páginas
