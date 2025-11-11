<!-- src/routes/+layout.svelte -->
<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';


  // Any initialization logic can go here
  import "carbon-components-svelte/css/g10.css";
  import '$styles/css/bootstrap.min.css';
  import '$styles/css/plugins.css';
  import '$styles/css/style.css';
  import '$styles/css/custom.css';





  //  Dynamically load external scripts
  //  onMount(() => {
  //   const scripts = [
  //     "/js/vendor/modernizr-3.11.2.min.js",
  //     "/js/vendor/jquery-3.6.0.min.js",
  //     "/js/popper.min.js",
  //     "/js/bootstrap.min.js",
  //     "/js/plugins.js",
  //     "/js/main.js",
  //     // "/js/jquery.fullpage.min.js.map"
  //   ];

  //   scripts.forEach((src) => {
  //     const script = document.createElement("script");
  //     script.src = src;
  //     // script.defer = true;
  //     document.body.appendChild(script);
  //   });
  // });

  onMount(() => {
    const scripts = [
      { src: "/js/vendor/jquery-3.6.0.min.js", defer: false }, // Load jQuery first
      { src: "/js/popper.min.js", defer: true },
      { src: "/js/bootstrap.min.js", defer: true },
      { src: "/js/plugins.js", defer: true },
      { src: "/js/main.js", defer: true } // Load main.js last
    ];

    const loadScript = (script) => {
      return new Promise((resolve, reject) => {
        const el = document.createElement("script");
        el.src = script.src;
        el.defer = script.defer || false;
        el.onload = resolve;
        el.onerror = reject;
        document.body.appendChild(el);
      });
    };

    // Load scripts sequentially
    scripts.reduce((promise, script) => {
      return promise.then(() => loadScript(script));
    }, Promise.resolve());
  });

   
  import Header from '$lib/Header.svelte';
  // import Footer from '$lib/Footer.svelte';
  // $: console.log($page.url.pathname);
  const headerRoutes = ['/photo-gallery', '/photo-details'];

  // Helper: true if path is a single segment (e.g. /jide), but not in headerRoutes or /admin
  $: isUserDashboard =
    /^\/[^/]+$/.test($page.url.pathname) &&
    !headerRoutes.includes($page.url.pathname) &&
    $page.url.pathname !== '/admin';

  // $: showHeader = headerRoutes.includes($page.url.pathname) ;
  // $: console.log('showHeader:', showHeader);
  $: showHeader = !isUserDashboard && $page.url.pathname !== '/admin';
</script>

<svelte:head>
  <!-- <script src="/js/vendor/modernizr-3.11.2.min.js"></script>  -->
  <!-- <script src="/js/looper.js" ></script>  -->
  <!-- <script src="/js/vendor/jquery-3.6.0.min.js" ></script>
	<script src="/js/popper.min.js" ></script>
	<script src="/js/bootstrap.min.js" ></script>
	<script src="/js/plugins.js"></script>
	<script src="/js/main.js" ></script>  -->




   <!-- CSS Imports -->
   <!-- <link rel="stylesheet" href="$styles/css/bootstrap.min.css" />
   <link rel="stylesheet" href="$styles/css/plugins.css" />
   <link rel="stylesheet" href="$styles/css/style.css" />
   <link rel="stylesheet" href="$styles/css/custom.css" /> -->
   <link rel="shortcut icon" href="#">
   <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,500,600,700">

</svelte:head>


<!-- <body> -->
<!-- <Header /> -->
{#if showHeader}
  <Header />
{/if}
<slot />
<!-- <Footer /> -->
<!-- </body> -->


<!-- JS Imports -->
<!-- <script src="/js/vendor/modernizr-3.11.2.min.js" defer></script>
<script src="/js/vendor/jquery-3.6.0.min.js" defer></script>
<script src="/js/popper.min.js" defer></script>
<script src="/js/bootstrap.min.js" defer></script>
<script src="/js/plugins.js" defer></script>
<script src="/js/main.js" defer></script> -->
<!-- External JS Files -->
<!-- <script>
  const scripts = [
    "/js/vendor/modernizr-3.11.2.min.js",
    "/js/vendor/jquery-3.6.0.min.js",
    "/js/popper.min.js",
    "/js/bootstrap.min.js",
    "/js/plugins.js",
    "/js/main.js"
  ];

  scripts.forEach((src) => {
    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    document.body.appendChild(script);
  });
</script> -->

<style>
  /* Hide the header on mobile viewports */
   /* Hide the header on mobile viewports */
  @media (max-width: 767px) {
    :global(.responsive-header) {
      display: none;
    }
  }
</style>