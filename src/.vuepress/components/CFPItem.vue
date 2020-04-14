<template>
	<div class="cfp">
		<div>
			<h5 class="cfp__title">
				<a :href="event.website" target="_blank" rel="noopener noreferrer">
					{{ event.name }}
				</a>
			</h5>
		</div>
		<div>
			<p class="cfp__info">
				<img class="cfp__icon" src="/calendar.svg" aria-hidden="true" />
				Dates: {{ event.dates }}
			</p>
			<p class="cfp__info" v-if="event.location">
				<img class="cfp__icon" src="/pin.svg" aria-hidden="true" />
				{{ event.location }}
			</p>
			<p class="cfp__info">
				<img class="cfp__icon" src="/checkered-flag.svg" aria-hidden="true" />
				Deadline: {{ event.cfp.deadline }}
			</p>
			<a class="button cfp__cta" :href="event.cfp.website" target="_blank"
				>Apply Now!</a
			>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		event: {
			type: Object,
			required: true
		}
	}
}
</script>

<style>
.button {
	background-color: #3eaf7c;
	color: #fff;
	padding: 10px;
	font-size: 0.9rem;
	font-weight: bold;
	display: inline-block;
}

.cfp {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: 1px solid #eaecef;
	padding: 1rem 1.5rem;
	margin: 0 0 2rem;
	border-radius: 5px;
}

.cfp__cta {
	margin-top: 15px;
}

.cfp__type {
	background: #eaecef;
	padding: 0.2rem;
	border-radius: 5px;
	font-size: 12px;
	text-transform: uppercase;
	margin: 0 0 0.5rem;
	display: inline-block;
}

.cfp__title {
	font-size: 1.2rem;
	margin: 10px 0 10px;
}

.cfp__organiser {
	margin-top: 0;
}

.cfp__info {
	font-size: 0.9rem;
	margin: 0;
}

.theme-default-content:not(.custom) .cfp__logo {
	max-width: 60px;
	vertical-align: middle;
	float: right;
}

.theme-default-content:not(.custom) .cfp__icon {
	max-width: 20px;
	vertical-align: middle;
}
</style>
