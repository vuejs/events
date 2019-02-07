<template>
	<div class="events-timeline">
		<slot/>
		<div
			v-for="(timeline, year) in allEvents">
			<h3>{{ year }}</h3>
			<div
				v-for="(events, month) in timeline"
				v-if="events.length">
				<h4 class="events-timeline__month">{{ month }}</h4>
				<div class="events-timeline__list">
					<event-item
						v-for="(event, index) in events"
						class="events-timeline__item"
						:key="index"
						:month="month"
						:event="event"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import eventsTimeline from '../data';
import EventItem from './EventItem';
import { isPast } from '../utils';

export default {
	components: {
		EventItem,
	},

	props: {
		past: {
			type: Boolean,
			default: false
		},
		type: {
			type: String,
			default: '',
		},
	},

	computed: {
		allEvents() {
			const events = {};

			const years = Object.keys(eventsTimeline);

			if (this.past) {
				years.reverse();
			}

 			years.forEach((year) => {

				const months = Object.keys(eventsTimeline[year]);

				if (this.past) {
					months.reverse();
				}

				months.forEach((month) => {
					eventsTimeline[year][month].sort((e1, e2) => {
						const e1StartDate = new Date(e1.startDate);
						const e2StartDate = new Date(e2.startDate);

						return (this.past) ? e2StartDate - e1StartDate : e1StartDate - e2StartDate;
					});
					eventsTimeline[year][month].forEach((event) => {
						if (this.showEvent(event)) {
							if (!events[year]) {
								events[year] = {};
							}
							if (!events[year][month]) {
								events[year][month] = [];
							}
							events[year][month].push(event);
						}
					});
				});
			});

			return events;
		}
	},

	methods: {
		showEvent(event) {
			const checkDate = isPast(event.endDate) === this.past;
			const checkType = (this.type) ? this.type === event.type : true;

			return checkDate && checkType;
		}
	},

}
</script>

<style>
.events-timeline__month {
	font-size: 1.15rem;
}

.events-timeline__list {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}

.events-timeline__item {
	flex-grow: 1;
	flex-basis: 40%;
	max-width: 40%;
}

@media (max-width: 900px) {
	.events-timeline__item {
		flex-basis: 100%;
		max-width: 100%;
	}
}
</style>
