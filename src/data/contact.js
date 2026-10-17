/**
 * Contact details.
 *
 * Every `value: null` below is UNCONFIRMED and renders as a visible
 * "awaiting confirmation" state. Do not guess an address, a map pin or a
 * phone number — fill these in only from details the committee provides.
 */

export const contactDetails = [
  {
    id: "venue",
    label: "Utsav Venue",
    value: null,
    awaiting: "The exact venue address within the Galiakot Estate precinct is awaiting confirmation from the committee.",
    hint: "Chembur, Mumbai, Maharashtra",
  },
  {
    id: "phone",
    label: "Telephone",
    value: null,
    awaiting: "An official contact number has not yet been supplied.",
  },
  {
    id: "email",
    label: "Email",
    value: null,
    awaiting: "An official email address has not yet been supplied.",
  },
  {
    id: "social",
    label: "Social",
    value: "@gk_utsav1958",
    href: "https://www.instagram.com/gk_utsav1958/",
    external: true,
  },
];

/**
 * Map embed is disabled until the venue is confirmed — a wrong pin sends
 * devotees to the wrong place, which is worse than no map at all.
 */
export const mapEmbed = {
  enabled: false,
  src: null,
};
