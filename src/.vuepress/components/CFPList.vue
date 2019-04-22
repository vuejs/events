<template>
	<div class="cfp-list">
		<slot/>
		<div class="cfp-list__list">
			<CFPItem
				v-for="(event, index) in allEvents"
				class="cfp-list__item"
				:key="index"
				:event="event"
			/>
		</div>
	</div>
</template>

<script>
import cfpTimeline from '../data/2019-cfps.json';
import CFPItem from './CFPItem';
import { isPast } from '../utils';

export default {
	components: {
		CFPItem,
	},

	data() {
		return {
			allEvents: cfpTimeline.active
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
.cfp-list__month {
	font-size: 1.15rem;
}

.cfp-list__list {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding-top: 20px;
}

.cfp-list__item {
	flex-grow: 1;
	flex-basis: 100%;
	max-width: 100%;
}
</style>
