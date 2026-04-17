import { Link, useParams } from 'react-router-dom';
import { bySlug } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const p = bySlug(id);

  if (!p) {
    return (
      <div className="container py-24">
        <h1 className="h1">Project not found</h1>
        <p className="text-neutral-300 mt-3">
          The page you’re looking for doesn’t exist. <Link to="/" className="link">Go home</Link>.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="ratio-16x9">
        <img src={p.hero} alt={p.title} className="img-cover" />
      </div>

      <div className="container section">
        <Link to="/" className="text-neutral-400 hover:text-white">&larr; Back</Link>
        <p className="eyebrow mt-6">Case Study</p>
        <h1 className="h1 mt-2">{p.title}</h1>
        <div className="text-neutral-400 mt-1">{p.stack}</div>

        <p className="text-neutral-300 mt-5 max-w-[820px]">{p.summary}</p>

        <ul className="list-disc list-inside mt-6 text-neutral-300 space-y-1">
          {p.bullets?.map((b) => <li key={b}>{b}</li>)}
        </ul>

        <div className="flex flex-wrap gap-4 mt-6">
          {p.links?.view && <a className="btn" href={p.links.view}>View project</a>}
          {p.links?.code && (
            <a className="btn" href={p.links.code} target="_blank" rel="noreferrer">View code</a>
          )}
        </div>

        {p.gallery?.length > 0 && (
          <>
            <div className="hr my-10" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {p.gallery.map((src) => (
                <img key={src} src={src} alt="detail" className="rounded-xl lift" />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
