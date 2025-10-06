import { getPosts } from '@/app/utils/utils';
import { Grid } from '@/once-ui/components';
import Post from './Post';

interface PostsProps {
    range?: [number] | [number, number];
    columns?: '1' | '2' | '3';
    locale: string;
    thumbnail?: boolean;
}

export function Posts({
    range,
    columns = '1',
    locale = 'en',
    thumbnail = false
}: PostsProps) {
    let allCaseStudies = getPosts(['src', 'app', '[locale]', 'casestudies', 'posts', locale]);

    const sortedCaseStudies = allCaseStudies.sort((a, b) => {
        return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
    });

    const displayedCaseStudies = range
        ? sortedCaseStudies.slice(
              range[0] - 1,
              range.length === 2 ? range[1] : sortedCaseStudies.length 
          )
        : sortedCaseStudies;

    return (
        <>
            {displayedCaseStudies.length > 0 && (
                <Grid
                    columns={`repeat(${columns}, 1fr)`} mobileColumns="1col"
                    fillWidth marginBottom="40" gap="m">
                    {displayedCaseStudies.map((post) => (
                        <Post
                            key={post.slug}
                            post={post}
                            thumbnail={thumbnail}
                        />
                    ))}
                </Grid>
            )}
        </>
    );
}