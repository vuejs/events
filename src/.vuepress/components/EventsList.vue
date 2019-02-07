<template>
	<div>
		<div class="events-list__filters">
			<div>Show:</div>

			<div class="events-list__labels">
				<label
					v-for="option in typesOptions"
					:key="option.value"
					class="events-list__filter"
					:class="{ 'is-active': type === option.value }">
					<input
						type="radio"
						v-model="type"
						name="event-type"
						:value="option.value"
						class="events-list__input">
					<span class="events-list__label-text">
						{{ option.label }}
					</span>
				</label>
			</div>
		</div>

		<events-timeline :type="type">

			<slot name="upcoming"></slot>

		</events-timeline>

		<events-timeline :past="true" :type="type">

			<slot name="past"></slot>

		</events-timeline>
	</div>
</template>

<script>
export default {
	data() {
		return {
			type: '',
			typesOptions: [{
				value: '',
				label: 'All',
			}, {
				value: 'meetup',
				label: 'Meetups',
			}, {
				value: 'conference',
				label: 'Conference',
			}, {
				value: 'workshop',
				label: 'Workshop',
			}],
		};
	},
};
</script>

<style>
.events-list__filters {
	padding: 3rem 0;
	border-top: 1px solid #eaecef;
	margin-top: 3rem;
}

.events-list__input {
	position: absolute;
	opacity: 0;
	z-index: -1;
}

.events-list__labels {
	margin-top: 1rem;
	display: flex;
	justify-content: space-between;
}

.events-list__input:focus + .events-list__label-text {
	outline-style: auto;
}

.events-list__filter {
	font-weight: 500;
	cursor: pointer;
}

.events-list__filter:hover,
.events-list__filter.is-active {
	color: #3eaf7c;
}
</style>
