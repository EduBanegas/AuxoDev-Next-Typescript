import { StaticImageData } from 'next/image'

export interface Candidate {
	id: number
	name: string
	profile?: string | StaticImageData
	applicationId?: number
	videos?: Video[]
}

export interface Video {
	src: string
	questionId: number
	question: string
	comments: Comment[]
}

export interface Comment {
	owner: string
	comment: string
	id?: string
}
