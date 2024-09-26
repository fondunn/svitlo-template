interface SectionProps {
	children: React.ReactNode
}

const Container = ({ children }: SectionProps) => {
	return <div>{children}</div>
}

export default Container
