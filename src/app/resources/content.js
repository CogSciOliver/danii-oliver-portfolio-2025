import { InlineCode } from "@/once-ui/components";

const person = {
	firstName: "Danii",
	lastName: "Oliver",
	get name() {
		return `${this.firstName} ${this.lastName}`;
	},
	role: "Entrepreneur | Founder | Strategist | Innovation Executive",
	avatar: "/images/Danii-Oliver-AI-Consultant.png",
	location: "America/New York/Texas", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
	languages: ["LLMOps", "AI", "Strategy", "Leadership", "Product Innovation"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
	display: false,
	title: <>Subscribe to {person.firstName}'s Newsletter</>,
	description: <></>,
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
		icon: "flame",
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
	title: `${person.name}'s Bio`,
	description: `Demonstrating leadership in ${person.role} Leadership.`,
	headline: <>Entrepreneur | Founder | Strategist | Innovation Executive</>,
	subline: (
		<>
			I am a founder and strategist building ventures at the intersection
			of product, technology, and market creation. From luxury activations
			to SaaS platforms, breweries to AI, I’ve proven ideas in real
			markets by bootstrapping them to 45% YOY growth with national
			recognition. My strength is being fluent across industries and
			audiences, bridging departmental silos, breaking down complexity,
			and turning it into working systems. Now I’m entering the next
			stage: scaling impact with venture partnerships and capital
			alignment.
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
				I build ventures at the intersection of entrepreneurship and
				strategic innovation for product, engineering, and market
				creation. From enterprise client activations to financial SaaS
				platforms, manufacturing to AI, my work has always bridged
				worlds that rarely speak the same language. I thrive in
				complexity, building systems where markets are emerging, silos
				need breaking, and resilience is non-negotiable.
				<br />
				<br />
				I’ve bootstrapped ventures with my own capital, proving their
				strength in real markets while scaling consumer brands to
				national recognition, launching platforms recognized by
				Bloomberg and Nasdaq, and incubating platforms that reshaped
				entire communities.
				<br />
				<br />
				Now I’m entering the next stage: engaging capital tools like
				corporate venture capital, SAFEs, and convertible notes to
				accelerate scale and impact. I am a founder fluent across
				industries. That has been my grit, my resilience, and my
				strategy: connecting departments, industries, and audiences to
				capture emerging market opportunities and drive growth.
				<br />
				<i>
					I align stakeholders around clarity and execution, turning
					complexity into systems that work.
				</i>
			</>
		),
	},
	work: {
		display: true, // set to false to hide this section
		title: "AI Product Ventures",
		experiences: [
			{
				company: "Chi’Va – AI-Guided Mental Performance Platform",
				timeframe: "2023 - Present",
				role: "Entrepreneur, Founder",
				achievements: [
					<>
						Chi'Va is a neuroscience-based SaaS platform that
						delivers structured somatic and cognitive techniques for
						emotional processing and mental performance enhancement
						for high-performers.
					</>,
					<>Scope of Work:</>,
					<>
						Launched the full SaaS infrastructure using React /
						Next.js, Node, Git, Vercel, and serverless AWS
					</>,
					<>
						Engineered AI-Agents utilizing Multi-Agent Pattern &
						Planning Pattern for agentic protocol-driven session
						flows based on neuroscience and somatic models
					</>,
					<>
						Developed UX for user consent, onboarding, and
						emotionally paced progression
					</>,
					<>
						Created tools to track SUDs, VoC, and belief metrics
						across sessions
					</>,
					<>
						Ensured every interaction follows neuroscience
						evidence-based protocols with no hallucination risk
					</>,
					<>
						Chi'Va applies AI with precision to support real
						outcomes that are measurable, repeatable, and grounded
						in a structured mental and emotional performance
						practice.
					</>,
					<>
						Impact: Chi'Va's first platform cohort has resulted in
						an 80% increase in industry baseline user engagement and
						90% reduction in service delivery costs.
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
				role: "Chief Product Officer",
				achievements: [
					<>
						Led cross-functional team to deliver a $3.1M AI-powered
						FinTech SaaS MVP, integrating LLM-driven market
						explanation tools. Launched to market with national
						recognition from Nasdaq and Bloomberg.
					</>,
					<>
						Applied fine-tuned prompts, domain-specific embeddings,
						and early-stage RAG techniques to align with
						investor-grade insight delivery.
					</>,
					<>
						Integrated agent workflows for stock movement analysis,
						NLP summarization of financial data, and predictive
						visualization dashboards.
					</>,

					<>
						Developed a modular SaaS system that unified brand and
						UX across platforms, improving design consistency.
					</>,
					<>
						Spearheaded go-to-market delivery leading end-to-end
						product execution using Agile engineering protocols.
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
				company: "House of Juice",
				timeframe: "2014 - 2019",
				role: "Entrepreneur | Founder",
				achievements: [
					<>
						Proved that product systems thinking applies beyond
						screens—using live experiences to prototype concepts
						like onboarding, retention, service customization, and
						user feedback loops
					</>,
					<>
						Launched beverage manufacturing, retail bar and
						enterprise wellness activation services during a period
						of industry-wide stagnation, where digital product
						innovation had plateaued due to templatization and
						commoditized web experiences
					</>,
					<>
						Engineered end-to-end customer engagement systems:
						including logistics, staff orchestration, product
						programming, and branded service flows. Mirroring
						software development methodologies in a live event
						environments
					</>,
					<>
						Delivered real-world “interaction design” through
						pop-ups and brand activations, designing service
						architecture to match corporate brand strategy,
						experience design, and operational scale
					</>,
					<>
						Built and deployed modular event systems that prefigured
						the orchestration logic now used in AI agents and
						service automation
					</>,
					<>
						💡 While the tech industry flatlined into templates, I
						built a brand that prototyped real-world interaction
						design. Every activation was a live-service system,from
						logistics to UX, years ahead of the AI orchestration
						logic now reshaping technology and human access.
					</>,
				],
				images: [
					{
						src: "/videos/Juice Bar Gathering.mp4",
						alt: "House of Juice Popup",
						width: 16,
						height: 9,
					},
					{
						src: "/videos/hoj-zip-recruiter.gif",
						alt: "Market Reader Project",
						width: 16,
						height: 9,
					},
				],
			},
			{
				company: "Quantum Innovation Advisors",
				timeframe: "2010 - 2024",
				role: "Founder & Managing Member",
				achievements: [
					<>
						Advised creative agencies, publishers, and global brands
						during a pivotal shift from print to digital, driving
						modernization through interactive UX, cross-platform
						delivery, and early mobile responsiveness
					</>,
					<>
						Spearheaded digital transformation initiatives across
						industries; transitioning clients from static brand
						assets to scalable, content-rich platforms aligned with
						emerging tech behaviors
					</>,
					<>
						Delivered experience design systems and multi-device
						activations before industry-wide standardization through
						templatization flattened differentiation
					</>,
					<>
						Built bespoke digital products that bridged branding,
						storytelling, and front-end engineering at a time when
						cloud infrastructure and automation were still emerging
					</>,
					<>
						This era laid the foundation for my future work in AI
						and cloud-native SaaS. Establishing a repeatable
						playbook for modernizing legacy systems, activating new
						user channels, and translating complexity into intuitive
						digital systems
					</>,
					<>
						Built a bridge between creative vision and technical
						execution; positioning clients to scale during waves of
						change across publishing, marketing, health, food and
						beverage, finance, gaming and entertainment sectors
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
		title: "Strategic Technical Fluency",
		skills: [
			{
				title: "Full Stack Engineering, Cloud, React, Next, Node & Python",
				description: (
					<>
						Building next gen apps with AWS, Python, AI, Hugging
						Face, OpenAI, Next JS, Supabase, Postgres.
					</>
				),
				images: [],
			},
		],
		title: "Operational Capabilities",
		skills: [
			{
				title: "Full Stack Engineering, Cloud, React, Next, Node & Python",
				description: (
					<>
						Building next gen apps with AWS, Python, AI, Hugging
						Face, OpenAI, Next JS, Supabase, Postgres.
					</>
				),
				images: [],
			},
		],
		title: "Cross-Functional Execution",
		skills: [
			{
				title: "The bridge between tech, design, product, and business",
				description: (
					<>
						Building next gen apps with AWS, Python, AI, Hugging
						Face, OpenAI, Next JS, Supabase, Postgres.
					</>
				),
				images: [],
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
