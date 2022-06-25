module.exports = {
	title: 'Vue.js Events',
	themeConfig: {
		logo: '/logo.png',
		repo: 'vuejs/events',
		nav: [
			{
				text: 'Upcoming',
				items: [
					{ text: 'Conferences', link: '/events/#conferences' },
					{ text: 'Meetups', link: '/events/#meetups' },
					{ text: 'Workshops', link: '/events/#workshops' },
					{ text: 'Call for Proposals', link: '/events/#call-for-proposals' }
				]
			},
			{
				text: 'Find',
				items: [
					{ text: 'Conferences', link: '/conferences/' },
					{ text: 'Meetups', link: '/meetups/' },
					{ text: 'Call for Proposals', link: '/call-for-proposals/' }
				]
			},
			{
				text: 'Resources',
				items: [
					{
						text: 'Getting Started',
						link: '/resources/#getting-started'
					},
					{
						text: "Organizers' Handbook",
						link: '/resources/#organizers-handbook'
					},
					{
						text: "Speakers' Handbook",
						link: '/resources/#speakers-handbook'
					},
					{
						text: 'Code of Conduct',
						link: '/code-of-conduct/'
					},
					{
						text: 'Event Graphics',
						link: '/resources/#event-graphics'
					},
					{
						text: 'Streaming your Event',
						link: '/resources/#streaming-your-event'
					}
				]
			},
			{
				text: 'Presentation',
				items: [
					{
						text: 'Discover',
						link: '/presentations/#discover'
					},
					{
						text: "Submit",
						link: '/presentations/#submit'
					},
				]
			},
			{
				text: 'Contact',
				items: [
					{
						text: 'Twitter',
						link: 'https://www.twitter.com/vuejs_events'
					},
					{
						text: 'Discord',
						link: 'https://chat.vuejs.org'
					}
				]
			}
		],
		lastUpdated: 'Last Updated',
		editLinks: true
	},
	head: [
		[
			'link',
			{
				rel: 'stylesheet',
				href:
					'https://fonts.googleapis.com/css?family=PT+Serif:400,700|Poppins:500,700'
			}
		],
		[
			'link',
			{ rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' }
		],
		[
			'link',
			{ rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' }
		],
		[
			'link',
			{ rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' }
		],
		[
			'link',
			{ rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' }
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '114x114',
				href: '/apple-icon-114x114.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '120x120',
				href: '/apple-icon-120x120.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '144x144',
				href: '/apple-icon-144x144.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '152x152',
				href: '/apple-icon-152x152.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/apple-icon-180x180.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '192x192',
				href: '/android-icon-192x192.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: '/favicon-32x32.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '96x96',
				href: '/favicon-96x96.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				href: '/favicon-16x16.png'
			}
		],
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
		[
			'meta',
			{ name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' }
		],
		['meta', { name: 'theme-color', content: '#ffffff' }]
	],
	plugins: [
		[
			'@vuepress/google-analytics',
			{
				ga: 'UA-46852172-1'
			}
		]
	]
}
