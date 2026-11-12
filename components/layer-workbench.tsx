"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { demoAssets } from "@/lib/content/layers";
import { demoLabel, kindLabel, layerText } from "@/lib/content/layers-ja";
import type { DemoKey } from "@/lib/content/types";
import { localeHref, type Locale } from "@/lib/i18n";
import { uiCopy, type LevelKey } from "@/lib/ui-copy";

type Stage = "idle" | "running" | "done";

const stageThresholds = [0, 18, 38, 58, 78, 92];

export default function LayerWorkbench({ demo, locale = "en" }: { demo: DemoKey; locale?: Locale }) {
  const asset = demoAssets[demo];
  const t = uiCopy(locale);
  const [upload, setUpload] = useState<{ name: string; url: string; kb: number } | null>(null);
  const [level, setLevel] = useState<LevelKey>(asset.level);
  const [stage, setStage] = useState<Stage>("idle");
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<number>(asset.layers[0].n);
  const [toast, setToast] = useState("");
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const toastRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const flash = useCallback((message: string) => {
    setToast(message);
    if (toastRef.current) clearTimeout(toastRef.current);
    toastRef.current = setTimeout(() => setToast(""), 3200);
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (toastRef.current) clearTimeout(toastRef.current);
    };
  }, []);

  const acceptFile = useCallback(
    (file: File | undefined | null) => {
      if (!file) return;
      if (!file.type.startsWith("image/")) {
        flash(t.workbench.toast.badType);
        return;
      }
      setUpload((prev) => {
        if (prev) URL.revokeObjectURL(prev.url);
        return { name: file.name, url: URL.createObjectURL(file), kb: Math.round(file.size / 1024) };
      });
      setStage("idle");
      setProgress(0);
    },
    [flash, t.workbench.toast.badType],
  );

  const run = useCallback(() => {
    if (stage === "running") return;
    setStage("running");
    setProgress(0);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setProgress((p) => {
        const next = p + (p < 60 ? 2.4 : p < 88 ? 1.3 : 0.7);
        if (next >= 100) {
          if (timerRef.current) clearInterval(timerRef.current);
          setStage("done");
          return 100;
        }
        return next;
      });
    }, 52);
  }, [stage]);

  const reset = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setStage("idle");
    setProgress(0);
    setUpload((prev) => {
      if (prev) URL.revokeObjectURL(prev.url);
      return null;
    });
  }, []);

  const activeLayer = asset.layers.find((l) => l.n === active) ?? asset.layers[0];
  const activeText = layerText(demo, activeLayer.n, locale);
  const stages = t.workbench.stages.map((label, i) => ({ at: stageThresholds[i] ?? 100, label }));
  const stageLabel = [...stages].reverse().find((s) => progress >= s.at)?.label ?? stages[0].label;
  const credits = t.levels[level].credits;
  const running = stage === "running";
  const done = stage === "done";
  const sampleLabel = demoLabel(demo, asset.label, locale);
  const levelsHref = locale === "ja" ? localeHref(locale, "image-to-layers") : "/layer-levels";

  return (
    <div className="glass-strong overflow-hidden">
      {/* toolbar */}
      <div
        className="flex flex-wrap items-center justify-between gap-3 border-b px-4 py-2.5"
        style={{ borderColor: "var(--line)", background: "#fbfcfd" }}
      >
        <div className="flex items-center gap-2.5">
          <span className="flex items-center gap-1.5 text-[12.5px] font-medium text-[#101828]">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <rect x="1.5" y="5.5" width="9" height="9" rx="2" stroke="#8A94A3" strokeWidth="1.2" />
              <rect x="5.5" y="1.5" width="9" height="9" rx="2" fill="#EFF4FF" stroke="#2563EB" strokeWidth="1.2" />
            </svg>
            {t.workbench.studio}
          </span>
          <span className="hidden text-[12px] text-[#6b7280] sm:inline">
            {upload ? `${upload.name} · ${upload.kb} KB` : `${t.workbench.sample} · ${sampleLabel}`}
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11.5px] text-[#5b6879]">
          <span className="tag">{t.workbench.creditsPerRun(credits)}</span>
          <span className="tag hidden sm:inline">{t.workbench.exportTag}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-0 md:grid-cols-[1.12fr_0.88fr]">
        <div className="border-b p-5 md:border-b-0 md:border-r" style={{ borderColor: "var(--line)" }}>
          {!upload ? (
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragging(false);
                acceptFile(e.dataTransfer.files?.[0]);
              }}
              className="flex h-[286px] flex-col items-center justify-center rounded-[10px] border border-dashed px-5 text-center transition"
              style={{
                borderColor: dragging ? "#2563EB" : "#D3D9E0",
                background: dragging ? "#F4F8FF" : "#FBFCFD",
              }}
            >
              <div
                className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border bg-white"
                style={{ borderColor: "var(--line)" }}
              >
                <svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M10 13.5V3.5M10 3.5L6.2 7.3M10 3.5L13.8 7.3"
                    stroke="#101828"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.5 13.5V15.5C3.5 16.3 4.2 17 5 17H15C15.8 17 16.5 16.3 16.5 15.5V13.5"
                    stroke="#101828"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <p className="text-[14px] font-medium text-[#101828]">{t.workbench.dropTitle}</p>
              <p className="mt-1 text-[12.5px] text-[#5b6879]">{t.workbench.dropHint}</p>
              <div className="mt-4 flex items-center gap-2">
                <button type="button" className="btn btn-primary btn-sm" onClick={() => inputRef.current?.click()}>
                  {t.workbench.chooseFile}
                </button>
                <button type="button" className="btn btn-ghost btn-sm" onClick={run}>
                  {t.workbench.useSample}
                </button>
              </div>
              <p className="mt-3 text-[11px] text-[#6b7280]">{t.workbench.browserOnly}</p>
            </div>
          ) : (
            <div className="relative overflow-hidden rounded-[10px] border" style={{ borderColor: "var(--line)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={upload.url}
                alt={t.workbench.uploadAlt(upload.name)}
                className="max-h-[286px] w-full bg-[#f6f7f9] object-contain"
                style={{ aspectRatio: "4 / 3" }}
              />
              <button
                type="button"
                onClick={reset}
                className="absolute right-2 top-2 rounded-[6px] border bg-white/95 px-2.5 py-1 text-[11px] text-[#344054] shadow-sm transition hover:bg-white"
                style={{ borderColor: "var(--line)" }}
              >
                {t.workbench.remove}
              </button>
            </div>
          )}

          <input
            ref={inputRef}
            type="file"
            accept="image/png,image/jpeg,image/webp"
            className="hidden"
            onChange={(e) => acceptFile(e.target.files?.[0])}
          />

          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[11.5px] font-medium uppercase tracking-[0.1em] text-[#6b7280]">
                {t.workbench.levelLabel}
              </span>
              <Link href={levelsHref} className="text-[11.5px] text-[#1d4ed8] hover:underline">
                {t.workbench.whatAreLevels}
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {(Object.keys(t.levels) as LevelKey[]).map((key) => {
                const m = t.levels[key];
                const selected = level === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setLevel(key)}
                    className="min-h-[54px] rounded-[8px] border px-2.5 py-2 text-left transition"
                    style={{
                      borderColor: selected ? "#2563EB" : "var(--line)",
                      background: selected ? "#EFF4FF" : "#ffffff",
                      boxShadow: selected ? "inset 0 0 0 1px #2563EB" : "none",
                    }}
                    aria-pressed={selected}
                  >
                    <span
                      className="block whitespace-nowrap text-[12px] font-medium"
                      style={{ color: selected ? "#1d4ed8" : "#101828" }}
                    >
                      {key} · {m.short}
                    </span>
                    <span className="block text-[10.5px] text-[#6b7280]">{m.range}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
            <button type="button" className="btn btn-primary w-full sm:flex-1" onClick={run} disabled={running}>
              {t.workbench.run(credits, done, running)}
            </button>
            <button
              type="button"
              className="btn btn-ghost w-full sm:w-auto"
              onClick={() => flash(t.workbench.toast.psd)}
            >
              {t.workbench.exportPsd}
            </button>
          </div>

          {stage !== "idle" && (
            <div className="mt-4">
              <div className="mb-1.5 flex items-center justify-between text-[11.5px]">
                <span className="text-[#344054]">{done ? t.workbench.stackReady : stageLabel}</span>
                <span className="tabular-nums text-[#6b7280]">{Math.round(progress)}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#e8ebef]">
                <div
                  className="h-full rounded-full bg-[#2563EB] transition-[width] duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex min-h-[286px] flex-col p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[11.5px] font-medium uppercase tracking-[0.1em] text-[#6b7280]">
              {done ? t.workbench.layersCount(asset.layers.length) : t.workbench.outputPreview}
            </span>
            <span className="text-[11px] tabular-nums text-[#6b7280]">{asset.size}</span>
          </div>

          {!done ? (
            <div
              className="flex flex-1 flex-col justify-center rounded-[10px] border border-dashed p-5 text-center"
              style={{ borderColor: "var(--line)", background: "#fbfcfd" }}
            >
              <p className="text-[13px] leading-relaxed text-[#5b6879]">{t.workbench.previewEmpty}</p>
              <div className="mt-4 space-y-1.5 opacity-70">
                {[92, 74, 86, 61].map((w, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded border bg-white" style={{ borderColor: "var(--line)" }} />
                    <div className="h-2 rounded bg-[#eef0f3]" style={{ width: `${w}%` }} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              <div className="scroll-x -mx-1 flex-1 overflow-y-auto px-1" style={{ maxHeight: 262 }}>
                <ul className="space-y-1.5">
                  {asset.layers.map((l) => {
                    const on = activeLayer.n === l.n;
                    const text = layerText(demo, l.n, locale);
                    return (
                      <li key={l.n}>
                        <button
                          type="button"
                          onMouseEnter={() => setActive(l.n)}
                          onClick={() => setActive(l.n)}
                          className="flex w-full items-center gap-2.5 rounded-[8px] border px-2.5 py-2 text-left transition"
                          style={{
                            borderColor: on ? "#2563EB" : "var(--line)",
                            background: on ? "#EFF4FF" : "#ffffff",
                          }}
                        >
                          <span className="w-5 shrink-0 text-[10.5px] tabular-nums text-[#6b7280]">
                            {String(l.n).padStart(2, "0")}
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-[12.5px] text-[#101828]">
                              {text?.name ?? l.name}
                            </span>
                            <span className="block text-[10.5px] text-[#6b7280]">
                              {kindLabel(l.kind, locale)} · z {l.z}
                            </span>
                          </span>
                          <span className="tag tag-accent">PNG</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div
                className="mt-3 rounded-[10px] border p-3"
                style={{ borderColor: "var(--line)", background: "#fbfcfd" }}
              >
                <p className="text-[12px] font-medium text-[#101828]">
                  {String(activeLayer.n).padStart(2, "0")} · {activeText?.name ?? activeLayer.name}
                </p>
                <p className="mt-1 text-[11px] leading-relaxed text-[#5b6879]">
                  {activeText?.note ?? activeLayer.note ?? t.workbench.defaultNote}
                </p>
                <div className="mt-2.5 flex gap-2">
                  <button
                    type="button"
                    className="rounded-[6px] border bg-white px-2.5 py-1 text-[11px] text-[#344054] transition hover:bg-[#f5f7fa]"
                    style={{ borderColor: "var(--line-strong)" }}
                    onClick={() => flash(t.workbench.toast.png)}
                  >
                    {t.workbench.downloadPng}
                  </button>
                  <button
                    type="button"
                    className="rounded-[6px] border bg-white px-2.5 py-1 text-[11px] text-[#344054] transition hover:bg-[#f5f7fa]"
                    style={{ borderColor: "var(--line-strong)" }}
                    onClick={() => flash(t.workbench.toast.zip)}
                  >
                    {t.workbench.allLayers}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div
        className="flex flex-wrap items-center justify-between gap-2 border-t px-4 py-2.5"
        style={{ borderColor: "var(--line)", background: "#fbfcfd" }}
      >
        <p className="text-[11px] text-[#6b7280]">{t.workbench.footnote}</p>
        <Link href={levelsHref} className="text-[11px] text-[#1d4ed8] hover:underline">
          {t.workbench.levelGuide}
        </Link>
      </div>

      {toast ? (
        <div
          className="pointer-events-none fixed bottom-6 left-1/2 z-[80] -translate-x-1/2 rounded-[8px] border bg-white px-4 py-2 text-[12.5px] text-[#101828]"
          style={{ borderColor: "var(--line-strong)", boxShadow: "var(--shadow-lg)" }}
        >
          {toast}
        </div>
      ) : null}
    </div>
  );
}
