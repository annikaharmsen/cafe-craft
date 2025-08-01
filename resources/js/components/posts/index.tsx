import HeroSection from '../hero-section';

export function Index({ posts }) {
    return (
        <>
            {posts &&
                posts.map((post) => (
                    <HeroSection
                        imageUrl={post.image?.url}
                        imagePlacement={post.index % 2 ? 'right' : 'left'}
                        className={post.index % 2 ? 'bg-background' : 'bg-card'}
                    >
                        <h2 className="text-3xl font-bold">{post.title}</h2>
                        <p>{post.body}</p>
                    </HeroSection>
                ))}
        </>
    );
}
