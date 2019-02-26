const fs = require('fs');
const axios = require('axios');

const eventsTimeline = {};

function getYearFromFile(fileName) {
	return fileName.replace('.json', '');
}

function getGetOrdinal(n) {
	const s = ['th', 'st', 'nd', 'rd'],
	v = n % 100;

	return `${n}${(s[(v-20)%10]||s[v]||s[0])}`;
}

function addEvent(event) {
	const date = new Date(event.startDate);

	const year = date.getFullYear();
	const locale = 'en-us';
	const month = date.toLocaleString(locale, { month: 'long' });

	if (!eventsTimeline[year][month]) {
		eventsTimeline[year][month] = [];
	}

	eventsTimeline[year][month].push(event);
}

function removeVueVixensEvents(staticEventsData) {
	for (const fileName of staticEventsData) {
		const year = getYearFromFile(fileName);

		Object.keys(eventsTimeline[year]).forEach((month) => {
			const vvEvents = eventsTimeline[year][month]
				.filter((event) => event.tag && event.tag === 'vuevixens');
				if (vvEvents) {
					vvEvents.forEach((event) => {
						const existingIndex = eventsTimeline[year][month].findIndex((item) => item.id === event.id);
						eventsTimeline[year][month].splice(existingIndex, 1);
					});
				}
		});
	}
}

async function getVueVixensEvents() {
	let response = await axios.get(`https://api.storyblok.com/v1/cdn/stories/upcoming?version=published&cv=1541163074263&token=${process.env.VV_TOKEN}`);

	return response.data.story.content.body.map((event) => ({
		id: `vm-${event._uid}`,
		date: getGetOrdinal(new Date(event.date).getDate()),
		startDate: event.date,
		endDate: event.date,
		organiser: 'Vue Vixens',
		organiserLink: 'https://vuevixens.org',
		name: event.name,
		eventLink: `https://vuevixens.org/${event.link.cached_url}`,
		type: 'workshop',
		tag: 'vuevixens',
		location: event.location,
	}));
}

function getEvents(asyncEvents) {
	asyncEvents.forEach((event) => {
		addEvent(event)
	});
}

function readEventsFromFile(staticEventsData) {
	for (const fileName of staticEventsData) {
		const year = getYearFromFile(fileName);
		const fileNamePath = `./docs/.vuepress/data/${fileName}`;
		const data = fs.readFileSync(fileNamePath);
		eventsTimeline[year] = JSON.parse(data);
	}
}

function writeEventsToFile(staticEventsData) {
	for (const fileName of staticEventsData) {
		const year = getYearFromFile(fileName);
		const fileNamePath = `./docs/.vuepress/data/${fileName}`;

		fs.writeFile(fileNamePath, JSON.stringify(eventsTimeline[year], null, 2), () => {});
	}
}

async function main() {
	const staticEventsData = fs.readdirSync('./docs/.vuepress/data/').filter((fileName) => /.+\.json$/.test(fileName));

	console.log('Generating events...')
	let asyncEvents = await getVueVixensEvents();

	readEventsFromFile(staticEventsData);
	removeVueVixensEvents(staticEventsData);
	getEvents(asyncEvents);
	writeEventsToFile(staticEventsData);
	console.log('All events saved to JSON');
}

main();
