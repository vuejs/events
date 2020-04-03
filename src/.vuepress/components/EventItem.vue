<template>
	<div class="event">
		<div>
			<span class="event__type">{{ event.type }}</span>
			<img
				v-if="event.tag === 'vuevixens'"
				src="/vue-vixens-logo-sm.png"
				title="Vue Vixens"
				alt="Vue vixens logo"
				class="event__logo"/>
			<h5 class="event__title">
				<a
					:href="event.eventLink"
					target="_blank"
					rel="noopener noreferrer">
					{{ event.name }}
				</a>
			</h5>
			<p
				v-if="event.organiser"
				class="event__organiser">
				by
				<a
					:href="event.organiserLink"
					target="_blank"
					rel="noopener noreferrer">
					{{ event.organiser }}
				</a>
			</p>
		</div>
		<footer>
			<p class="event__info">
				<img
					class="event__icon"
					src="/calendar.svg"
					aria-hidden="true"/>
				{{ month }} {{event.date }} {{ event.time }}
			</p>
			<p class="event__info" v-if="event.location">
				<img
					class="event__icon"
					src="/pin.svg"
					aria-hidden="true"/>
				{{ event.location }}
			</p>
		</footer>
	</div>
</template>

<script>
export default {
	props: {
		event: {
			type: Object,
			required: true,
		},
		month: {
			type: String,
			required: true,
		}
	},
}
</script>

<style>
.event {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: 1px solid #eaecef;
	padding: 1rem 1.5rem;
	margin: 0 0 2rem;
	border-radius: 5px;
}

.event__type {
	background: #eaecef;
	padding: 0.2rem;
	border-radius: 5px;
	font-size: 12px;
	text-transform: uppercase;
	margin: 0 0 .5rem;
	display: inline-block;
}

.event__title {
	font-size: 1.1rem;
	margin: 10px 0 5px;
}

.event__organiser {
	margin-top: 0;
}

.event__info {
	font-size: 0.9rem;
	margin: 0;
	font-weight: 700;
}

.content:not(.custom) .event__logo {
	max-width: 60px;
	vertical-align: middle;
	float: right;
}

.event__info img.event__icon {
	max-width: 20px;
	vertical-align: middle;
}
</style>
