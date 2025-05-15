export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["fonts/FontAwesome.otf","fonts/fontawesome-webfont.eot","fonts/fontawesome-webfont.svg","fonts/fontawesome-webfont.ttf","fonts/fontawesome-webfont.woff","fonts/fontawesome-webfont.woff2","fonts/lg.eot","fonts/lg.svg","fonts/lg.ttf","fonts/lg.woff","fonts/slick.eot","fonts/slick.svg","fonts/slick.ttf","fonts/slick.woff","img/.DS_Store","img/ajax-loader.gif","img/author-image/author-image-1.png","img/author-image/author-image-2.png","img/author-image/author-image-3.png","img/author-image/author-image-4.png","img/author-image/author-image-5.png","img/bg/bg-image-1-*.jpg","img/bg/bg-image-1.jpg","img/bg/bg-image-2.jpg","img/bg/bg-image-2.jpg.old","img/bg/bg-image-3.jpg","img/bg/bg-image-4.jpg","img/bg/bg-image-5.jpg","img/bg/bg-image-6.jpg","img/bg/bg-image-7.jpg","img/bg/newbg/124541.jpg","img/bg/newbg/backgound_1920.png","img/bg/newbg/fabrizio-conti-02.jpg","img/bg/newbg/fabrizio-conti.jpg","img/favicon.ico","img/icon.png","img/icons/icon-close-white.png","img/icons/icon-close.png","img/icons/icons8-svelte.svg","img/loading.gif","img/logo/1-fotor-bg-remover-202402152811.png","img/logo/2-fotor-bg-remover-202402152831.png","img/logo/bitmap.png","img/logo/logo-dark.png","img/logo/logo-light.png","img/newbg/sallygap.png","img/others/about-image.jpg","img/portfolio/lz-size/portfolio-image-lg-1.jpg","img/portfolio/lz-size/portfolio-image-lg-10.jpg","img/portfolio/lz-size/portfolio-image-lg-11.jpg","img/portfolio/lz-size/portfolio-image-lg-12.jpg","img/portfolio/lz-size/portfolio-image-lg-13.jpg","img/portfolio/lz-size/portfolio-image-lg-14.jpg","img/portfolio/lz-size/portfolio-image-lg-15.jpg","img/portfolio/lz-size/portfolio-image-lg-16.jpg","img/portfolio/lz-size/portfolio-image-lg-2.jpg","img/portfolio/lz-size/portfolio-image-lg-3.jpg","img/portfolio/lz-size/portfolio-image-lg-4.jpg","img/portfolio/lz-size/portfolio-image-lg-5.jpg","img/portfolio/lz-size/portfolio-image-lg-6.jpg","img/portfolio/lz-size/portfolio-image-lg-7.jpg","img/portfolio/lz-size/portfolio-image-lg-8.jpg","img/portfolio/lz-size/portfolio-image-lg-9.jpg","img/portfolio/portfolio-image-1.jpg","img/portfolio/portfolio-image-1.jpg.2.old","img/portfolio/portfolio-image-1.jpg.old","img/portfolio/portfolio-image-10.jpg","img/portfolio/portfolio-image-11.jpg","img/portfolio/portfolio-image-12.jpg","img/portfolio/portfolio-image-13.jpg","img/portfolio/portfolio-image-14.jpg","img/portfolio/portfolio-image-15.jpg","img/portfolio/portfolio-image-16.jpg","img/portfolio/portfolio-image-2.jpg","img/portfolio/portfolio-image-2.jpg.old","img/portfolio/portfolio-image-3.jpg","img/portfolio/portfolio-image-3.jpg.old","img/portfolio/portfolio-image-4.jpg","img/portfolio/portfolio-image-4.jpg.old","img/portfolio/portfolio-image-5.jpg","img/portfolio/portfolio-image-5.jpg.old","img/portfolio/portfolio-image-6.jpg","img/portfolio/portfolio-image-7.jpg","img/portfolio/portfolio-image-8.jpg","img/portfolio/portfolio-image-9.jpg","img/portrait/tosinpeter.png","img/videos/.DS_Store","img/videos/output_video.webm","js/ajax-mail.js","js/bootstrap.min.js","js/google-map.js","js/jquery.fullpage.min.js.map","js/looper.js","js/main.js","js/plugins.js","js/popper.min.js","js/popper.min.js.map","js/vendor/jquery-3.6.0.min.js","js/vendor/modernizr-3.11.2.min.js"]),
	mimeTypes: {".otf":"font/otf",".svg":"image/svg+xml",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2",".gif":"image/gif",".png":"image/png",".jpg":"image/jpeg",".webm":"video/webm",".js":"text/javascript",".map":"application/json"},
	_: {
		client: {start:"_app/immutable/entry/start.DtRvEBFY.js",app:"_app/immutable/entry/app.B0xrAYgJ.js",imports:["_app/immutable/entry/start.DtRvEBFY.js","_app/immutable/chunks/DsCwjp3C.js","_app/immutable/chunks/CuIcymPu.js","_app/immutable/chunks/C5zrE2JS.js","_app/immutable/chunks/UhPjgVww.js","_app/immutable/entry/app.B0xrAYgJ.js","_app/immutable/chunks/CuIcymPu.js","_app/immutable/chunks/CAHhALS2.js","_app/immutable/chunks/FqEdNSdB.js","_app/immutable/chunks/C2Y7dR0l.js","_app/immutable/chunks/C5zrE2JS.js","_app/immutable/chunks/BOYgcdNA.js","_app/immutable/chunks/BtxDQVFl.js","_app/immutable/chunks/UhPjgVww.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/index-dark",
				pattern: /^\/index-dark\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/photo-2-column",
				pattern: /^\/photo-2-column\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/photo-4-column",
				pattern: /^\/photo-4-column\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/photo-details",
				pattern: /^\/photo-details\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/photo-gallery",
				pattern: /^\/photo-gallery\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/[username]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"username","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
