import { InlineCode } from "@/once-ui/components";

const person = {
	firstName: "Danii",
	lastName: "Oliver",
	get name() {
		return `${this.firstName} ${this.lastName}`;
	},
	role: "Strategic AI, Engineering & Product Partner for Growth & Modernization",
	avatar: "/images/Danii-Oliver-AI-Consultant.png",
	location: "America/New York/Texas", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
	languages: ["LLMOps", "AI", "Strategy", "Leadership", "Product Design"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
	display: true,
	title: <>Subscribe to {person.firstName}'s Newsletter</>,
	description: (
		<>
			I occasionally write about my strategic development, AI technology,
			and share thoughts on the intersection of business leadership,
			product and engineering.
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
		name: "Company",
		icon: "qiaCorp",
		link: "https://chivaapp.com",
	},
	{
		name: "Email",
		icon: "email",
		link: "mailto:productdesign@daniioliver.com",
	},
];

const home = {
	label: "Home",
	title: `${person.name}'s Portfolio`,
	description: `Portfolio website showcasing my work as a ${person.role}`,
	headline: <>Technology Modernization for Growth Phase Products.</>,
	subline: (
		<>
			{person.name} is a systems thinker and transformation catalyst who
			applies strategy to complex compliance, design, development, and
			cross-sector product challenges using technology, AI and automation
			as the lever for change.
			<br />
			<br />
			What others call "all over the place" is actually a rare full-stack
			polymath executive profile. One that is strategic, scalable, and
			reflects entrepreneurial innovation, product ownership, and brand
			vision, all crucial for AI Transformation Leadership roles.
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
				I've built a career at the intersection of design, development,
				and strategic transformation deliberately. It's what allows me
				to lead strategy for AI transformation initiatives with insight
				into how product, data, and customer experience work together.
				I'm not just a specialist in one silo, I'm the bridge between
				silos. That's exactly what this era demands.
				<br />
				<br />
				AI Transformation Leader | Strategic Technologist | Full Stack
				Product Exec
				<br />I have been leading cross-functional teams through digital
				reinvention by applying technology, human-centered design, and
				agile engineering practices to drive meaningful business impact
				in the age of AI/ML. From vision to execution, I help architect
				systems and strategies that scale.
			</>
		),
	},
	work: {
		display: true, // set to false to hide this section
		title: "AI Product Transformation",
		experiences: [
			{
				company: "Chi’Va – AI-Guided Mental Performance Platform",
				timeframe: "2023 - Present",
				role: "Founder, AI & Cloud SaaS + PaaS Product Engineer",
				achievements: [
					<>
						Chi'Va is a neuroscience-based SaaS platform that
						delivers structured somatic and cognitive techniques for
						emotional processing and performance improvement.
					</>,
					<>
						Scope of Work:
						<br />
						* Built the full SaaS infrastructure using Next.js,
						Vercel, and serverless AWS Designed protocol-driven
						session flows based on neuroscience and somatic models
						<br />
						Developed UX for user consent, onboarding, and
						emotionally paced progression 
						- Created tools to track
						SUDs, VoC, and belief metrics across sessions Ensured
						every interaction follows evidence-based protocols with
						zero hallucination risk
					</>,
					<>
						Chi'Va applies AI with precision to support real
						outcomes—measurable, repeatable, and grounded in
						structured practice.
					</>,
					<>
						The Chi'Va platform's first cohort has resulted in an
						80% increase in user engagement and 90% reduced service
						costs.
					</>,
				],
				images: [
					// optional: leave the array empty if you don't want to display images
					{
						src: "/images/gallery/project-chiva-03.jpg",
						alt: "Chi'Va EMDR Platform Marketing",
						width: 16,
						height: 9,
					},
					{
						src: "/images/gallery/project-chiva-01.jpg",
						alt: "Chi'Va EMDR Chat",
						width: 16,
						height: 9,
					},
					{
						src: "/images/gallery/project-chiva-02.jpg",
						alt: "Chi'Va EMDR Therapy Session",
						width: 16,
						height: 9,
					},
					{
						src: "/images/gallery/project-ai-02.jpg",
						alt: "AI Cloud Engineer",
						width: 16,
						height: 9,
					},
				],
			},
			{
				company: "Market Reader",
				timeframe: "2022 - 2023",
				role: "UX & Product Engineer",
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
				role: "Full Stack Engineer, Brand & Product Designer",
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
				name: "Harvardx",
				description: (
					<>
						Studying for: Professional Certificate in Leading in a
						Remote Environment Professional Certificate in Large
						Language Model Operations (LLMOps) Professional
						Certificate in Cloud Solutions Architecture Professional
						Certificate in Computer Science for Artificial
						Intelligence
					</>
				),
			},
			{
				name: "AWS",
				description: (
					<>
						Studying for AI / ML, Cloud Engineering & Solutions
						Architect.
					</>
				),
			},
			{
				name: "Section School",
				description: <>Studied AI, strategy & leadership.</>,
			},
			{
				name: "NYU",
				description: <>Studied ITP, OOP, 3D, Operational Management.</>,
			},
			{
				name: "City University of New York",
				description: (
					<>
						Studied HCI software engineering, business & digital
						communication with a minor in marketing.
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
				title: "Full Stack Engineering, Cloud, React, Next, Node & Python",
				description: (
					<>
						Building next gen apps with AWS + AI + Hugging Face +
						OpenAI Next.js + Supabase + Postgres.
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
					{
						src: "/images/gallery/project-ai-02.jpg",
						alt: "Project image",
						width: 16,
						height: 9,
					},
				],
			},
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
						src: "/images/gallery/product-sdz-04.jpg",
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
			src: "/images/gallery/project-chiva-01.jpg",
			alt: "Chi'Va EMDR Therapy Support",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/project-sdz-01.jpg",
			alt: "San Diego Zoo Event Booking",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/project-mr-05.jpg",
			alt: "Market Reader FinTech",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/project-usd-01.jpg",
			alt: "VR for Unschool Discoveries Book Series",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/project-nyt-01.jpg",
			alt: "New York Times Digital Transformation",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/project-iso-01.jpg",
			alt: "Disney Inside Out Movie Promotions",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/project-mr-01.jpg",
			alt: "Market Reader FinTech",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/project-iso-02.jpg",
			alt: "Disney Inside Out Interactive Platform",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/project-iso-03.jpg",
			alt: "Disney Inside Out Time Square Promotions",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/project-iso-04.jpg",
			alt: "Disney Inside Out Application Platform",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/project-mr-03.jpg",
			alt: "Market Reader FinTech",
			orientation: "horizontal",
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
			orientation: "project",
		},
		{
			src: "/images/gallery/project-sdz-05.jpg",
			alt: "image",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/project-mr-02.jpg",
			alt: "Market Reader FinTech",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/project-sdz-06.jpg",
			alt: "image",
			orientation: "project",
		},
		{
			src: "/images/gallery/project-wire-01.jpg",
			alt: "image",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/project-mr-10.jpg",
			alt: "Market Reader FinTech Saas",
			orientation: "horizontal",
		},
	],
};

export { person, social, newsletter, home, about, casestudies, work, gallery };
