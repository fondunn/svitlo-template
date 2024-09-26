import { chain } from './chain'

export const chunk = ({ parent, variant, content }) => {
	const Component = chain?.[parent]?.[variant]?.chunk
	if (!Component) return null
	return <Component content={content} />
}
