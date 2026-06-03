import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProject } from "../../projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "vincent tian" };
  return {
    title: `${project.title} · vincent tian`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-white text-zinc-900" style={{ fontFamily: "var(--font-geist-sans), Arial, sans-serif" }}>
      <main className="max-w-2xl mx-auto px-6 py-16">

        {/* back */}
        <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
          ← back
        </Link>

        {/* header */}
        <div className="mt-8 mb-8">
          <p className="text-xs font-medium text-zinc-500 mb-2">{project.category} · {project.date}</p>
          <h1 className="text-2xl font-semibold mb-3">{project.title}</h1>
          <p className="text-sm text-zinc-600 leading-relaxed mb-4">
            <span className="font-medium text-zinc-700">tl;dr:</span> {project.summary}
          </p>
          <div className="flex gap-4 text-sm">
            {project.report && (
              <a href={project.report} target="_blank" rel="noopener noreferrer" className="text-zinc-900 underline underline-offset-2 hover:text-zinc-500 transition-colors">
                read the full report
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-900 underline underline-offset-2 hover:text-zinc-500 transition-colors">
                view on github
              </a>
            )}
            {project.award && (
              <span className="text-zinc-500">🏆 {project.award}</span>
            )}
          </div>
        </div>

        {/* hero image */}
        {project.img && (
          <div className="mb-10 flex justify-center rounded-lg bg-zinc-50 border border-zinc-100 p-4">
            <img src={project.img} alt={project.title} className="max-h-80 w-auto object-contain rounded" />
          </div>
        )}

        {/* writeup */}
        <article className="space-y-10">
          {project.detail.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-700 mb-3">
                {section.heading}
              </h2>
              <div className="space-y-3">
                {section.body.map((para, i) => (
                  <p key={i} className="text-sm text-zinc-600 leading-relaxed">{para}</p>
                ))}
              </div>

              {section.figure && (
                <figure className="mt-5">
                  <div className="flex justify-center rounded-lg bg-zinc-50 border border-zinc-100 p-4">
                    <img src={section.figure.src} alt={section.figure.caption ?? section.heading} className="max-h-96 w-auto object-contain rounded" />
                  </div>
                  {section.figure.caption && (
                    <figcaption className="mt-2 text-xs text-zinc-400 text-center">{section.figure.caption}</figcaption>
                  )}
                </figure>
              )}

              {section.table && (
                <figure className="mt-5">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-zinc-300">
                          {section.table.headers.map((h) => (
                            <th key={h} className="text-left font-medium text-zinc-700 py-2 pr-4">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, ri) => (
                          <tr key={ri} className="border-b border-zinc-100">
                            {row.map((cell, ci) => (
                              <td key={ci} className="text-zinc-600 py-2 pr-4 align-top">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {section.table.caption && (
                    <figcaption className="mt-2 text-xs text-zinc-400">{section.table.caption}</figcaption>
                  )}
                </figure>
              )}
            </section>
          ))}
        </article>

        {/* footer */}
        <div className="mt-16 pt-8 border-t border-zinc-100">
          <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
            ← back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
