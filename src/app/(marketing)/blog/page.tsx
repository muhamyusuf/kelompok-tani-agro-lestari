import { blogs } from "#site/content";
import { siteConfig } from "@/config/site.config";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export async function generateMetadata() {
    return {
        title: `Blog - ${siteConfig.name}`,
        description:
            "Temukan wawasan segar seputar melon premium, tips budidaya, hingga manfaat kesehatan dari Agro Lestari.",
    };
}

export default function BlogListPage() {
    const sortedBlogs = blogs
        .filter((blog) => blog.published)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const firstSix = sortedBlogs.slice(0, 6);
    const rest = sortedBlogs.slice(6);

    return (
        <div className="max-w-6xl mx-auto py-12 px-4 space-y-16">
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight font-heading">
                    Wawasan Seputar Melon Premium
                </h1>
                <p className="text-lg text-muted-foreground mt-2">
                    Baca berbagai artikel menarik seputar budidaya melon, manfaat kesehatannya,
                    dan cerita di balik proses panen dari kebun Agro Lestari di Lampung Timur.
                </p>
            </div>

            {/* --- Bento Grid 6 Artikel Pertama --- */}
            <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-8 auto-rows-[minmax(180px,auto)] gap-4">
                {firstSix.map((blog, idx) => {
                    const colSpan =
                        idx === 0
                            ? "sm:col-span-3 lg:col-span-4"
                            : idx === 1
                                ? "sm:col-span-3 lg:col-span-2"
                                : idx === 2
                                    ? "sm:col-span-3 lg:col-span-2"
                                    : idx === 3
                                        ? "sm:col-span-6 lg:col-span-4"
                                        : idx === 4
                                            ? "sm:col-span-3 lg:col-span-2"
                                            : "sm:col-span-3 lg:col-span-2";

                    const rowSpan =
                        idx === 0 || idx === 3 ? "row-span-2" : "row-span-1";

                    const imageHeightClass =
                        idx === 0 || idx === 3 ? "h-96" : "h-48";

                    return (
                        <Card
                            key={blog.slug}
                            className={cn(
                                "border border-[#2E6B54]/30 dark:border-[#2E6B54] bg-white dark:bg-[#17362B] shadow-sm rounded-xl p-4 flex flex-col justify-between",
                                colSpan,
                                rowSpan
                            )}
                        >
                            <div>
                                <div className="mb-4 overflow-hidden rounded-md">
                                    <img
                                        src={blog.thumbnail || "https://picsum.photos/600"}
                                        alt={blog.title}
                                        className={cn("w-full object-cover", imageHeightClass)}
                                    />
                                </div>

                                <CardHeader className="p-0">
                                    <CardTitle className="text-lg sm:text-xl font-semibold">
                                        <Link href={`/${blog.slug}`}>{blog.title}</Link>
                                    </CardTitle>
                                    {blog.description && (
                                        <CardDescription className="mt-2 text-sm">
                                            {blog.description}
                                        </CardDescription>
                                    )}
                                </CardHeader>
                            </div>

                            <CardFooter className="flex justify-between items-center mt-4 p-0 text-sm">
                                <span className="text-muted-foreground">
                                    {new Date(blog.date).toLocaleDateString("id-ID", {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",
                                    })}
                                </span>
                                <Link
                                    href={`/${blog.slug}`}
                                    className={cn(
                                        buttonVariants({ variant: "ghost" }),
                                        "gap-2 text-sm px-3 py-1"
                                    )}
                                >
                                    Baca <ArrowRight size={16} />
                                </Link>
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>

            {/* --- More Artikel --- */}
            {rest.length > 0 && (
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        More Artikel & Blog
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {rest.map((blog) => (
                            <Card
                                key={blog.slug}
                                className="border border-[#2E6B54]/30 dark:border-[#2E6B54] bg-white dark:bg-[#17362B] shadow-sm rounded-xl p-4 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="mb-4 overflow-hidden rounded-md">
                                        <img
                                            src={blog.thumbnail || "https://picsum.photos/600"}
                                            alt={blog.title}
                                            className="w-full h-48 object-cover"
                                        />
                                    </div>

                                    <CardHeader className="p-0">
                                        <CardTitle className="text-lg sm:text-xl font-semibold">
                                            <Link href={`/${blog.slug}`}>{blog.title}</Link>
                                        </CardTitle>
                                        {blog.description && (
                                            <CardDescription className="mt-2 text-sm">
                                                {blog.description}
                                            </CardDescription>
                                        )}
                                    </CardHeader>
                                </div>

                                <CardFooter className="flex justify-between items-center mt-4 p-0 text-sm">
                                    <span className="text-muted-foreground">
                                        {new Date(blog.date).toLocaleDateString("id-ID", {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </span>
                                    <Link
                                        href={`/${blog.slug}`}
                                        className={cn(
                                            buttonVariants({ variant: "ghost" }),
                                            "gap-2 text-sm px-3 py-1"
                                        )}
                                    >
                                        Baca <ArrowRight size={16} />
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
