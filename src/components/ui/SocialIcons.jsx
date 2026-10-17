/**
 * Brand glyphs.
 *
 * lucide-react removed its brand icons, so these are hand-authored to
 * match lucide's 24px grid and `currentColor` convention.
 */

export function InstagramIcon({ size = 20, ...rest }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.05" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ size = 20, ...rest }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <path d="M15.1 7.6h-1.4a2.1 2.1 0 0 0-2.1 2.1v10" />
      <path d="M9.2 12.6h4.9" />
    </svg>
  );
}

export function YoutubeIcon({ size = 20, ...rest }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      <path d="M21.4 7.6a2.5 2.5 0 0 0-1.7-1.8C18.1 5.4 12 5.4 12 5.4s-6.1 0-7.7.4A2.5 2.5 0 0 0 2.6 7.6 26 26 0 0 0 2.2 12c0 1.5.1 3 .4 4.4a2.5 2.5 0 0 0 1.7 1.8c1.6.4 7.7.4 7.7.4s6.1 0 7.7-.4a2.5 2.5 0 0 0 1.7-1.8c.3-1.4.4-2.9.4-4.4s-.1-3-.4-4.4Z" />
      <path d="M10.2 14.9 15.3 12l-5.1-2.9Z" fill="currentColor" />
    </svg>
  );
}

export const socialIcons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  youtube: YoutubeIcon,
};
