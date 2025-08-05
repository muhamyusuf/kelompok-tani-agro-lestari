import { notFound } from "next/navigation";
import { blogs } from "#site/content";

import type { Metadata, ResolvingMetadata } from "next";
import Balancer from "react-wrap-balancer";
import { siteConfig } from "@/config/site.config";
import { absoluteUrl, cn } from "@/lib/utils";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { DashboardTableOfContents } from "@/components/mdx/toc";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function getBlogBySlug(slugArr: string[]) {
    const slug = slugArr.join("/") || "";
    return blogs.find((post) => post.slugAsParams === slug) ?? null;
}

export async function generateMetadata(
    {
        params,
    }: {
        params: Promise<{ slug: string[] }>;
    },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { slug } = await params;
    const blog = getBlogBySlug(slug);
    const previousImages = (await parent).openGraph?.images || [];

    if (!blog) return {};

    const canonical = absoluteUrl(`/blog/${slug.join("/")}`);

    return {
        title: `${blog.title} - ${siteConfig.name}`,
        description: blog.description,
        keywords: blog.title
            .split(" ")
            .filter((w) => w.length > 3)
            .slice(0, 10)
            .join(", "),
        openGraph: {
            title: blog.title,
            description: blog.description,
            type: "article",
            url: canonical,
            images: [siteConfig.og, ...previousImages],
        },
        twitter: {
            card: "summary_large_image",
            title: blog.title,
            description: blog.description,
            images: [siteConfig.og],
            creator: siteConfig.creator.name,
        },
        alternates: {
            canonical,
        },
        robots: {
            index: true,
            follow: true,
        },
        // metadataBase: new URL(siteConfig.url),
    };
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
    return blogs.map((blog) => ({
        slug: blog.slugAsParams.split("/"),
    }));
}

interface BlogPostPageProps {
    params: Promise<{ slug: string[] }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const blog = getBlogBySlug(slug);

    if (!blog || !blog.published) notFound();

    const tocContent = Array.isArray(blog.toc) ? blog.toc : [];

    const canonical = absoluteUrl(`/blog/${slug.join("/")}`);
    const publishedDate = new Date(blog.date).toISOString();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: blog.title,
        description: blog.description,
        author: {
            "@type": "Person",
            name: blog.author || siteConfig.creator.name,
        },
        datePublished: publishedDate,
        image: blog.thumbnail ? absoluteUrl(blog.thumbnail) : siteConfig.og,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": canonical,
        },
    };

    return (
        <main className="relative w-full px-4 md:px-6 lg:px-8 max-w-6xl mx-auto py-32 flex flex-col xl:flex-row gap-10">
            {/* ✅ Schema.org JSON-LD */}
            <script type="application/ld+json" suppressHydrationWarning>
                {JSON.stringify(jsonLd)}
            </script>

            <div className="w-full mx-auto min-w-0">
                <Breadcrumb className="mb-4">
                    <BreadcrumbList>
                        {blog.slug.split("/").map((part, index, array) => (
                            <div className="flex items-center gap-2" key={index}>
                                <BreadcrumbItem>
                                    <BreadcrumbLink
                                        href={`/${array.slice(0, index + 1).join("/")}`}
                                        className={cn(
                                            index === array.length - 1
                                                ? "text-foreground"
                                                : "text-muted-foreground"
                                        )}
                                    >
                                        {part.charAt(0).toUpperCase() + part.slice(1)}
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                {index < array.length - 1 && <BreadcrumbSeparator />}
                            </div>
                        ))}
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="space-y-2 mb-6">
                    <h1 className="scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight font-heading">
                        {blog.title}
                    </h1>
                    {blog.description && (
                        <p className="text-base text-muted-foreground">
                            <Balancer>{blog.description}</Balancer>
                        </p>
                    )}
                    <p className="text-sm text-muted-foreground">
                        Dipublikasikan pada{" "}
                        {new Date(blog.date).toLocaleDateString("id-ID", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                        {blog.author && ` oleh ${blog.author}`}
                    </p>
                </div>

                {blog.thumbnail && (
                    <div className="mb-8 overflow-hidden rounded-md">
                        <img
                            src={blog.thumbnail}
                            alt={`Gambar ilustrasi untuk ${blog.title}`}
                            className="w-full max-h-[500px] object-cover"
                        />
                    </div>
                )}

                <div className="prose dark:prose-invert max-w-none pb-12">
                    <MDXContentRenderer code={blog.body} />
                </div>

                <div className="flex justify-center w-full xl:w-auto">
                    <a
                        href="/blog"
                        className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
                    >
                        Kembali ke Blog
                    </a>
                </div>
            </div>

            {tocContent.length > 0 && (
                <div className="hidden text-sm xl:block">
                    <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] pt-4">
                        <DashboardTableOfContents toc={tocContent} />
                    </div>
                </div>
            )}
        </main>
    );
}
