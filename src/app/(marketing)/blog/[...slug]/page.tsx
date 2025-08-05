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

// ✅ Helper untuk ambil data blog
function getBlogBySlug(slugArr: string[]) {
    const slug = slugArr.join("/") || "";
    return blogs.find((post) => post.slugAsParams === slug) ?? null;
}

// ✅ Metadata Generator: params sebagai Promise
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

    return {
        title: `${blog.title} - ${siteConfig.name}`,
        description: blog.description,
        openGraph: {
            title: blog.title,
            description: blog.description,
            type: "article",
            url: absoluteUrl(blog.slug),
            images: [siteConfig.og, ...previousImages],
        },
        twitter: {
            card: "summary_large_image",
            title: blog.title,
            description: blog.description,
            images: [siteConfig.og],
            creator: siteConfig.creator.name,
        },
    };
}

// ✅ Static Params Generator
export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
    return blogs.map((blog) => ({
        slug: blog.slugAsParams.split("/"),
    }));
}

interface BlogPostPageProps {
    params: Promise<{ slug: string[] }>;
}

// ✅ Halaman Blog Detail
export default async function BlogPostPage({
    params,
}: BlogPostPageProps) {
    const { slug } = await params;
    const blog = getBlogBySlug(slug);

    if (!blog || !blog.published) notFound();

    const tocContent = Array.isArray(blog.toc) ? blog.toc : [];

    return (
        <main className="relative w-full px-4 md:px-6 lg:px-8 max-w-6xl mx-auto py-32 flex flex-col xl:flex-row gap-10">
            <div className="w-full mx-auto min-w-0">
                {/* Breadcrumb */}
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

                {/* Judul & Deskripsi */}
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

                {/* Thumbnail */}
                {blog.thumbnail && (
                    <div className="mb-8 overflow-hidden rounded-md">
                        <img
                            src={blog.thumbnail}
                            alt={blog.title}
                            className="w-full max-h-[500px] object-cover"
                        />
                    </div>
                )}

                {/* Konten */}
                <div className="prose dark:prose-invert max-w-none pb-12">
                    <MDXContentRenderer code={blog.body} />
                </div>

                {/* Tombol kembali */}
                <div className="flex justify-center w-full xl:w-auto">
                    <a
                        href="/blog"
                        className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
                    >
                        Kembali ke Blog
                    </a>
                </div>
            </div>


            {/* TOC */}
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
