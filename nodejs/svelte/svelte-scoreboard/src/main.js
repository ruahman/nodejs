import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Diego rocks change'
	}
});

export default app;