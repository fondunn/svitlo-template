interface SectionProps {
	children: React.ReactNode
}

const Section = ({ children }: SectionProps) => {
	return <section>{children}</section>
}

export default Section
