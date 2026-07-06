/**
 * Frontend-only persistence layer.
 * The Spring Boot backend has no endpoints for mission checklists, activity
 * feeds, or build estimates — so these workspace enhancements live entirely
 * in localStorage. Nothing here touches auth, profile, or recommendation
 * API calls.
 */

const ACTIVITY_KEY = "pf_activity_log";
const CHECKLIST_KEY = "pf_mission_checklist";
const MAX_ACTIVITY = 12;

function safeParse(raw, fallback) {
  try {
    const parsed = JSON.parse(raw);
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}

export function logActivity(type, title, meta = "") {
  const log = safeParse(localStorage.getItem(ACTIVITY_KEY), []);
  const entry = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    type,
    title,
    meta,
    timestamp: new Date().toISOString(),
  };
  const next = [entry, ...log].slice(0, MAX_ACTIVITY);
  localStorage.setItem(ACTIVITY_KEY, JSON.stringify(next));
  return next;
}

export function getActivity() {
  return safeParse(localStorage.getItem(ACTIVITY_KEY), []);
}

export function timeAgo(isoString) {
  const diffMs = Date.now() - new Date(isoString).getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

const DEFAULT_MISSION_STEPS = [
  { id: "setup", label: "Set up project repo & environment" },
  { id: "schema", label: "Design database schema" },
  { id: "api", label: "Build core API endpoints" },
  { id: "auth", label: "Implement authentication" },
  { id: "frontend", label: "Build the frontend UI" },
  { id: "integration", label: "Connect frontend to backend" },
  { id: "testing", label: "Test core user flows" },
  { id: "deploy", label: "Deploy & write README" },
];

function keyFor(projectTitle) {
  return `${CHECKLIST_KEY}:${(projectTitle || "untitled").slice(0, 80)}`;
}

export function getMissionChecklist(projectTitle) {
  const stored = safeParse(localStorage.getItem(keyFor(projectTitle)), null);
  if (stored) return stored;
  return DEFAULT_MISSION_STEPS.map((s) => ({ ...s, done: false }));
}

export function toggleMissionStep(projectTitle, stepId) {
  const current = getMissionChecklist(projectTitle);
  const next = current.map((s) =>
    s.id === stepId ? { ...s, done: !s.done } : s
  );
  localStorage.setItem(keyFor(projectTitle), JSON.stringify(next));
  return next;
}

export function missionProgress(checklist) {
  if (!checklist?.length) return 0;
  const done = checklist.filter((s) => s.done).length;
  return Math.round((done / checklist.length) * 100);
}
