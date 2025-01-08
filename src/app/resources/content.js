import { InlineCode } from "@/once-ui/components";

const person = {
	firstName: "Danii",
	lastName: "Oliver",
	get name() {
		return `${this.firstName} ${this.lastName}`;
	},
	role: "AI/ML-Focused Product Executive and Technical Founder with Engineering Expertise",
	avatar: "/images/avatar.jpg",
	location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
	languages: ["English", "Baby ASL"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
	display: true,
	title: <>Subscribe to {person.firstName}'s Newsletter</>,
	description: (
		<>
			I occasionally write about my hackathons, ai technology, and share
			thoughts on the intersection of business leadership, product and
			engineering.
		</>
	),
};

const social = [
	// Links are automatically displayed.
	// Import new icons in /once-ui/icons.ts
	{
		name: "GitHub",
		icon: "github",
		link: "https://github.com/DTheArtist",
	},
	{
		name: "LinkedIn",
		icon: "linkedin",
		link: "https://www.linkedin.com/in/daniioliver",
	},
	{
		name: "Email",
		icon: "email",
		link: "mailto:info@daniioliver.com",
	},
];

const home = {
	label: "Home",
	title: `${person.name}'s Portfolio`,
	description: `Portfolio website showcasing my work as a ${person.role}`,
	headline: <>Product Strategist and Tech Business Innovator</>,
	subline: (
		<>
			I’m {person.name}, Chief Product Officer and builder at{" "}
			<InlineCode>Quantum Innovation Advisors</InlineCode>, where I lead
			the development of transformative tech solutions that address modern
			challenges with innovation and strategic vision. Combining a
			foundation in software engineering with a focus on user-centered
			product strategy, I thrive at the intersection of business growth
			and technical innovation. A lifelong learner and entrepreneur, I
			build and refine impactful projects that empower users and drive
			meaningful outcomes.
		</>
	),
};

const about = {
	label: "About",
	title: `About ${person.name}`,
	description: `Meet ${person.name}, ${person.role} from ${person.location}`,
	tableOfContent: {
		display: true,
		subItems: false,
	},
	avatar: {
		display: true,
	},
	calendar: {
		display: false,
		link: "https://cal.com",
	},
	intro: {
		display: true,
		title: "Introduction",
		description: (
			<>
				{person.name} is a US-based {person.role} with a predisposition
				for transforming ideas into tech based solutions. Their work
				spans digital interfaces, interactive experiences, and the
				convergence of business and technology.
			</>
		),
	},
	work: {
		display: true, // set to false to hide this section
		title: "Work Experience",
		experiences: [
			{
				company: "Chi'Va EMDR",
				timeframe: "2024 - Present",
				role: "Technical Founder, CTO, CPO",
				achievements: [
					<>
						Developed behavioral health services platform with
						utilizing the integration of AI tools into session
						workflows, enabling providers to recoup 40%-60% of lost
						revenue and provide clients with an 80% more effective
						session.
					</>,
					<>
						Engineered the AI/ML/UI/UX for the Chi'Va platform,
						resulting in a 20% increase in user engagement and 90%
						reduced service costs.
					</>,
				],
				images: [
					// optional: leave the array empty if you don't want to display images
					{
						src: "/images/gallery/project-chiva-01.jpg",
						alt: "Chi'Va EMDR Platform",
						width: 16,
						height: 9,
					},
					{
						src: "/images/gallery/project-chiva-02.jpg",
						alt: "Chi'Va EMDR Platform",
						width: 16,
						height: 9,
					},
					{
						src: "/images/gallery/project-ai-02.jpg",
						alt: "Project image",
						width: 16,
						height: 9,
					},
				],
			},
			{
				company: "Market Reader",
				timeframe: "2022 - 2023",
				role: "CPO/Head UX Engineer",
				achievements: [
					<>
						Developed a SaaS system that unified the brand across
						multiple platforms, improving design consistency by 40%.
					</>,
					<>
						Led a cross-functional team to launch a new FinTech
						product, contributing to a 15% increase in overall
						company revenue.
					</>,
				],
				images: [
					{
						src: "/images/gallery/project-mr-05.jpg",
						alt: "Market Reader Project",
						width: 16,
						height: 9,
					},
					{
						src: "/images/gallery/project-mr-07.jpg",
						alt: "Market Reader Project",
						width: 16,
						height: 9,
					},
				],
			},
			{
				company: "Damn Digital Studio",
				timeframe: "2014 - 2021",
				role: "UX Engineer",
				achievements: [
					<>
						Developed consumer goods solutions that unified client
						brands across multiple platforms, improving marketing,
						UX and CX.
					</>,
					<>
						Led a cross-functional team to launch a several product
						lines, contributing to a 45% increase in overall company
						revenue.
					</>,
				],
				images: [
					{
						src: "/images/gallery/project-iso-03.jpg",
						alt: "Market Reader Project",
						width: 16,
						height: 9,
					},
					{
						src: "/images/gallery/project-usd-01.jpg",
						alt: "Market Reader Project",
						width: 16,
						height: 9,
					},
					{
						src: "/images/gallery/project-nyt-01.jpg",
						alt: "Market Reader Project",
						width: 16,
						height: 9,
					},
					{
						src: "/images/gallery/project-pch-01.jpg",
						alt: "Market Reader Project",
						width: 16,
						height: 9,
					},
				],
			},
		],
	},
	studies: {
		display: true, // set to false to hide this section
		title: "Studies",
		institutions: [
			{
				name: "Section School",
				description: <>Studied strategy & leadership.</>,
			},
			{
				name: "NYU",
				description: <>Studied ITP, OOP, 3D, Operational Management.</>,
			},
			{
				name: "City University of New York",
				description: (
					<>
						Studied HCI software engineering, business &
						Communication with minors in marketing.
					</>
				),
			},
		],
	},
	technical: {
		display: true, // set to false to hide this section
		title: "Technical skills",
		skills: [
			{
				title: "Figma",
				description: <>Able to prototype in Figma, Adobe, Paper.</>,
				// optional: leave the array empty if you don't want to display images
				images: [
					{
						src: "/images/gallery/project-pes-04.jpg",
						alt: "Project image",
						width: 16,
						height: 9,
					},
					{
						src: "/images/gallery/project-sdz-04.jpg",
						alt: "Project image",
						width: 16,
						height: 9,
					},
				],
			},
			{
				title: "Full Stack Node & Python",
				description: (
					<>
						Building next gen apps with AWS + AI + Hugging Face +
						Next.js + Supabase.
					</>
				),
				// optional: leave the array empty if you don't want to display images
				images: [
					{
						src: "/images/gallery/project-ai-01.jpg",
						alt: "Project image",
						width: 16,
						height: 9,
					},
				],
			},
		],
	},
};

const casestudies = {
	label: "Case Studies",
	title: "Key takeaways from projects built to meet client expectations",
	description: `Read what ${person.name} has been up to recently`,
	// Create new case study posts by adding a new .mdx file to app/casestudies/posts
	// All posts will be listed on the /casestudies route
};

const work = {
	label: "Work",
	title: "Product Projects",
	description: `Business product projects by ${person.name}`,
	// Create new project pages by adding a new .mdx file to app/casestudies/posts
	// All projects will be listed on the /home and /work routes
};

const gallery = {
	label: "Projects",
	title: "Project Portfolio",
	description: `A project photo collection by ${person.name}`,
	// Images from https://pexels.com
	images: [
		{
			src: "/images/gallery/product-sdz-01.jpg",
			alt: "image",
			orientation: "vertical",
		},
		{
			src: "/images/gallery/saas-mr-01.jpg",
			alt: "image",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/project-usd-01.jpg",
			alt: "image",
			orientation: "vertical",
		},
		{
			src: "/images/gallery/project-nyt-01.jpg",
			alt: "image",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/project-iso-01.jpg",
			alt: "image",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/project-iso-02.jpg",
			alt: "image",
			orientation: "vertical",
		},
		{
			src: "/images/gallery/project-iso-03.jpg",
			alt: "image",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/project-iso-04.jpg",
			alt: "image",
			orientation: "vertical",
		},
		{
			src: "/images/gallery/project-sdz-02.jpg",
			alt: "image",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/project-sdz-03.jpg",
			alt: "image",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/project-sdz-04.jpg",
			alt: "image",
			orientation: "vertical",
		},
		{
			src: "/images/gallery/project-sdz-05.jpg",
			alt: "image",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/project-sdz-06.jpg",
			alt: "image",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/project-wire-01.jpg",
			alt: "image",
			orientation: "horizontal",
		},
	],
};

export { person, social, newsletter, home, about, casestudies, work, gallery };
