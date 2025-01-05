import { Flex, Heading, Text } from "@/once-ui/components";
import Image from "next/image";

export default function NotFound() {
	return (
		<Flex
			as="section"
			direction="column"
			alignItems="center"
		>
			<Image
				src="/images/404.webp" // Image path in the public folder
				width={500}
				height={500}
				alt="404 Meme"
			/>

			<Text
				marginBottom="s"
				variant="display-strong-xl"
			>
				404
			</Text>
			<Heading
				marginBottom="l"
				variant="display-strong-xs"
			>
				Page Not Found
			</Heading>
			<Text onBackground="neutral-weak">
				The page you are looking for does not exist.
			</Text>
		</Flex>
	);
}
