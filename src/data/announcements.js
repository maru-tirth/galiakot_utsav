/**
 * Announcement strip + Darshan status.
 *
 * IMPORTANT: no date here is invented. Until the committee supplies the
 * confirmed festival calendar, `status` stays "awaiting" and the site says
 * so plainly. Never set `status: "live"` without an actual live stream.
 */

export const announcements = [
  {
    id: "calendar-awaiting",
    kind: "notice",
    text: "Ganesh Utsav dates for the coming year will be announced here",
    href: "/ganesh-utsav",
    linkLabel: "Ganesh Utsav",
  },
  {
    id: "follow",
    kind: "notice",
    text: "Follow @gk_utsav1958 on Instagram for daily festival updates",
    href: "https://www.instagram.com/gk_utsav1958/",
    linkLabel: "Instagram",
    external: true,
  },
  {
    id: "volunteer",
    kind: "notice",
    text: "Devotees wishing to volunteer with the mandal may write to us",
    href: "/contact",
    linkLabel: "Contact",
  },
];

/**
 * Darshan status drives the Darshan panel and the header pill.
 * One of: "awaiting" | "scheduled" | "live"
 *
 * "live" must only ever be set when an official stream is actually running.
 */
export const darshanStatus = {
  status: "awaiting",
  headline: "Darshan timings for the coming Utsav",
  detail:
    "Official Darshan timings, Mukh Darshan arrangements and queue information are confirmed by the mandal shortly before each Ganesh Utsav. They will be published here and on our social channels.",
  // Populate these once confirmed by the committee:
  dates: null, // e.g. "27 August – 6 September"
  timings: null, // e.g. [{ label: "Mukh Darshan", value: "6:00 AM – 11:00 PM" }]
  venue: null,
};
