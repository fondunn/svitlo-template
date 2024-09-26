import { FeaturesBasic } from './features/basic'
import { HeroBasic } from './hero'

export const chain = {
	hero: {
		basic: {
			chunk: HeroBasic,
		},
	},
	features: {
		basic: {
			chunk: FeaturesBasic,
		},
	},
}
