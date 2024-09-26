import { PropsWithChildren } from 'react'

const Grid = ({ children }: PropsWithChildren) => {
	return <div className='grid'>{children}</div>
}

export default Grid
