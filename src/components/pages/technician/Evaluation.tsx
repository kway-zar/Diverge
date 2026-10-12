import { useEffect, useState } from "react";
import { useDataRefresh } from "@/hooks/useDataRefresh";

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4001";
type Review = { id: string; reviewer: string; rating: number; date: string; comment: string };
type EvaluationData = {
  averageRating: number;
  reviewCount: number;
  breakdown: { stars: number; count: number }[];
  completedJobsCount: number;
  reviews: Review[];
};

function Stars({ count, size = 14 }: { count: number; size?: number }) {
  return <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, index) => <span key={index} style={{ fontSize: size }} className={index < count ? "text-[#e1ae08]" : "text-white/20"}>★</span>)}
  </div>;
}

function Evaluation() {
  const [evaluation, setEvaluation] = useState<EvaluationData | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  async function loadEvaluation() {
    const token = localStorage.getItem("diverge_token");
    if (!token) {
      setErrorMessage("Technician sign-in is required to view evaluations.");
      setIsLoading(false);
      return;
    }
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/technician/evaluation`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload?.message ?? "Unable to load evaluations.");
      setEvaluation(payload?.data ?? null);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to load evaluations.");
    } finally {
      setIsLoading(false);
    }
  }

  useDataRefresh(loadEvaluation);
  useEffect(() => { void loadEvaluation(); }, []);

  const maxCount = Math.max(1, ...(evaluation?.breakdown.map((row) => row.count) ?? [0]));

  return (
    <div className="w-full px-4 pb-10 pt-2 text-left text-white lg:px-10">
      <div className="mb-4">
        <h1 className="text-xl font-bold tracking-wider">My Evaluation</h1>
        <p className="font-mono text-xs text-white/40">Customer feedback for your resolved work</p>
      </div>
      {errorMessage && <p role="alert" className="mb-4 text-sm text-red-300">{errorMessage}</p>}
      {isLoading ? <p className="text-white/60">Loading evaluations...</p> : evaluation && (
        <>
          <section className="flex flex-col gap-5 rounded-lg border border-white/10 bg-white/5 shadow-glassy-jeri p-5 lg:flex-row lg:items-center lg:p-8">
            <div className="flex shrink-0 flex-col items-center gap-1 lg:items-start">
              <span className="text-4xl font-medium">{evaluation.reviewCount ? evaluation.averageRating.toFixed(1) : "—"}</span>
              <Stars count={Math.round(evaluation.averageRating)} size={18} />
              <span className="text-xs uppercase text-white/55">{evaluation.reviewCount} customer reviews</span>
            </div>
            <div className="flex-1 space-y-2">
              {evaluation.breakdown.map((row) => (
                <div key={row.stars} className="flex items-center gap-2">
                  <span className="w-8 shrink-0 font-mono text-xs">{row.stars} ★</span>
                  <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-white/15">
                    <div className="h-full rounded-full bg-[#e1ae08]" style={{ width: `${(row.count / maxCount) * 100}%` }} />
                  </div>
                  <span className="w-6 text-right text-xs text-white/60">{row.count}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-5 rounded-lg border border-white/10 bg-white/5 shadow-glassy-jeri p-5">
            <h2 className="mb-4 text-lg font-medium">Performance</h2>
            <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div><dt className="text-xs text-white/50">Resolved jobs</dt><dd className="mt-1 text-2xl font-semibold">{evaluation.completedJobsCount}</dd></div>
              <div><dt className="text-xs text-white/50">Customer reviews</dt><dd className="mt-1 text-2xl font-semibold">{evaluation.reviewCount}</dd></div>
              <div><dt className="text-xs text-white/50">Average rating</dt><dd className="mt-1 text-2xl font-semibold">{evaluation.reviewCount ? `${evaluation.averageRating.toFixed(1)} / 5` : "No ratings yet"}</dd></div>
            </dl>
          </section>

          <section className="mt-6">
            <h2 className="mb-3 text-lg font-medium">Customer Feedback</h2>
            <div className="flex flex-col gap-3">
              {evaluation.reviews.map((review) => (
                <article key={review.id} className="rounded-lg border border-white/10 bg-white/5 shadow-glassy-jeri p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-medium">{review.reviewer}</span>
                    <time className="text-xs text-white/50">{new Date(review.date).toLocaleDateString()}</time>
                  </div>
                  <div className="mt-2 flex items-start justify-between gap-3">
                    <p className="text-sm text-white/80">{review.comment}</p>
                    <Stars count={review.rating} />
                  </div>
                </article>
              ))}
              {!evaluation.reviews.length && <p className="py-6 text-sm text-white/55">No customer evaluations yet. Reviews are available after resolved tickets are evaluated.</p>}
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default Evaluation;
